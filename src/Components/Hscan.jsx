import React from "react";
import { NavLink } from "react-router-dom";

const Hscan = () => {
  return (
    <div className="bg-[#121212] mx-[10px] h-[300px] text-white flex items-center justify-center flex-col rounded-b-[10px] hscan">
      <h1 className="font-bold font-[Times] text-[30px]">
        Ready to protect your crops?
      </h1>

      <NavLink to="/predict">
        <button className="bg-blue-700 p-3 rounded-2xl w-32 hover:bg-green-700 transition-[1s] hover:transform-[rotate(2deg)_scale(1.1)] shadow-[0px_0px_20px_yellow]">
          Scan Now
        </button>
      </NavLink>

      <p className="text-center mx-[100px] text-[16px] font-serif font-bold">
        Join thousands of farmers revolutionizing agriculture with our AI-driven
        crop disease detection and prevention system. Detect plant diseases
        early, receive real-time insights, and take proactive measures to
        protect your crops. Our intelligent system ensures healthier yields,
        reduces pesticide use, and promotes sustainable farming. Get started
        today and secure your farm’s future with cutting-edge AI technology!
        🚀🌱
      </p>
    </div>
  );
};

export default Hscan;
