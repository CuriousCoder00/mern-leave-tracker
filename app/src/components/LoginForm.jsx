import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DataProvider from "../context/DataProvider";
import { DataContext } from "../context/DataContext";
const LoginInitial = {
  email: "",
  password: "",
};

const LoginForm = (props) => {
  const [loginStates, setLoginStates] = useState(LoginInitial);
  const [error, setError] = useState(null);
  // eslint-disable-next-line react/prop-types
  const { isUserAuthenticated } = props;
  const { setAccount } = useContext(DataContext);

  const navigate = useNavigate();
  const notifySuccess = () => toast.success("Login Successful !");
  const notifyError = () => toast.error("Login Failed !");
  const handleValueChange = (e) => {
    setLoginStates({ ...loginStates, [e.target.name]: e.target.value });
  };

  const url = "https://mern-leave-tracker.onrender.com";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/api/login`, {
        email: loginStates.email,
        password: loginStates.password,
      });
      if (response.data.success) {
        notifySuccess();
        localStorage.setItem("token", response.data.token);
        isUserAuthenticated(true);
        navigate("/");
        setAccount(response.data.user);
      } else {
        setError("Something went wrong...");
      }
    } catch (error) {
      notifyError();
      setError(error.response.data.msg);
    }
  };
  return (
    <div className="flex flex-col gap-4 mt-5 w-full">
      <input
        type="text"
        name="email"
        required
        onChange={handleValueChange}
        autoComplete="email"
        placeholder="Enter Your Email..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <input
        type="password"
        name="password"
        required
        onChange={handleValueChange}
        autoComplete="new-password"
        placeholder="Enter Your Password..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      {error && (
        <div className="text-pink-500 text-center text-sm">{error}</div>
      )}
      <button
        className="bg-sky-600 text-white p-2 rounded-lg hover:bg-sky-500"
        onClick={handleLogin}
      >
        Login
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

export default LoginForm;
