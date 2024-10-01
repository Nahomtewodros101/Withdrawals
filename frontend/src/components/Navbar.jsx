import React, { useState, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { AuthContext } from "../AuthContext"; // Adjust the path as necessary

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { token, setToken } = useContext(AuthContext); // Access token and setToken from AuthContext

  useEffect(() => {
    const animation = isHovered
      ? gsap.to(".withdrawals", {
          x: 100,
          duration: 2,
          ease: "power2.out",
        })
      : gsap.to(".withdrawals", { x: 0, duration: 3, ease: "power2.out" });

    return () => animation.kill();
  }, [isHovered]);

  const scrollToProducts = (e) => {
    e.preventDefault();
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  const handleLogout = () => {
    setToken(null); // Clear the token on logout
    localStorage.removeItem('token'); // Optionally remove the token from localStorage
  };

  return (
    <nav className="flex items-center sticky top-0 justify-between m-3 bg-transparent rounded-xl p-4 h-20 z-20">
      <p
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="withdrawals text-4xl font-bold font-mono cursor-pointer text-zinc-600 h-full flex items-center justify-center"
      >
        Withdrawals™
      </p>
      <ul className="nav-links flex gap-6 text-lg text-zinc-600 ml-16">
        <li>
          <a
            href="#products"
            onClick={scrollToProducts}
            className="hover:text-zinc-800 font-bold"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={scrollToAbout}
            className="hover:text-zinc-800 font-bold"
          >
            About
          </a>
        </li>
        {token ? ( // Conditionally render Logout button if logged in
          <li>
            <button onClick={handleLogout} className="hover:text-zinc-800 font-bold">
              Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <a href="/login" className="hover:text-zinc-800 font-bold">
                Login
              </a>
            </li>
            <li>
              <a href="/register" className="hover:text-zinc-800 font-bold">
                Register
              </a>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
