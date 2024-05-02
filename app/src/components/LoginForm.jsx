const LoginForm = () => {
  return (
    <div className="flex flex-col gap-4 mt-5 w-full">
      <input
        type="text"
        placeholder="Username"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <button className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500">
        Login
      </button>
    </div>
  );
};

export default LoginForm;
