import { ProfileDataType } from "../types";

const HoverProfileCard = ({ user }: { user: ProfileDataType }) => {
  return (
    <div className=" px-4 py-2  absolute z-10 translate-y-11 bg-purple-200 rounded shadow-lg overflow-hidden max-w-min">
      <div className="min-w-max flex items-centerborder-b border-gray-200 gap-4">
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
      <div>
        <div>
          <div className="font-semibold text-md text-black">{user.role}</div>
          <div className="text-gray-700">{user.bio}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverProfileCard;
