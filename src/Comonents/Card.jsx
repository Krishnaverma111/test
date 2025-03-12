import React from 'react'
import card from "../assets/images/bmws.jpg"


export default function Card() {
  return <div>
      <div
      className="h-screen bg-cover bg-center relative "
      style={{ backgroundImage: `url(${card}) ` }}


    >

        <div className='w-[600px] ml-10 absolute mt-5 flex flex-col gap-3'>

      <h1 className="text-white text-4xl p-10">BMW ELECTRIC CARS</h1>

      <h1 className='text-white text-4xl '> EMI STARTING AT ₹ 38,422/MONTH* </h1>

      <button className='bg-blue-800 py-4 w-[300px]'> Book A Test Drive</button>

        </div>

  


    </div>

    
  </div>
  
  
}
