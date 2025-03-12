import React from 'react'
import card from "../assets/images/bmw2.jpg"





export default function Content() {
    return (
        <>

            <div className='px-5'>
                <div className='flex flex-col gap-4'>



                    <h1 className='text-6xl'>THE BMW ELECTRIC CARS</h1>
                    <h1>100 % electric. 100 % driving pleasure. 100 % BMW.</h1>

                    <p className='font-serif'>
                        Experience an entirely new sensation of sheer driving pleasure. After all, nothing compares with the feeling of gliding almost silently through urban or rural traffic, the instant response of the electric engine and unique acceleration from stand-still. And all of this is free of exhaust fumes and local emissions. Join us to explore the world of BMW electric cars.
                    </p>
                </div>
            </div>


            <div>
                <h1 className='text-4xl'>    EXPERIENCE THE JOY OF ELECTRIC DRIVING </h1>





            </div>

               <div
                  className="h-screen bg-cover bg-center relative "
                  style={{ backgroundImage: `url(${card}) ` }}
            
            
                ></div>
        </>

    )
}
