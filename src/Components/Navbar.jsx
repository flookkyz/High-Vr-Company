import React from "react";
import LOGO from "../images/LOGO.svg"

function Navbar() {
  return (
    <>
      <div className="h-20 bg-transparent flex flex-row items-center justify-between px-40 text-white">
        <img src={LOGO} className="font-bold text-[26px] flex justify-start" />
          
        
        <div>
          <a href="#" className="mr-7 hover:text-cyan-400 ">
            Home
          </a>
          <a href="#" className="mr-7 hover:text-cyan-400">
            Service
          </a>
          <a href="#" className="mr-7 hover:text-cyan-400">
            Portfolio
          </a>
          <a href="#" className="hover:text-cyan-400">
            About
          </a>
        </div>
        <button className="w-[15%] h-10 border border-white rounded-full hover:text-white hover:font-bold hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50">
          Contact with us
        </button>
      </div>
    </>
  );
}

export default Navbar;
