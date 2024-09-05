import React from 'react'

function CreateChallenge() {
  return (
    <section>
      <div className=' bg-[#F8F9FD] p-4 mt-14 flex  justify-items-start'>
        <h1 className=' font-semi-bold text-xl'>Challenge Details</h1>
      </div>
      <form className=' flex justify-start items-center' >
      <input
                            id="price"
                            // {...register("price")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] block  p-2.5 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="KES 0.00"
                          />
      </form >
    </section>
  )
}

export default CreateChallenge