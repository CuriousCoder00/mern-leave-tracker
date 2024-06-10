import { FaBackward } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-full w-full bg-black text-white">
      <div className="flex gap-1 justify-center items-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-400"></div>
        <span className="text-red-600 font-bold text-2xl">Error 404</span> -
        Something Broke
      </div>
      <div className="flex justify-center items-center">
        <Link className="text-slate-500 hover:underline cursor-pointer" to="/">
          {" "}
          <FaBackward className="inline" /> Go Back To Home Page
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
