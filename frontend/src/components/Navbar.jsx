import React, { useState, useEffect, useContext } from "react";
import { gsap } from "gsap";
import { AuthContext } from "../context/AuthContext"; // Adjust the path as necessary

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu visibility
  const { token, setToken } = useContext(AuthContext);

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
    const productsElement = document.getElementById("products");
    if (productsElement) {
      productsElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Element with id "products" not found');
    }
  };

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutElement = document.getElementById("about");
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error('Element with id "about" not found');
    }
  };

  return (
    <nav className="flex items-center justify-between m-3 bg-transparent text-zinc-800 p-3 h-20 z-20">
      <p
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="withdrawals text-4xl font-bold font-mono cursor-pointer text-zinc-600 h-full flex items-center justify-center"
      >
        Withdrawals™
      </p>

      {/* Hamburger Icon for Mobile Menu */}
      <button
        className="md:hidden text-2xl p-2 focus:outline-none"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        ☰
      </button>

      {/* Links for Desktop */}
      <ul className="nav-links hidden md:flex gap-6 text-lg ml-16">
        <li>
          <a
            href="#products"
            onClick={scrollToProducts}
            className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
          >
            Products
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={scrollToAbout}
            className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="/login"
            className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="/register"
            className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
          >
            Register
          </a>
        </li>
        {token && (
          <li>
            <button
              onClick={() => setToken(null)}
              className="hover:text-white hover:bg-slate-600 rounded-3xl p-0.5 font-bold"
            >
              Logout
            </button>
          </li>
        )}
      </ul>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <ul className="nav-links flex flex-col gap-4 text-lg bg-slate-200 rounded-lg p-4 md:hidden absolute top-16 right-4">
          <li>
            <a
              href="#products"
              onClick={scrollToProducts}
              className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={scrollToAbout}
              className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/login"
              className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
            >
              Register
            </a>
          </li>
          {token && (
            <li>
              <button
                onClick={() => setToken(null)}
                className="hover:text-white hover:bg-slate-600 rounded-3xl p-2 font-bold"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
