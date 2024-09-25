import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);

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
    e.preventDefault(); // Prevent default anchor behavior
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="flex items-center sticky top-0 justify-between m-3 bg-slate-200 rounded-xl p-4 h-20 z-10">
      <p
        onClick={scrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="withdrawals text-4xl font-bold font-mono cursor-pointer text-zinc-600 h-full flex items-center justify-center"
      >
        Withdrawals
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
          <a href="/" className="hover:text-zinc-800 font-bold">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
