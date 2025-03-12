import React from 'react'
import bmw from "../assets/images/bmw.jpg"
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";




export default function Navbar() {
  return (
    <>
      <nav className=' h-[70px] flex justify-center '>


        <div className=' flex justify-between w-[1000px] border-b-2 border-gray-600 items-center'>
          

            
            <div>
            <img className='h-[40px] w-[40px]' src={bmw} alt="" />

            </div>
          <div className='flex gap-5 relative'>

            <div className='  h-12 hover:border-b-4  border-b-2 hover:border-blue-400 absolute '>
              <h1>Model</h1>

            </div>
            <div>
              <h1>Model</h1>

            </div>
            <div>
              <h1>Model</h1>

            </div>
            <div>
              <h1>Model</h1>

            </div>
            <div>
              <h1>Model</h1>

            </div>
            <div>
              <h1>Model</h1>

            </div>


          </div>





          <ul className='flex gap-4 text-[20px]'>
            <li  ><a href="#"><CgProfile />
            </a></li>
            <li><a href="#"><MdOutlineShoppingCart />
            </a></li>
            <li><a href="#"><FaHeart />
            </a></li>
            <li><a href="#"><IoLocationSharp />
            </a></li>
          </ul>

        </div>


      </nav>
    </>
  )
}
