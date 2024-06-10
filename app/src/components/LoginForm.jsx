import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import DataProvider from "../context/DataProvider";
import { DataContext } from "../context/DataContext";
import Loader from "./loader/Loader";
const LoginInitial = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [loginStates, setLoginStates] = useState(LoginInitial);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { onLogin } = useContext(DataContext);

  const navigate = useNavigate();
  const handleValueChange = (e) => {
    setLoginStates({ ...loginStates, [e.target.name]: e.target.value });
  };

  const notifyError = () => toast.error(`${err}`);
  const url = import.meta.env.VITE_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(`${url}/api/login`, {
        email: loginStates.email,
        password: loginStates.password,
      });
      if (response.data.success) {
        onLogin(response.data.token, response.data.user);
        setLoading(false);
        navigate("/");
      } else {
        setLoading(false);
        setErr("Something went wrong...");
      }
    } catch (error) {
      setErr(error.response.data.msg);
      notifyError();
      setLoading(false);
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
        autoComplete="current-password"
        placeholder="Enter Your Password..."
        className="p-2 border-b-2 border-sky-300 focus:outline-none focus:border-sky-500 rounded-md text-slate-600"
      />
      <button
        className="bg-sky-600 text-white text-center flex justify-center h-10 items-center p-2 rounded-lg hover:bg-sky-500"
        onClick={handleLogin}
      >
        {loading ? <Loader /> : "Login"}
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
