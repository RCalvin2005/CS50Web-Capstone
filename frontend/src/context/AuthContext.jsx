import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export function AuthProvider({ children }) {
  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);

  async function loginUser(e) {
    e.preventDefault();

    // Request token from Django API
    let response = await fetch("/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: e.target.username.value,
        password: e.target.password.value,
      }),
    });
    let data = await response.json();

    // Save data if request successful
    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
    } else {
      alert("Something went wrong!");
    }
  }

  const contextData = {
    user: user,
    authTokens: authTokens,
    loginUser: loginUser,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
}
