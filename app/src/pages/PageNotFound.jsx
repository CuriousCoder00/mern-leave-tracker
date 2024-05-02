const PageNotFound = () => {
  return (
    <div className="flex gap-2 justify-center items-center h-full w-full bg-black text-white">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-400"></div>
      <span className="text-red-600 font-bold text-2xl">Error 404</span> - Page
      Not Found
      {/* animated Loader with tailwind */}
    </div>
  );
};

export default PageNotFound;
