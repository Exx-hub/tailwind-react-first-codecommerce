import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-7xl m-auto p-4">
      <h1 className="w-full text-[#00df9a] text-2xl font-bold">REACT.TW</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        {/* <button className="bg-white rounded text-black text-xs p-2 min-w-max">
          Get Started
        </button> */}
      </ul>

      <div
        className="cursor-pointer block md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          menuOpen
            ? "fixed top-[97px] -translate-x-4 w-[66.7%] border-r border-r-gray-900 h-full bg-[#000300] md:hidden ease-in-out duration-500"
            : "fixed opacity-0"
        }
      >
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
