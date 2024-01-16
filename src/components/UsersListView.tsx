import { cn } from "../lib/utils";
import { ProfileDataType } from "../types";

const UsersListItem = ({
  user,
  onItemPressed,
  highlighted,
}: {
  user: ProfileDataType;
  onItemPressed: (user: string) => any;
  highlighted: boolean;
}) => {
  return (
    <div
      key={user.id}
      onClick={() => onItemPressed(user.id)}
      className={cn(
        highlighted ? "bg-indigo-200" : "bg-purple-200",
        "flex items-center  px-4 py-2 border-b border-gray-200 hover:bg-indigo-200 cursor-pointer gap-4"
      )}
    >
      <img
        src={user.avatarUrl}
        alt={user.name}
        className="w-12 h-12 rounded-full shadow-sm"
      />
      <div>
        <div className="font-semibold text-lg text-black">{user.name}</div>
        <div className="text-gray-700">{user.email}</div>
      </div>
    </div>
  );
};

export default UsersListItem;
