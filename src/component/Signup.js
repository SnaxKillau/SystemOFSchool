import React from 'react'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='flex justify-center mt-10 font-inter'>Sign in as USER</h1>
     
        {/* Sign in form for user */}
        <form className='bg-[#D9D9D9] drop-shadow-lg  mt-2 p-10  w-3/4 sm:w-3/5 grid '>
          
            <label  className=' font-semibold ml-4'>Profile Pic:</label>
            <input type = "file" className='ml-4 file:bg-gradient-to-b file:from-red-400 file:to-red-500 file:border-none file:h-8 font-semibold file:text-white file:cursor-pointer  file:rounded-lg w-11/12'></input>
            
            <label className=' font-semibold ml-4'>Username:</label><br/>
            <input type="text" className='ml-4  w-11/12'></input><br/>
            <label className=' font-semibold ml-4 '>Password:</label><br/>
            <input type="password" className='ml-4  w-11/12'></input><br/>
            <label className=' font-semibold ml-4 '> Email verify:</label><br></br>
            <input type="text" className='ml-4  w-11/12'></input>
           <div className='flex justify-center'>
           <button id="button" type="submit" className=" shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg w-24 h-10 mt-5 ">Sign Up</button>
           </div>
          
        </form>
        </div>
  )
}

export default Signup