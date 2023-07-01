import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Layout() {
  const { name } = useContext(AuthContext);

  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>
      <p>Hello {name}</p>
      <Outlet />
    </div>
  );
}

export default Layout;
