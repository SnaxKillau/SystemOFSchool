import React from 'react'
import Menu from './Menu'

function UserProfile() {
  return (
    <div>
        <Menu></Menu>
        
        <div className='grid grid-cols-2 justify-center items-center h-screen'>
       
        <div className='lg:3/4 h-1/2  flex items-center justify-end '>
            <img src = "https://preview.redd.it/2zfs2x82fgj51.jpg?auto=webp&s=b5ff6f7ca167b74b7e6d510d7c34432882329b9a" className=' h-5/6 w-10/12 sm:w-9/12 lg:w-6/12'></img>
       </div>
       <div className=' shadow-lg w-10/12 lg:w-3/5 h-1/2'>
           <h1 className='text-center font-Spectral text-lg sm:text-2xl' >Profile</h1>
           <div className=' grid grid-cols-2 h-2/4'>
             <div className='grid grid-rows-2 text-center items-center font-Poppins text-xs sm:text-lg'>
                <h1>Name:</h1>
                <h1>Pho Phopversna</h1>
             </div>
             <div className='grid grid-rows-2 text-center items-center font-Poppins text-xs sm:text-lg'>
                <h1>Role:</h1>
                <h1>User</h1>
             </div>

           </div>
           <div className='flex justify-center items-center h-1/2 '>
             <button className=' h-1/5 w-1/2 bg-[#A1454D] text-white rounded-full font-Spectral '>Sign Out</button>
           </div>
       </div>
    </div>
    </div>
  )
}

export default UserProfile