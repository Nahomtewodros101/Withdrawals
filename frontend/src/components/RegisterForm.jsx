import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correctly import useNavigate
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/users", {
        name,
        email,
        password,
      });
      navigate("/home"); // Navigate after successful registration
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="flex items-center justify-center h-100% m-20">
      <form
        className="bg-white rounded-lg shadow-lg p-6 w-96"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-zinc-600 text-2xl font-bold mb-4">
          New To Withdrawals?
        </h2>
        <h2 className="text-center text-xl font-semibold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="rounded-2xl bg-slate-600 font-bold p-2 text-zinc-300 hover:bg-slate-400 w-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
