import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './Menu'
import {postingPost} from '../redux/PostsAction' 
import Loading from './Loading'


function PostPosting() {

  const dispatch = useDispatch()
  const data = useSelector(state => state.postingPost)
  const [photoURl , setPhotoURL] = useState("")
  const [information , setInfromation] = useState("")
  const [title , setTitle] = useState("")





  // useEffect(() => {
  //   dispatch(postingPost("hello", "Zerotwo" , "Hello","https://pyxis.nymag.com/v1/imgs/186/c5b/4d0e282e5fdfb67fd60b54a4b2d6eeadd0-platinum-3776.2x.rhorizontal.w600.jpg"))

  //   console.log(data)
  // },[])
  const submitbtn = ()=> {
    dispatch(postingPost(title,"ZeroTwo" , information, photoURl))
  }

   
  return (
    <div>
        <Menu></Menu>
        {
          data.loading ? <Loading></Loading>:
          <div className='flex flex-col justify-center items-center'>
          <h1 className='flex justify-center mt-10 font-inter'>Publish Posting</h1>
   
          {/* Sign in form for user */}
          <div className='bg-[#D9D9D9] drop-shadow-lg  mt-2 p-10  w-3/4 sm:w-3/5 grid '>
              
              <label  className=' font-semibold ml-4'>Reference Picture:</label>
              <input type = "file" className='ml-4 file:bg-gradient-to-b file:from-red-400 file:to-red-500 file:border-none file:h-8 font-semibold file:text-white file:cursor-pointer  file:rounded-lg w-11/12'></input>
              <label className=' font-semibold ml-4 mt-4'>Photo URL:</label><br/>
          
              <input type="text" className='ml-4  w-11/12' placeholder='You can input some photo reference' onChange={(e) => { setPhotoURL(e.target.value)}}></input><br/>
              <label className=' font-semibold ml-4'>Title:</label><br/>
          
              <input type="text" className='ml-4  w-11/12' placeholder='What your want writing ?' onChange={(e) => {setTitle(e.target.value)}}></input><br/>
              <label className=' font-semibold ml-4 '>Unique:</label><br/>
              <textarea  className='ml-4  w-11/12 h-32'  onChange={(e) => {setInfromation(e.target.value)}}></textarea>
  
  
          <div className='flex justify-center'>
          <button id="button"  className=" shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg w-24 h-10 mt-5 " onClick={() => {submitbtn()}}>Posting</button>
          </div>
          
          </div>
          </div>
        }
        </div>
  )
}

export default PostPosting