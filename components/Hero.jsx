"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Hero = ({ children }) => {
  const pathname = usePathname();

  let welcomeText;
  if (pathname.includes("/contact")) {
    welcomeText = "";
  } else {
    welcomeText = (
      <>
        <h1>
          Welcome to <br /> my 3D <br /> portofolio
        </h1>
      </>
    );
  }
  return (
    <div>
      <div className="w-full flex flex-col items-center gap-12 text-3xl  pt-6 bg-secondary hero-bg h-screen text-white">
        <h1>A</h1>
        <div className="max-w-screen-xl px-4 ">{children}</div>
        <div className="self-start sm:pl-20 text-4xl sm:text-6xl md:pl-36 uppercase font-bold welcome-text">
          {welcomeText}
        </div>
      </div>
    </div>
  );
};

export default Hero;
