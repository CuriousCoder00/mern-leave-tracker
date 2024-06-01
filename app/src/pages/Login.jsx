import { useState } from "react";
import LoginForm from "../components/LoginForm";
import Logo from "../components/Logo";
import RegisterForm from "../components/RegisterForm";
const Login = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isUserAuthenticated } = props;
  const [loginToggle, setLoginToggle] = useState("login");

  return (
    <>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className="flex z-40 flex-col items-center justify-center h-screen">
        <div className="flex flex-col items-center justify-center bg-sky-800 p-8 rounded-lg shadow-lg w-96">
          <span className="font-bold text-sky-100">
            {loginToggle === "login" ? "Login to" : "Register on"}
          </span>
          <Logo />
          {loginToggle === "login" ? (
            <LoginForm isUserAuthenticated={isUserAuthenticated} />
          ) : (
            <RegisterForm setLoginToggle={setLoginToggle} />
          )}
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-sm text-sky-200">
              {loginToggle === "login"
                ? "Don't have an account?"
                : "Already have an account?"}
            </span>
            <span
              className="text-sm text-sky-100 hover:underline hover:text-sky-300 cursor-pointer"
              onClick={() => {
                loginToggle === "login"
                  ? setLoginToggle("register")
                  : setLoginToggle("login");
              }}
            >
              {loginToggle === "login" ? "Register" : "Login"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
