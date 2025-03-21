import React from "react";

export const Cards = (props) => {
  return (
    <>
      <div className="bg-[#17024e] p-2 rounded-xl">
        <div className="text-[#00ff00] mt-2 text-center ">
          <img className="h-60 w-200 rounded-[10px] hover:transform-[scale(1.1)] transform-stroke transition-[1s]" src={props.image} />
          <h1 className="font-extrabold font-serif italic underline text-[17px] text-[#95b6f0]">{props.labelee}</h1>
          <h2>{props.description}</h2>
        </div>
      </div>
    </>
  );
};
