import { MdConstruction } from "react-icons/md";
const Vacations = () => {
  return (
    <div className=" h-[87vh] flex flex-col justify-center items-center">
      <MdConstruction className=" text-9xl animate-bounce text-sky-800" />
      <p className="text-2xl font-bold">Coming Soon!</p>
      <p className="text-slate-700">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        This page is under construction. We'll be back soon.
      </p>
    </div>
  );
};

export default Vacations;
