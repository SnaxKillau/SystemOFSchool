import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Menu from './Menu'
import up from "./image/up-arrow.png"
import view from './image/file.png'
import remove from './image/delete.png'

function LostorFoundPosting() {
 
    const [report , Setreport] = useState(false)

    const ChangeOption = () => {
        if(report == true){
          Setreport(false)
        }
        else{
          Setreport(true)
        }
        
      }
  return (
        <div>
        <Menu></Menu>
        <div className='flex flex-col justify-center items-center'>
       
       <h1 className='flex justify-center mt-10 font-inter'>Losting or Founding </h1>
    
      
       <form className='bg-[#D9D9D9] drop-shadow-lg  mt-2 p-10  w-3/4 sm:w-3/5 grid '>
            <select className='ml-4 font-semibold w-11/12' onChange={() => {ChangeOption()}}>
               <option>Losting</option>
               <option> Finding</option>
           </select><br></br>
           <label  className=' font-semibold ml-4'>Reference Picture:</label>
           <input type = "file" className='ml-4 file:bg-gradient-to-b file:from-red-400 file:to-red-500 file:border-none file:h-8 font-semibold file:text-white file:cursor-pointer  file:rounded-lg w-11/12'></input>
           
           <label className=' font-semibold ml-4'>Item:</label><br/>
          
           <input type="text" className='ml-4  w-11/12' placeholder='where is the thing that you found or lost it?'></input><br/>
           <label className=' font-semibold ml-4 '>Unique:</label><br/>
           <input type="text" className='ml-4  w-11/12' placeholder="Decide about its like color , size , something "></input><br/>
           <label className=' font-semibold ml-4 '>Place:</label><br></br>
           <input type="text" className='ml-4  w-11/12' placeholder='whre did you find or lost it?'></input>
           <label className=' font-semibold ml-4 '>Contact:</label><br></br>
           <input type="text" className='ml-4  w-11/12' placeholder='How to contact you?'></input>
          <div className='flex justify-center'>
          <button id="button" type="submit" className=" shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg w-24 h-10 mt-5 ">Post</button>
          </div>
         
       </form>
       </div>
        </div>
  )
  
}

export default LostorFoundPosting