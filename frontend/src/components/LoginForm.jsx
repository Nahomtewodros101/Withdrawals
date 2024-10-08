// Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication (replace with your actual login logic)
    if (email && password) {
      // After successful login, save the token
      const token = "your-authentication-token"; // Replace this with actual token from your API
      localStorage.setItem("authToken", token);
      setIsAuthenticated(true); // Update authentication state
      navigate("/home"); // Redirect to home
    }
  };

  return (
    <div className="flex items-center justify-center h-100% m-20">
     
      <form onSubmit={handleLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
           className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <button
        className="rounded-2xl bg-slate-600 font-bold p-2 text-zinc-300 hover:bg-slate-400 w-full"
         type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
