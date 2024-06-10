import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from "./Logo";
import AVATAR from "../assets/avatar.png";
import { VscClose, VscMenu } from "react-icons/vsc";
import { GoSignOut } from "react-icons/go";
import "react-toastify/dist/ReactToastify.css";
import { DataContext } from "../context/DataContext";
const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { toggleNav, setToggleNav } = props;
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { onLogOut } = useContext(DataContext);

  return (
    <>
      <div className={`justify-between flex items-center p-5 transition-all`}>
        <div className="flex gap-5 items-center">
          <Link to="/" className="hover:scale-95 transition-all delay-100">
            <Logo />
          </Link>
          {toggleNav ? (
            <div className="flex">
              <VscClose
                className={`text-2xl cursor-pointer transition-all delay-100 justify-end hover:scale-110 text-white hover:text-slate-200`}
                onClick={() => setToggleNav(!toggleNav)}
              />
            </div>
          ) : (
            <div className="flex ">
              <VscMenu
                className="text-2xl cursor-pointer transition-all delay-100  text-white hover:text-slate-200 hover:scale-110"
                onClick={() => setToggleNav(!toggleNav)}
              />
            </div>
          )}
        </div>
        <div className="relative">
          <button
            className={`rounded-full ${
              showProfileMenu ? "shadow-md shadow-sky-500 border-[1px]" : ""
            } overflow-hidden cursor-pointer hover:scale-110 transition-all delay-75`}
            onClick={() => {
              setShowProfileMenu(!showProfileMenu);
            }}
          >
            <img
              src={AVATAR}
              alt="profile avatar"
              className="w-[1.52rem] h-[1.52rem]"
            />
          </button>
          {showProfileMenu && (
            <>
              <div className="flex mt-2 right-0 bg-white absolute z-20 justify-center items-start rounded-lg">
                <div className="w-52 py-3">
                  <div className="block py-2 hover:bg-sky-600 transition-all delay-75 hover:text-slate-100 cursor-pointer text-slate-900">
                    <Link
                      to="account"
                      className="px-2"
                      onClick={() => setShowProfileMenu(!showProfileMenu)}
                    >
                      Account Settings
                    </Link>
                  </div>
                  <div className="block py-2 hover:bg-sky-600 transition-all delay-75  hover:text-slate-100 cursor-pointer text-slate-900">
                    <span className="px-2" onClick={onLogOut}>
                      Logout
                      <GoSignOut className="inline mx-2" />
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
