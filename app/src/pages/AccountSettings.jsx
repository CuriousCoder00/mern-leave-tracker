import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const AccountSettings = () => {
  const { account } = useContext(DataContext);
  return (
    <div className="p-2 flex flex-col justify-center">
      <div className="overflow-auto w-full h-[85vh]">
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">
          Account Settings
        </h1>
        <div className="flex flex-col w-full">
          <div className="w-full ">
            <div className="text-xl font-semibold rounded-lg p-2 text-slate-700 mb-2">
              Profile
              <span className="block text-sm text-slate-500">
                Manage your profile settings
              </span>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div className="text-xl font-semibold rounded-lg p-2 text-slate-700 mb-2">
              Basic info
              <span className="block text-sm text-slate-500">
                Your basic info details
              </span>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div className="flex md:flex-row flex-col gap-2 w-full text-slate-700 p-4 rounded-lg">
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-semibold">
                  Full name
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="outline-none w-full focus:outline-none p-2 rounded-lg text-black font-semibold"
                    value={account.name}
                  />
                  <button className="bg-blue-700 rounded-lg px-3 text-white">
                    Update
                  </button>
                </div>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <div className="flex w-full">
                  <input
                    type="text"
                    className="outline-none w-full focus:outline-none p-2 rounded-lg text-slate-500"
                    value={account.email}
                  />
                  <button className="bg-blue-700 rounded-lg px-3 text-white">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <div className="p-2">
              <h2 className="text-lg font-semibold text-slate-700">
                Change Password
              </h2>
              <div className="text-sm text-slate-500">Manage your password</div>
            </div>
            <div className="w-full h-[1px] bg-slate-300"></div>
            <div className="flex md:flex-row flex-col gap-2 w-full text-slate-700 p-4 rounded-lg">
              <div className="flex flex-col w-full">
                <label htmlFor="currentPassword" className="font-semibold">
                  Current Password
                </label>
                <div className="flex gap-2">
                  <input
                    type="password"
                    className="outline-none w-full focus:outline-none p-2 rounded-lg text-black font-semibold"
                    placeholder="Enter your current password"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="newPassword" className="font-semibold">
                  New Password
                </label>
                <div className="flex w-full">
                  <input
                    type="password"
                    className="outline-none w-full focus:outline-none p-2 rounded-lg text-slate-500"
                    placeholder="Enter your new password"
                  />
                </div>
              </div>
            </div>
            <div className="px-3">
              <button className="p-2 w-full md:w-64 bg-blue-700 text-white rounded-lg">
                Update Password
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="text-lg font-semibold rounded-lg p-2 text-slate-700">
            Privacy & Security
            <span className="block text-sm text-slate-500">
              Manage your account
            </span>
          </div>
          <div className="w-full h-[1px] bg-slate-300"></div>
          <div className="flex md:flex-row flex-col gap-2 w-full text-slate-700 p-4 rounded-lg">
            <div className="flex w-full flex-col">
              <label htmlFor="email" className="font-semibold">
                Account Deletion
              </label>
              <div className="flex mt-2 w-full">
                <button className="bg-red-700 w-full md:w-56 rounded-lg p-3 text-white">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
