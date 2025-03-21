import React from "react";
import { Cards } from "../Components/Cards";
import {
  ai, digit, background1, cardcomp1, cardcomp2, insight, knowmore, leaf, mobile,
} from "../assets";
import { Informatics } from "../Components/Informatics";
import Hscan from "../Components/Hscan";
import { useState, useEffect } from "react";

const Home = () => {


  const TypingEffect = ({ text, speed = 100, delay = 2000, backspaceSpeed = 50 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
      if (!isDeleting && index < text.length) {
        // Typing effect
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + text[index]);
          setIndex(index + 1);
        }, speed);
        return () => clearTimeout(timeout);
      } else if (!isDeleting && index === text.length) {
        // Pause before backspacing
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && index > 0) {
        // Backspacing effect
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev.slice(0, -1));
          setIndex(index - 1);
        }, backspaceSpeed);
        return () => clearTimeout(timeout);
      } else if (isDeleting && index === 0) {
        // Reset after backspacing completes
        setIsDeleting(false);
      }
    }, [index, isDeleting, text, speed, delay, backspaceSpeed]);

    return (
      <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-[#00b300] text-transparent bg-clip-text">
        {displayedText}
        <span className="animate-blink">|</span>
      </h1>
    );
  };

  const information = [
    {
      img: leaf,
      info: "Eco-Friendly Solutions",
      label: "Reduce pesticide use with Ai-Driven disease prediction",
    },
    {
      img: ai,
      info: "Ai-Powered Detection",
      label: "Identify crop disease instantly using machine learning",
    },
    {
      img: insight,
      info: "Smart Insights",
      label: "Get actionble data to improve your farming decisions",
    },
    {
      img: mobile,
      info: "Mobile-Friendly access",
      label: "Access disease detection tools anytime and anywhere you are",
    },
  ];

  const cards = [
    {
      i: background1,
      l: "Smart Farmer Support & Advisory",
      d:
        "🔹Empowering the potentials of the fammers and encourage them to improve their workforce adaptabilty🔹 Community & Knowledge Sharing.",
    },
    {
      i: cardcomp1,
      l: "Prevention & Treatment Suggestions",
      d:
        "🔹 AI-powered Treatment Recommendations – Suggests organic, chemical, or biological treatments.",
    },
    {
      i: cardcomp2,
      l: "Real-time Monitoring & Alerts",
      d:
        "🔹 Continuous Crop Health Monitoring – Uses drone/satellite imagery or IoT sensors to track plant health.",
    },
    {
      i: digit,
      l: "Data Collection & Research Support",
      d:
        "🔹 Disease Trend Analysis – Tracks disease patterns across different regions.🔹 Government & Research Collaboration – Shares insights with agricultural research institutions.",
    },
  ];
  return (
    <>
      <div className="rounded-b-[10px] p-2 mx-[10px] flex flex-col items-center justify-center sheldon">
        <h1 className="font-[Times] font-bold text-[40px] bg-gradient-to-r from-[#00b300] via-[white] to-[#00b300] text-transparent bg-clip-text  ">
          Ai-Driven Crop Disease Detection & Prevention
        </h1>
        <p className="text-white font-[Times] text-[17px] font-extrabold">
          <TypingEffect text="Empowering Famers with real insights for higher helthier crops &
          sustainable farming" />
        </p>

        <div className="flex gap-[10px] mt-2">
          <button className="bg-green-700 rounded-[5px] p-1.5 text-white hover:bg-orange-500 transition-[ease_2s] hover:transform-[scale(1.1)]">
            Get Started
          </button>
          <button className="bg-[#540606] rounded-[5px] p-1.5 text-white hover:bg-orange-500 transition-[ease_2s] hover:transform-[scale(1.1)]">
            Learn More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 text-white my-[10px] mx-[40px]">
        {information.map(({ img, label, info }, i) => {
          return <Informatics key={i} img={img} label={label} info={info} />;
        })}
      </div>

      <div>
        <Hscan />
      </div>

      <div className="flex gap-4 items-center justify-center mt-4 text-white">
        <h2 className="bg-black p-2 rounded-2xl  hover:bg-blue-500 transition-all">Get to know more</h2>
        <img className="h-10 w-10 hover:transform-[scale(1.3)] transition-all" src={knowmore} />
      </div>

      <div className="grid grid-cols-4 gap-2  text-white my-[10px] mx-[10px]">
        {cards.map(({ i, l, d }) => {
          return (
            <Cards key={i} image={i} labelee={l} description={d} />
          );
        })}
      </div>
    </>
  );
};

export default Home;
