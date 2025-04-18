// SignInForm.js
import React, { useState } from "react";

const SignInForm = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password });
    handleLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg">
      <input
        type="email"
        placeholder="Email"
        className="w-full text-black p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full text-black p-2 mb-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-brand-subtle text-black rounded-lg hover:bg-brand-subtle-dark transition"
      >
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
