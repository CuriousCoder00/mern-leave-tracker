import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [register, setRegister] = useState(initialState);
  const [error, setError] = useState("");
  const onInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const matchResult = register.password === register.confirmPassword;

  const passwordValidationResult =
    register.password.length >= 8 &&
    /[A-Z]/.test(register.password) &&
    /[a-z]/.test(register.password) &&
    /[@$!%*?&]/.test(register.password);

  // handle registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    if (matchResult && passwordValidationResult) {
      console.log('....');
    }
  };

  return (
    <form className="flex flex-col gap-4 w-full mt-4">
      <input
        type="text"
        name="name"
        onChange={(e) => onInputChange(e)}
        autoComplete="name"
        placeholder="Enter Your Name..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
        required
      />
      <input
        type="email"
        name="email"
        onChange={(e) => onInputChange(e)}
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
        onChange={(e) => onInputChange(e)}
        placeholder="Enter Your Password..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
        required
      />

      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="Confirm Password"
        autoComplete="new-password"
        onChange={(e) => onInputChange(e)}
        className={`p-2 border-2 focus:outline-none ${
          !matchResult
            ? "focus:border-red-400 shadow-lg shadow-red-400"
            : "focus:border-emerald-500 shadow-lg shadow-emerald-400"
        } rounded-md text-slate-600`}
        required
      />
      {matchResult && passwordValidationResult ? (
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
                {register.password.length >= 8 ? (
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
                {/[A-Z]/.test(register.password) ? (
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
                {/[a-z]/.test(register.password) ? (
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
                {/[@$!%*?&]/.test(register.password) ? (
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
      {error && <div className="text-red-500 text-xs text-center">{error}</div>}
      <button
        className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500"
        onClick={handleRegistration}
      >
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
