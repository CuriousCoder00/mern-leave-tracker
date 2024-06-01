import { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import axios from "axios";
const initialState = {
  name: "",
  email: "",
  password: "",
};
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterForm = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setLoginToggle } = props;
  const [register, setRegister] = useState(initialState);
  const [error, setError] = useState("");
  const onInputChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };
  const notifySuccess = () => toast.success("Registration Successful !");
  const notifyError = () => toast.error("Registration Failed !");
  const passwordValidationResult =
    register.password.length >= 8 &&
    /[A-Z]/.test(register.password) &&
    /[a-z]/.test(register.password) &&
    /[@$!%*?&]/.test(register.password);

  // eslint-disable-next-line no-undef
  const url = "http://localhost:3001";
  // handle registration
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/register`, {
        name: register.name,
        email: register.email,
        password: register.password,
      });
      if (response.data.success) {
        notifySuccess();
        setLoginToggle("login");
      }
    } catch (error) {
      notifyError();
      setError(error.response.data.msg);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
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

      {passwordValidationResult ? (
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
        disabled={!passwordValidationResult}
        className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500"
        onClick={handleRegistration}
      >
        Register
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </div>
  );
};

export default RegisterForm;
