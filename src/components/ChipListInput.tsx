import { useState } from "react";
import { isProfileDataType } from "../lib/utils";
import { ProfileDataType } from "../types";
import Chip from "./Chip";
import UsersListItem from "./UsersListView";
import HoverProfileCard from "./HoverProfileCard";
import useChipList from "../hooks/useChipList";

const ChipListInput = ({ data }: { data: ProfileDataType[] }) => {
  const {
    filteredItems,
    selectedItems,
    addToSelectionWithId,
    removeFromSelection,
    searchQuery,
    updateSearchParams,
    isDeleting,
    handleInputKeyDown,
    highlightedIndex
  } = useChipList(data);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputFocus = () => {
    setIsModalOpen(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => setIsModalOpen(false), 200);
  };


  return (
    <div className="bg-purple-100 items-center px-4 w-full pt-2 inline-flex-wrap max-h-min h-min rounded-md m-3 align-top pb-3">
      {selectedItems.map((profileData, index) => (
        <Chip
          key={profileData.id}
          id={profileData.id}
          avatarUrl={
            isProfileDataType(profileData) ? profileData.avatarUrl : undefined
          }
          label={
            isProfileDataType(profileData)
              ? profileData.name!
              : profileData.email
          }
          onDismiss={removeFromSelection}
          selected={isDeleting && index === selectedItems.length - 1}
          hoveredCardContent={
            isProfileDataType(profileData) ? (
              <HoverProfileCard user={profileData} />
            ) : undefined
          }
        />
      ))}
      <div className="inline-flex overflow-hidden">
        {isModalOpen && (
          <div className="rounded-md bg-purple-100 absolute translate-y-11 overflow-y-scroll max-h-96 custom-scrollbar">
            {filteredItems.map((user, index) => (
              <UsersListItem
                highlighted={index === highlightedIndex}
                key={user.id}
                user={user}
                onItemPressed={addToSelectionWithId}
              />
            ))}
          </div>
        )}
        <input
          autoFocus={true}
          value={searchQuery}
          className="flex-1 py-2 px-4 rounded-lg bg-transparent shadow-none border-none text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-0 p-0"
          placeholder="Add more..."
          onChange={updateSearchParams}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleInputKeyDown}
        />
      </div>
    </div>
  );
};

export default ChipListInput;
