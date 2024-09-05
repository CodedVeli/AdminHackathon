import React from "react";
import { useNavigate } from "react-router";
import Search from "./Search";
import Filter from "./Filter";
import G3 from "../assets/cardimage/G3.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function ChallengesSection() {

    const navigate = useNavigate();
  return (
    <section>
      <div className="bg-[#002A3B] w-full flex flex-col space-y-5 items-center justify-center h-[40vh] ">
        <h1 className="text-white text-3xl font-semi-bold mt-10">
          Explore Challenges
        </h1>
        <div className="flex flex-row space-x-4 w-full px-4 sm:px-0 sm:w-auto">
          <div className="flex-grow">
            <Search />
          </div>
          <div className="flex-shrink-0">
            <Filter />
          </div>
        </div>
      </div>
      <div className="grid gap-5 mt-12 md:grid-cols-3 items-center justify-center mx-auto ml-10">
        {/* Challenge Cards */}
        <div  className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button onClick={()=>navigate('/details')} className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-48 object-cover"
            src={G3}
            alt="Weather Recognition"
          />

          <div className="p-4 flex flex-col items-center justify-center">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-2 py-1 rounded-full font-semibold uppercase mb-2">
              Active
            </span>

            <h2 className="text-gray-900 text-center font-bold text-xl mb-2">
              Data Sprint 71 - Weather Recognition
            </h2>
            <p className="text-gray-700 py-2">Ends in</p>

            <p className="text-gray-700 space-x-4 text-base">
              <span className="font-bold pr-2">01</span> :
              <span className="font-bold pr-2">17</span> :
              <span className="font-bold">10</span>
            </p>
            <p className=" space-x-2">
              <span className=" text-sm">Days</span>
              <span className="text-sm">Hours</span>
              <span className="text-sm">Minutes</span>
            </p>

            <div className="mt-4">
              <button className="bg-green-600 flex  flex-row space-x-2 text-white font-bold py-2 px-4 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                <IoMdCheckmarkCircleOutline className="inline-block pt-1 size-6" />
                <p>Participate Now</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChallengesSection;
