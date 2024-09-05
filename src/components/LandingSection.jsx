import React from "react";
import Rocket from "../assets/icons/Rocket.svg";
import {  useNavigate } from "react-router-dom";

function LandingSection() {

  const navigate = useNavigate(); 
  return (
    <section className=" flex items-center justify-center flex-wrap mx-auto bg-[#003145] min-h-[90vh]">
      <div className=" grid grid-rows-2 grid-flow-col gap-4 mt-20">
        <div className=" bg-[#FFCE5C] h-[115.91px] w-5 row-span-3" />
        <div className="row-span-2 col-span-2 space-y-8 ">
        <h1 className="  text-white text-5xl font-semi-bold  break-keep w-[600px]">
          Accelerate Innovation with Global AI Challenges
        </h1>
        <div className="  text-white break-keep w-[500px] text-xl">
          AI Challenges at DPhi simulate real-world problems. It is a great
          place to put your AI/Data Science skills to test on diverse datasets
          allowing you to foster learning through competitions.
        </div>
        <button onClick={()=>navigate("/create")} className="bg-[#FFFFFF]  text-[#003145] text-lg font-semi-bold p-2 rounded-md">Create Challenge</button>

        </div>
             </div>
             <div>
        <img src={Rocket} alt="rocket" className="w-[500px] h-[500px] " />
             </div>
    </section>
  );
}

export default LandingSection;
