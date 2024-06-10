import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import History from "./pages/History";
import PageNotFound from "./pages/PageNotFound";
import Vacations from "./pages/Vacations";
import AccountSettings from "./pages/AccountSettings";
import { DataContext } from "./context/DataContext";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Admins from "./pages/admin/Admins";
import Users from "./pages/admin/Users";
import UserData from "./pages/admin/UserData";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  const { isUserAuthenticated, isAdmin } = useContext(DataContext);
  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ isUserAuthenticated }) => {
    return isUserAuthenticated ? (
      <>
        <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav} />
        <div className="flex">
          <div
            className={`${
              toggleNav
                ? "absolute z-10 md:static transition-all delay-100 bg-sky-900 md:flex"
                : "hidden md:flex"
            }`}
          >
            <Sidebar toggleNav={toggleNav} setToggleNav={setToggleNav} />
          </div>
          <div className="border rounded-lg w-full bg-slate-200 mb-4">
            <Outlet />
          </div>
        </div>
      </>
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element=<Login /> />
          <Route
            path="/"
            element={<PrivateRoute isUserAuthenticated={isUserAuthenticated} />}
          >
            <Route
              exact
              path="/"
              element={isAdmin ? <AdminDashboard /> : <UserDashboard />}
            />
            <Route exact path="/apply-for-leave" element=<Home /> />
            <Route exact path="/history" element=<History /> />
            <Route exact path="/vacations" element=<Vacations /> />
            <Route exact path="/account" element=<AccountSettings /> />
          </Route>
          
          <Route path="/*"
            element={
              <div className="w-screen h-screen absolute top-0 left-0">
                <PageNotFound />
              </div>
            }
          />
          <Route
            path="/"
            element={<PrivateRoute isUserAuthenticated={isUserAuthenticated} />}
          >{isAdmin && (
            <>
              <Route exact path="/admins" element=<Admins /> />
              <Route exact path="/users" element=<Users /> />
              <Route exact path="/users/user/:id" element=<UserData /> />
            </>
          )}</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
