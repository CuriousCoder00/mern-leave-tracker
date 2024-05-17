import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    setConfirmPassword(e.target.value);
  };
  const matchResultError =
    password === confirmPassword ? null : "Password Did Not Match";

  const passwordValidationResult =
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[@$!%*?&]/.test(password);
  return (
    <form className="flex flex-col gap-4 w-full mt-4">
      <input
        type="text"
        name="name"
        autoComplete="name"
        placeholder="Enter Your Name..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
        required
      />
      <input
        type="email"
        name="email"
        autoComplete="email"
        placeholder="Enter Your Email..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
        required
      />
      <input
        type="password"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        name="password"
        autoComplete="new-password"
        onChange={handlePasswordChange}
        placeholder="Enter Your Password..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
        required
      />

      <input
        type="password"
        placeholder="Confirm Password"
        autoComplete="new-password"
        onChange={handleConfirmPasswordChange}
        className={`p-2 border-2 focus:outline-none ${
          matchResultError
            ? "focus:border-red-400 shadow-lg shadow-red-400"
            : "focus:border-emerald-500 shadow-lg shadow-emerald-400"
        } rounded-md text-slate-600`}
        required
      />
      {!matchResultError && passwordValidationResult ? (
        <div className="flex text-xs items-center gap-2 text-slate-300">
          <FaCheck className="text-emerald-500" />
          All password validations passed successfully
        </div>
      ) : (
        <div className="flex text-xs">
          <div className="mb-4">
            <ul>
              <li
                className="flex items-center gap-2 text-slate-300"
                id="minLength"
              >
                {password.length >= 8 ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaTimes className="text-red-500" />
                )}
                Minimum 8 characters
              </li>
              <li
                className="flex items-center gap-2 text-slate-300"
                id="uppercase"
              >
                {/[A-Z]/.test(password) ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaTimes className="text-red-500" />
                )}
                At least one uppercase letter
              </li>
              <li
                className="flex items-center gap-2 text-slate-300"
                id="lowercase"
              >
                {/[a-z]/.test(password) ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaTimes className="text-red-500" />
                )}
                At least one lowercase letter
              </li>
              <li
                className="flex items-center gap-2 text-slate-300"
                id="symbol"
              >
                {/[@$!%*?&]/.test(password) ? (
                  <FaCheck className="text-green-500" />
                ) : (
                  <FaTimes className="text-red-500" />
                )}
                At least one symbol (@$!%*?&)
              </li>
            </ul>
          </div>
        </div>
      )}
      <button className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
