import React from "react";
import { IoMdTime } from "react-icons/io";
import { useNavigate } from "react-router";

function ChallengeDetails() {

  const navigate = useNavigate();
  return (
    <section>
      <div className="flex justify-center items-center mx-auto bg-[#003145] min-h-[90vh]">
        <div className="grid gap-3 mt-12 md:grid-cols-2">
          <div className=" flex flex-row items-center justify-center bg-[#FFCE5C] h-5  w-auto text-black rounded-md p-5 space-x-2 ">
            {" "}
            <IoMdTime className=" size-5" />
            <p> Starts on 17th Jun&apos;22 09:00 PM (India Standard Time)</p>
          </div>
          <div className="col-span-2 space-y-8 ">
            <h1 className="text-white text-5xl font-semi-bold break-keep ">
              Data Sprint 72 - Butterfly Identification
            </h1>
            <p className="text-white break-keep w-[500px] text-xl">
              Identify the class to which each butterfly belongs to
            </p>
            <button className="flex flex-row items-center justify-center gap-2 bg-[#FFFFFF] text-[#003145] text-lg font-semi-bold p-2 rounded-md ">
              <span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.875 16.875H12.375V2.25H16.875V16.875ZM13.5 15.75H15.75V3.375H13.5V15.75ZM11.25 16.875H6.75V6.75H11.25V16.875ZM7.875 15.75H10.125V7.875H7.875V15.75ZM5.625 16.875H1.125V10.125H5.625V16.875Z"
                    fill="#003145"
                  />
                </svg>
              </span>
              Easy
            </button>
          </div>
        </div>
      </div>
      <div className="  w-full flex justify-around items-center h-16 shadow-xl bg-white p-4 ">
        <div className=" ">
          <h1 className=" font-semi-bold text-xl">Overview</h1>
          <span className=" absolute bottom-2 h-1 bg-[#44924C] w-24" />
        </div>
        <div className=" space-x-5">
          <button onClick={()=>navigate('/edit')} className="bg-[#44924C] text-white text-lg font-semibold  pr-7 pl-7 pt-2 pb-2 rounded-xl">
            Edit
          </button>
          <button className=" border border-red-500 bg-white text-red-500 text-lg font-semibold  pr-7 pl-7 pt-2 pb-2 rounded-xl ">
            Delete
          </button>
        </div>
      </div>
      <div className=" flex justify-evenly items-center pt-10 bg-gray-100  pb-10 ">
        <div className=" flex flex-col items-center justify-center gap-5 text-[#64607D]  ">
         <p className=" max-w-[130vh]  "> Butterflies are the adult flying stage of certain insects belonging to
          an order or group called Lepidoptera. The word &quot;Lepidoptera" means
          "scaly wings" in Greek. This name perfectly suits the insects in this
          group because their wings are covered with thousands of tiny scales
          overlapping in rows.</p><p className=" w-[130vh]"> An agency of the Governmental Wildlife
          Conservation is planning to implement an automated system based on
          computer vision so that it can identify butterflies based on captured
          images. As a consultant for this project, you are responsible for
          developing an efficient model.</p> <p className=" w-[130vh]">Your Task is to build an Image
          Classification Model using CNN that classifies to which class of
          weather each image belongs to.</p>
        </div>
      </div>
    </section>
  );
}

export default ChallengeDetails;
