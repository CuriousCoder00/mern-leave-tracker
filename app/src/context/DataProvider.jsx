import { useEffect, useState } from "react";
import { DataContext } from "./DataContext";

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [leavesNum, setLeavesNum] = useState(0);

  const onLogin = (token, user) => {
    localStorage.setItem("token", token);
    localStorage.setItem("user", user);
    setToken(token);
    setUser(user);
    // set user role
    user.role === "admin" ? setIsAdmin(true) : setIsAdmin(false);
  };

  const onLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsUserAuthenticated(false);
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsUserAuthenticated(true);
  }, []);
  return (
    <DataContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        onLogin,
        onLogOut,
        isUserAuthenticated,
        isAdmin,
        setIsAdmin, leavesNum, setLeavesNum
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
