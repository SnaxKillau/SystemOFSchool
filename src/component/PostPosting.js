import React, {useState} from 'react'
import Menu from './Menu'


function PostPosting() {

   
  return (
    <div>
        <Menu></Menu>
        <div className='flex flex-col justify-center items-center'>
        <h1 className='flex justify-center mt-10 font-inter'>Publish Posting</h1>
 
        {/* Sign in form for user */}
        <form className='bg-[#D9D9D9] drop-shadow-lg  mt-2 p-10  w-3/4 sm:w-3/5 grid '>
            
            <label  className=' font-semibold ml-4'>Reference Picture:</label>
            <input type = "file" className='ml-4 file:bg-gradient-to-b file:from-red-400 file:to-red-500 file:border-none file:h-8 font-semibold file:text-white file:cursor-pointer  file:rounded-lg w-11/12'></input>
            
            <label className=' font-semibold ml-4'>Title:</label><br/>
        
            <input type="text" className='ml-4  w-11/12' placeholder='What your want writing ?'></input><br/>
            <label className=' font-semibold ml-4 '>Unique:</label><br/>
            <textarea  className='ml-4  w-11/12 h-32' ></textarea>


        <div className='flex justify-center'>
        <button id="button" type="submit" className=" shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg w-24 h-10 mt-5 ">Posting</button>
        </div>
        
        </form>
        </div>
        </div>
  )
}

export default PostPosting