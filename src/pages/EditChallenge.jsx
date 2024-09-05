import React from "react";

function EditChallenge() {
  return (
    <section>
      <div className=" bg-[#F8F9FD] p-4 mt-14 flex  justify-items-start">
        <h1 className=" font-semi-bold text-xl">Challenge Details</h1>
      </div>
      <form className=" relative p-6 flex-auto gap-5  ">
        <div className="min-w-sm mx-auto my-4 leading-relaxed">
          <div className="mb-5">
            <label
              htmlFor="challenge"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Challenge Name
            </label>
            <input
              id="challenge"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] block min-w-sm p-2.5 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="challenge"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Start Date
            </label>
            <input
              id="start-date"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] block min-w-sm p-2.5 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder=""
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="challenge"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              End Date
            </label>
            <input
              id="end-date"
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] block min-w-sm p-2.5 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder=""
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Description
            </label>
            <textarea
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#009975] focus:border-[#009975] max-w-sm focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className=" w-1/4   mt-10">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full  border-2 border-gray-500  rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
            >
              <div className="flex flex-row items-center justify-center space-x-2 pt-1 pb-1">
                <p className=" text-sm text-gray-500">
                  <span className="font-semibold text-gray-500 text-xl">
                    Upload
                  </span>{" "}
                </p>
                <svg
                  className="w-8 h-8 mb-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                multiple
              />
            </label>
          </div>
          <div className="mb-5 max-w-sm ">
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Level Type
            </label>
            <select
              id="size"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] focus:outline-none focus:ring focus:ring-opacity-40 block w-full p-2.5"
            >
              <option value="" selected>
                Select Level
              </option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button className="bg-[#009975]  text-[#FFFFFF] text-lg font-semi-bold p-2 rounded-md">
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}

export default EditChallenge;
