import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Load token from localStorage or set to null if not available
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // useEffect to save token to localStorage whenever it changes
  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token); // Save token to localStorage
    } else {
      localStorage.removeItem("token"); // Remove token if it's null
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
