// import { VscGitStashApply } from "react-icons/vsc";
import { useContext } from "react";
import { FaWpforms, FaHistory, FaCalendar, FaUsers } from "react-icons/fa";

import { Link } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
const Sidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { toggleNav } = props;
  const { user } = useContext(DataContext);
  const isAdmin = user.role === "admin" ? true : false;

  return (
    <div
      className={`relative z-10 transition-all ${
        toggleNav ? "justify-start" : ""
      } border-none delay-75 mx-2 h-[88vh] flex`}
    >
      <div className="bg-sky-700 transition-all p-2 rounded-lg flex m-1 gap-2 items-center flex-col justify-start">
        {isAdmin ? <>
          <Link
              to="/"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <MdDashboard className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
          <Link
              to="/admins"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <MdAdminPanelSettings className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Admins
              </span>
            </Link>
          <Link
              to="/users"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaUsers className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Users
              </span>
            </Link>
            <Link
              to="/apply-for-leave"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaWpforms className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Apply
              </span>
            </Link>
            <Link
              to="/history"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaHistory className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                History
              </span>
            </Link>
            <Link
              to="/vacations"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaCalendar className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Vacations
              </span>
            </Link>
        </> :
          <>
            <Link
              to="/"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <MdDashboard className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Dashboard
              </span>
            </Link>
            <Link
              to="/apply-for-leave"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaWpforms className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Apply
              </span>
            </Link>
            <Link
              to="/history"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaHistory className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                History
              </span>
            </Link>
            <Link
              to="/vacations"
              className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
            >
              <FaCalendar className="text-xl " />
              <span
                className={`${
                  toggleNav ? "text-sm bold transition-all delay-75" : "hidden"
                }`}
              >
                Vacations
              </span>
            </Link>
          </>
        }
      </div>
    </div>
  );
};

export default Sidebar;
