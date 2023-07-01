import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  // Checks for user authentication when children routes are visited
  let auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
