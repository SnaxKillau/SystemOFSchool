import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Menu from './Menu'
import up from "./image/up-arrow.png"
import view from './image/file.png'
import remove from './image/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import {postingLostorFound} from '../redux/LostorFoundAction'

function LostorFoundPosting() {


      const [type , setType] = useState("")
      const [item , setItem] = useState("")
      const [unique , setUnique] = useState("")
      const [place , setPlace] = useState("")
      const [contact , setContact] = useState("")
      const data = useSelector(state => state.lostPosting)
      const [title ,setTitle] = useState("")
      const dispatch = useDispatch()

      const posting = () => {
          dispatch(postingLostorFound(type,item,unique,place,contact,title))
          

      }
      useEffect(() => {
          console.log(data)
      },[])

 
   
  return (
        <div>
        <Menu></Menu>
        {data.loading ? <Loading></Loading> :<div className='flex flex-col justify-center items-center'>
       
       <h1 className='flex justify-center mt-10 font-inter'>Losting or Founding </h1>
    
      
       <div className='bg-[#D9D9D9] drop-shadow-lg  mt-2 p-10  w-3/4 sm:w-3/5 grid '>
                     <label className=' font-semibold ml-4'>Type:</label><br/>
          
           <input type="text" className='ml-4  w-11/12' placeholder='Losting / Founding' onChange={(e) => {setType(e.target.value)}}></input><br/>
           <label  className=' font-semibold ml-4'>Reference Picture:</label>
           <input type = "file" className='ml-4 file:bg-gradient-to-b file:from-red-400 file:to-red-500 file:border-none file:h-8 font-semibold file:text-white file:cursor-pointer  file:rounded-lg w-11/12'></input>
           
           <label className=' font-semibold ml-4'>Title:</label><br/>
           <input type="text" className='ml-4  w-11/12' placeholder='What is the title' onChange={(e) => {setTitle(e.target.value)}}></input><br/>
           <label  className=' font-semibold ml-4'>Item:</label>
           <input type="text" className='ml-4  w-11/12' placeholder='where is the thing that you found or lost it?' onChange={(e) => {setItem(e.target.value)}}></input><br/>
           <label className=' font-semibold ml-4 '>Unique:</label><br/>
           <input type="text" className='ml-4  w-11/12' placeholder="Decide about its like color , size , something " onChange={(e => {setUnique(e.target.value)})}></input><br/>
           <label className=' font-semibold ml-4 '>Place:</label><br></br>
           <input type="text" className='ml-4  w-11/12' placeholder='whre did you find or lost it?' onChange={(e) => {setPlace(e.target.value)}}></input>
           <label className=' font-semibold ml-4 '>Contact:</label><br></br>
           <input type="text" className='ml-4  w-11/12' placeholder='How to contact you?' onChange={(e) => {setContact(e.target.value)}}></input>
          <div className='flex justify-center'>
          <button id="button" className=" shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg w-24 h-10 mt-5 " onClick={() => {posting()}}>Post</button>
          </div>
         
       </div>
       </div>}
        </div>
  )
  
}

export default LostorFoundPosting