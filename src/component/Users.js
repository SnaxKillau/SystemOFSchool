import React, { useState } from 'react'
import user from './image/user.png'
import de from './image/delete.png'
import edit from './image/edit.png'
import Menu from './Menu'


function Users() {
  const data = [{
    "id" : 1,
    "username" : "sna",
    "role" : "S.Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },{
    "id" : 2,
    "username" : "rx-7",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },{
    "id" : 3,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
  {
    "id" : 4,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
  {
    "id" : 5,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
  {
    "id" : 6,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
  {
    "id" : 7,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
  {
    "id" : 8,
    "username" : "supra",
    "role" : "Admin",
    "profile":"https://static.fandomspot.com/images/04/31486/00-featured-zero-two-darling-in-the-franxx-screenshot.jpg"
  },
 

]



  return (
    <div>
      <Menu></Menu>
      <div className=' w-screen flex items-center justify-center  h-screen '>
       

   
       <div className=' bg-[#F0F8FF] backdrop-blur-lg  rounded-xl drop-shadow-lg h-10/12 w-10/12 grid overflow-auto'>
        <div className=' flex justify-end mt-5 mr-5'>
        <input className=' w-6/12 h-8 sm:w-3/12 border-[2px] border-[#632A7A] rounded-full text-center' type = "number" placeholder='Search by ID' onChange={(e) => {console.log(e.target.value)}}></input>
        </div>
        <div> </div>
        <div className='mt-2 ml-2 sm:ml-10 text-center'>
          <div className='grid grid-cols-4 h-8'>
            <h1>ID</h1>
            <h1>Username</h1>
            <h1>Role</h1>
            <h1>Tool</h1>
          </div>
        {
        data.map((e) => {
          return <div className='grid grid-cols-4 h-8 border-t-[1px]' key={e.id}>
            <h1>{e.id}</h1>
            <h1>{e.username}</h1>
            <h1>{e.role}</h1>
           <div className='flex justify-between sm:justify-center sm:space-x-5 '>
              <button className=' w-12 sm:w-10 flex justify-center items-center' onClick={() => {console.log(e.id)}}>
                <img src = {de} className='w-5' ></img>
              </button>
              <button  className=' w-12 sm:w-10 flex justify-center items-center'>
                <img src = {edit} className='w-5' ></img>
              </button>
           </div>
            
  
  
          </div>
           
       
        })
       }
       
        </div>
  
       </div>
  
  
  
  
      </div>
    </div>
  )
}

export default Users