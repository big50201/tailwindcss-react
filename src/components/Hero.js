import React from "react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-7xl md:text-5xl sm:text-3xl text-3xl font-black mb-14">
        TailwindCss Demo
      </h1>
      <Link
        to="/About"
        className="py-6 px-10 bg-blue-300 text-white rounded-full text-3xl hover:bg-green-300 transition duration-300 ease-in-out flex items-center animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
          />
        </svg>
        <span>About project</span>
      </Link>
    </div>
  );
};

export default Hero;
