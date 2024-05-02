// import { VscGitStashApply } from "react-icons/vsc";
import { FaWpforms, FaHistory, FaCalendar } from "react-icons/fa";

import { Link } from "react-router-dom";
const Sidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const {toggleNav} = props;
  

  return (
    <div
      className={`relative transition-all ${
        toggleNav ? "justify-start" : ""
      } border-none mx-2 h-[90vh] flex`}
    >
      <div className="bg-sky-700 transition-all p-2 rounded-lg flex m-1 gap-2 items-center flex-col justify-start">
        <Link
          to="/"
          className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
        >
          <FaWpforms className="text-xl " />
          <span className={`${toggleNav ? "text-sm bold" : "hidden"}`}>Apply</span>
        </Link>
        <Link
          to="/history"
          className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
        >
          <FaHistory className="text-xl " />
          <span className={`${toggleNav ? "text-sm bold" : "hidden"}`}>
            History
          </span>
        </Link>
        <Link
          to="/vacations"
          className="flex w-full hover:bg-sky-600 cursor-pointer rounded-lg p-2 text-sky-100 gap-3 items-center"
        >
          <FaCalendar className="text-xl " />
          <span className={`${toggleNav ? "text-sm bold" : "hidden"}`}>
            Vacations
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
