import React from 'react'
import { Link } from 'react-router-dom'

function Singin() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='flex justify-center mt-10 font-inter'>Sign in as USER</h1>
     
        {/* Sign in form for user */}
        <form className='bg-[#D9D9D9] drop-shadow-lg h-100 mt-2 p-10 w-3/4 sm:w-3/5 grid '>
            <label className=' font-semibold ml-4'>Username:</label><br/>
            <input type="text" className='ml-4  w-11/12'></input><br/>
            <label className=' font-semibold ml-4 '>Password:</label><br/>
            <input type="password" className='ml-4  w-11/12'></input><br/>
            <div className=' flex justify-center'>
            <button id="button" type="submit" className=" w-24 h-10 rounded-lg hover:bg-red-500 hover:text-white font-bold">
              <Link to = '/'>Sign In</Link>
            </button>
            </div>
        </form>

        <h1 className='mt-5 opacity-70 font-inter'>You can create new account <Link to = '/SignUp'  className=' text-red-500 underline'>Sign Up</Link></h1>
        <h1 className=' mt-1 opacity-70 font-inter'>If you want to sign in as admin <Link to = '/Admin/SignIn'  className=' text-red-500 underline'>Here</Link></h1>
       
        
        
    </div>
  )
}

export default Singin