import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h2 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          Grow with data.
        </h2>
        <div className="flex items-center justify-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible finanincing for
          </p>
          <Typed
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
          />
        </div>
        <p className="md:text-2xl text-l font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms.
        </p>
        <button className="max-w-xs sm:max-w-sm bg-[#00df9a] py-2 px-6 rounded text-black mx-auto mt-5">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;

// className="max-height text-white flex flex-col justify-center items-center text-center gap-2"

// <h2 className="text-[#00df9a]">GROWING WITH DATA ANALYTICS</h2>
//       <h3>GROW WITH DATA</h3>
//       <h4>Fast, flexible finanincing</h4>
//       <p>
//         Monitor your data analytics to increase revenue for BTB, BTC and SASS
//         platforms.
//       </p>
//       <button className="bg-[#00df9a] py-2 px-6 rounded text-black">
//         Get Started
//       </button>
