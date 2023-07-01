import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout";
import PrivateRoutes from "./utils/PrivateRoutes";
import { AuthProvider } from "./context/AuthContext";

// Define Routes for website
const router = createBrowserRouter([
  {
    // https://stackoverflow.com/questions/73797206/react-6-4-0-common-header-for-all-the-router
    // Shared Layout/Header across all pages
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      {
        // All children routes are now private
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
        ],
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
