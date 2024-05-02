

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-4 w-full mt-4">
      <input
        type="text"
        placeholder="Username"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <input
        type="email"
        placeholder="Email"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <button className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500">
        Register
      </button>
    </form>
  )
}

export default RegisterForm
