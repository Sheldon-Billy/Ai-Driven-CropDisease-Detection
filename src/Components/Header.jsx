import React from "react";
import { NavLink } from "react-router-dom";
import { ai } from "../assets";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-black via-blue-700 to-black mt-[5px] text-white flex justify-between h-15 rounded-t-[10px] items-center mx-[10px]">
      <div className="flex items-center">
        <img className="h-[80px] w-[100px] " src={ai} />
        <h1 className="text-4xl ml-0">|</h1>
        <h1 className=" font-[Times_New_Roman] text-[30px]   bg-gradient-to-r from-[#00ff00] via-white to-[#01ee01] text-transparent w-max bg-clip-text font-bold AiAgri">
          Agri-Ai
        </h1>
      </div>

      <div className="flex gap-[10px] mx-[15px]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/predict">Prectict
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
