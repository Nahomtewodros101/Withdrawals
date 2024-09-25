import React from "react";

const Hero = () => {
  return (
    <section className="h-[200vh] flex flex-col justify-start items-center p-8">
      <h1 className="text-[5rem] backdrop-blur text-zinc-600 font-extrabold">
        Welcome To Withdrawals
      </h1>
      <p className="font-extrabold text-zinc-700 backdrop-blur text-[1.2rem]">
        {" "}
        "Our Shop offers the ultimate pleasurable experience of shopping and
        makes the process even more great!" — Nahom Tewodros, Jr.Software
        Engineer
      </p>
    </section>
  );
};

export default Hero;
