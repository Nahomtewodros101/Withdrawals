import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import About from "./components/About";
import Login from "./components/Login"; 
import Register from "./components/Register";
import { AuthProvider, AuthContext } from './AuthContext';
import { useContext } from 'react';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-custom-gray bg-custom-pattern">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route 
              path="/shop" 
              element={<ProtectedRoute><Products /></ProtectedRoute>} 
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
};

export default App;
