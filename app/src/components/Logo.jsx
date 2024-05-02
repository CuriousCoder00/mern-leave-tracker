import { GoClockFill } from "react-icons/go";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
        <GoClockFill className="text-2xl font-extrabold text-slate-200"/>
      <div className="flex font-bold items-center justify-center text-xl">
        <span className="text-slate-50">
            Leave
        </span>
        <span className="text-sky-300">Tracker</span>
      </div>
    </div>
  );
};

export default Logo;
