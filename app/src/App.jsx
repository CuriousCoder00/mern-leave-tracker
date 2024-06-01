import { useState } from "react";
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
import DataProvider from "./context/DataProvider";

function App() {
  const [isAuthenticated, isUserAuthenticated] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  // eslint-disable-next-line react/prop-types
  const PrivateRoute = ({ isAuthenticated }) => {
    return isAuthenticated ? (
      <>
        <Navbar
          toggleNav={toggleNav}
          setToggleNav={setToggleNav}
          isUserAuthenticated={isUserAuthenticated}
        />
        <div className="flex">
          <div
            className={`${
              toggleNav
                ? "absolute md:static transition-all delay-100 bg-sky-900 md:flex"
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
    <DataProvider>
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element=<Login isUserAuthenticated={isUserAuthenticated} />
        />
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route exact path="/" element=<Home /> />
        </Route>
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route exact path="/history" element=<History /> />
        </Route>
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route exact path="/vacations" element=<Vacations /> />
        </Route>
        <Route
          path="/"
          element={<PrivateRoute isAuthenticated={isAuthenticated} />}
        >
          <Route exact path="/account" element=<AccountSettings /> />
        </Route>
        <Route
          path="/*"
          element={
            <div className="w-screen h-screen absolute top-0 left-0">
              <PageNotFound />
            </div>
          }
        />
      </Routes>
    </Router>
    </DataProvider>
  );
}

export default App;
