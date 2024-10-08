import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const About = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const flicker = () => {
      gsap.to(".withdrawals-text", {
        opacity: 0,
        duration: 2,
        repeat: -2,
        yoyo: true,
        ease: "power1.inOut",
      });
    };
    flicker();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Comment:", comment);
    setEmail("");
    setComment("");
  };

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div>
      <section
        id="about"
        className="bg-zinc-300 opacity-60 h-[100vh] flex flex-col justify-start items-center p-8"
      >
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <div className="text-slate-900 font-extrabold shadow-2xl shadow-slate-950 flex flex-col items-center justify-start p-[5rem] rounded-2xl mt-[10rem] bg-gray-500 h-[30rem] w-[80rem]">
          <h1 className="text-2xl font-bold mb-4 bg-slate-200 p-2 rounded-lg">
            About Us
          </h1>
          <p className="bg-slate-50 p-4 rounded-lg">
            Withdrawals is your ultimate shopping destination, where customer
            satisfaction is our top priority. We believe in providing an
            exceptional shopping experience by offering a curated selection of
            high-quality products at competitive prices. Our user-friendly
            website and seamless checkout process make shopping effortless and
            enjoyable. At Withdrawals, we value your feedback and are dedicated
            to continuously improving our services based on your needs. Our
            commitment to customer support ensures that any inquiries or
            concerns are addressed promptly, allowing you to shop with
            confidence. Join us today and discover the difference at
            Withdrawals, where your satisfaction is our mission!
          </p>
          <h1 className="withdrawals-text text-4xl font-bold bg-gray-500 rounded-lg text-center mt-10 text-zinc-700">
            Withdrawals™
          </h1>
        </div>
      </section>

      <aside className="flex justify-center items-center bg-gray-300 opacity-80 p-6 h-[20rem] mt-10">
        <ul className="flex space-x-10">
          <li>
            <a
              href="https://facebook.com/nahom101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:underline"
            >
              <FaFacebook
                className="hover:text-white transition-colors duration-500"
                size={40}
              />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/NahomTewodros5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:animate-spin"
            >
              <FaTwitter
                className="hover:text-white transition-colors duration-500"
                size={40}
              />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/nahom1o1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:underline"
            >
              <FaInstagram
                className="hover:text-white transition-colors duration-500"
                size={40}
              />
            </a>
          </li>
        </ul>
        <button
          onClick={toggleForm}
          className="rounded-3xl bg-zinc-800 text-white m-5 font-semibold p-2 hover:bg-transparent hover:text-zinc-800 transition-colors duration-500"
        >
          {showForm ? "Cancel Comment" : "Share A Comment?"}
        </button>
        {showForm && (
          <form
            onSubmit={handleSubmit}
            className="m-10 flex text-black flex-col items-center"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="p-2 mb-4 border border-gray-400 rounded"
            />
            <textarea
              placeholder="Your comments"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              className="p-2 mb-4 border bg-gray-400 border-gray-400 rounded h-24"
            />
            <button
              type="submit"
              className="bg-zinc-600 hover:text-zinc-800 transition-colors duration-500 hover:bg-white text-white p-2 rounded"
            >
              Submit
            </button>
          </form>
        )}
      </aside>
    </div>
  );
};

export default About;
