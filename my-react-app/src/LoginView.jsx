import React from "react";

const LoginView = () => {
  const handleForgotPassword = () => {
    console.log("Password retrieval clicked");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <h3>Please sign in to continue</h3>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <button>Login</button>
      <p
        onClick={handleForgotPassword}
        style={{ cursor: "pointer", color: "blue" }}
      >
        Forgot password?
      </p>
      <p>
        No account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
};

export default LoginView;
