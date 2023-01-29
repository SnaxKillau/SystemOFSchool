import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Menu from './Menu'
import {fetchPostDetail} from "../redux/PostsAction"
import Loading from './Loading'

function Report_information() {

   const id = useParams()
   const data = useSelector(state => state.postDetail)
   const dispatch = useDispatch()


   useEffect(() => {
    dispatch(fetchPostDetail(id.id))
    console.log(data)
    console.log(id.id)

      
   },[])
  return (
   <div>
     <Menu></Menu>
     {
      data.loading ? <Loading></Loading>:
      <div className=' h-screen mt-10 '>
      <h1 className=' underline font-inter text-[#52586B] ml-5 sm:ml-20'>Post Detail</h1>
      <div className='flex justify-center mt-10'
      >
      <img src = {data.posts.data?.attributes.img_link}className=' h-52 w-3/4 sm:h-96'></img>
     
      </div>
      <h1 className=' text-center font-Spectral'>Picture Reference</h1>
      <div className='flex ml-5 sm:ml-20 '>
       <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
     
       <label className='font-Spectral mt-2 ml-2'>{data.posts.data?.attributes.username}</label>

      </div>
     <h1 className='ml-5 mt-10 sm:ml-20 font-semibold text-xl'>{data.posts.data?.attributes.title}</h1>
     <p className='ml-5 sm:ml-20 w-5/6'>
     {data.posts.data?.attributes.information}
     </p>
     <hr className='w-5/6 ml-5 mt-4 sm:ml-20'></hr>
     <h1 className='ml-5 sm:ml-20 mt-5 font-Spectral'> Comment:</h1>
    
     <div className='ml-5 sm:ml-20 mt-5 font-Spectral w-10/12'>
           
             <div className='flex'>
               <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
               <label className='font-Spectral mt-2 ml-2'>Username</label>
             </div>
             
             <p className=' mt-4'>In bookStore </p>
             <hr></hr>
      </div>
    
   
 </div>
     }
   </div>
  )
}

export default Report_information