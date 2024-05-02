import { GoSignOut } from "react-icons/go";

const UserProfile = () => {
    // eslint-disable-next-line react/prop-types
  return (
    <div className="flex bg-slate-200 transition-all absolute top-5 right-4 z-10 justify-center items-start rounded-lg">
      <div className="m-4 flex flex-col mt-6 gap-2">
        <div className="flex items-center gap-2 hover:bg-slate-300 text-slate-700 p-2 rounded-lg cursor-pointer">
          username
        </div>
        <div className="flex items-center gap-2 hover:bg-slate-300 text-slate-700 p-2 rounded-lg cursor-pointer">
          <GoSignOut /> Logout
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
