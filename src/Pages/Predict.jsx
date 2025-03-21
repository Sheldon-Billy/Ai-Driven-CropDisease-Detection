import React from 'react'
import { NavLink } from 'react-router-dom'
const Predict = () => {
  return (
    <div className='mx-[10px]'>
      <h1 className='bg-gradient-to-r from-black via-blue-700 to-black flex items-center justify-center text-white text-[20px] font-serif font-bold'>Right place to be |Scan Now</h1>

      <div className='bg-[#161982] mt-[5px] rounded-b-[10px] h-[38rem] text-white'> upload,describe and get reults


        <div className='flex mx-2'>
          <div className='border-1 my-1 w-[40rem] h-[20rem] mx-1 rounded-[5px]'>
            image here
          </div>
          <div className='border-1 my-1 w-[500px] h-[20rem] mx-1 rounded-[5px]'>
            description here
          </div>

          <div className='border-1 my-1 w-full h-[20rem] mx-1 rounded-[5px]'>
            results here
          </div>
        </div>

        <div className='border-1 m-1 w-auto h-[200px] mx-1 rounded-[5px] '>
          Recommendations here
        </div>

      </div>
    </div>
  )
}

export default Predict