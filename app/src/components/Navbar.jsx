import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "./Logo";

import { FaUserCircle } from "react-icons/fa";
import { VscClose, VscMenu } from "react-icons/vsc";
import UserProfile from "./UserProfile";

const Navbar = (props) => {
  // eslint-disable-next-line react/prop-types
  const {toggleNav, setToggleNav} = props;
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <>
      <div className={`justify-between flex items-center p-5 transition-all`}>
        <div className="flex gap-5 items-center">
          <Link to="/">
            <Logo />
          </Link>
          {toggleNav ? (
            <div className="flex justify-end">
              <VscClose
                className={`text-2xl cursor-pointer justify-end text-white hover:text-slate-200`}
                onClick={() => setToggleNav(!toggleNav)}
              />
            </div>
          ) : (
            <div className="flex">
              <VscMenu
                className="text-xl cursor-pointer text-white hover:text-slate-200"
                onClick={() => setToggleNav(!toggleNav)}
              />
            </div>
          )}
        </div>
        <div className="flex transition-all justify-center items-center text-sky-200">
          {showProfileMenu ? (
            <>
              <VscClose
                className="text-2xl transition-all z-30 text-slate-500 hover:scale-125 cursor-pointer"
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                }}
              />
              <UserProfile
                closeToggle={showProfileMenu}
                setCloseToggle={setShowProfileMenu}
              />
            </>
          ) : (
            <FaUserCircle
              className="text-2xl transition-transform cursor-pointer hover:scale-125"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
