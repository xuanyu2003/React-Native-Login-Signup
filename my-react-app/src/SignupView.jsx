import React from "react";

const SignupView = () => {
  return (
    <div className="container">
      <button
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        ← Back
      </button>
      <h2>Sign Up</h2>
      <div>
        <label>Full Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type="password" />
      </div>
      <button>Sign Up</button>
      <p>
        Already have an account? <a href="/">Sign in</a>
      </p>
    </div>
  );
};

export default SignupView;
