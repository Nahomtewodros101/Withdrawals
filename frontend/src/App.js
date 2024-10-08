import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/LoginForm"; // Import your Login component
import Register from "./components/RegisterForm"; // Import your Register component
import Products from "./components/Products"; // Import your Products component
import About from "./components/About"; // Import your About component
import Navbar from "./components/Navbar"; // Import your Navbar component
import Hero from "./components/Hero"; // Import your Hero component
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check for the presence of a token (e.g., in localStorage or a global state)
    const token = localStorage.getItem("authToken"); // Change according to where you store the token
    if (token) {
      setToken(token);
      setIsAuthenticated(true); // Set authenticated state if token exists
    }
  }, []);

  // Protected route component to handle redirects if the user is not authenticated
  const ProtectedRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <Router>
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50"> 
          <Navbar /> {/* Render the Navbar regardless of authentication state */}
        </div>

        {/* Hero section right below the sticky navbar */}
        <Hero />

        {/* Main Routes */}
        <Routes>
          {/* Public routes */}
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route
            path="/home"
            element={<ProtectedRoute element={<div><Products /><About /></div>} />}
          />

          {/* Default route (redirect to login) */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
