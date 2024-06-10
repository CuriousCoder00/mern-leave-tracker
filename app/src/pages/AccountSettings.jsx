import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import axios from "axios";
const AccountSettings = () => {
  const url = import.meta.env.VITE_URL;
  const { user, token } = useContext(DataContext);
  const initialValue = {
    name: user.name,
    email: user.email,
    password: user.password,
  };
  const [data, setData] = useState(initialValue);
  const onValueChange = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const updateUser = async () => {
    try {
      const response = await axios.put(`${url}/api/update/user`, data.name.toString(), data.email.toString(), data.password, {
        headers: {
          "auth-token": token,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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
            <div className="flex flex-col gap-2 md:w-1/2 w-full text-slate-700 p-4 rounded-lg">
              <div className="flex flex-col">
                <label htmlFor="name" className="font-semibold">
                  Full name
                </label>
                <input
                  type="text"
                  name="name"
                  className="outline-none w-full focus:outline-none p-2 rounded-lg text-black font-semibold"
                  onChange={onValueChange}
                  placeholder={data.name}
                />
              </div>
              <div className="flex w-full flex-col">
                <label htmlFor="email" className="font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="outline-none w-full focus:outline-none p-2 rounded-lg text-slate-500"
                  placeholder={data.email}
                  onChange={onValueChange}
                />
              </div>
              <div className="flex flex-col text-slate-700 rounded-lg">
                <label htmlFor="newPassword" className="font-semibold">
                  New Password
                </label>
                <div className="flex w-full">
                  <input
                    type="password" name="password"
                    onChange={onValueChange}
                    className="outline-none w-full focus:outline-none p-2 rounded-lg text-slate-500"
                    placeholder="Enter your new password"
                  />
                </div>
              </div>
              <button
                className="p-2 mt-3 bg-blue-700 text-white rounded-lg"
                onClick={updateUser}
              >
                Update User
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
