import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Layout() {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? (
        <span onClick={logoutUser}>Logout</span>
      ) : (
        <Link to="/login">Login</Link>
      )}

      {user && <p>Hello {user.username}</p>}

      <Outlet />
    </div>
  );
}

export default Layout;
