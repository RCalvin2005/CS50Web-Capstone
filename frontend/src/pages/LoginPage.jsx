import React from "react";

function LoginPage() {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LoginPage;