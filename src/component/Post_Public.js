import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Menu from './Menu'
import up from "./image/up-arrow.png"
import view from './image/file.png'
import remove from './image/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import {fetchPublicPosts,deletePost} from '../redux/PostsAction'



function Post_Public() {

   const deletedata = useSelector(state => state.postDelete)
   const data = useSelector(state => state.posts)
   const dispatch = useDispatch()
  


   useEffect(() => {

        if(data.posts.length == 0){
        dispatch(fetchPublicPosts())
        console.log(data)}


   },[])
   const deletepost = (id)=> {
    console.log(id)
      dispatch(deletePost(id))
      
      console.log(data)
      
   }
  return (
   <div>
     <Menu></Menu>
        {
          data.loading || deletedata.loading ? <Loading></Loading>: <div className='mt-10 ml-5 sm:ml-20' id = "top-public">
          <div className='grid grid-cols-2 justify-between'>
          <h1 className=' underline font-inter text-[#52586B]'>Public Post</h1>
          <div className=' flex justify-end mr-5 sm:mr-20 '>
             <Link to = '/NewPost' className=' bg-[#A1454D] text-white w-20 p-2 text-center rounded-lg'>Posting</Link>
          </div>
          </div>
          
          
          <div className = "grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4" >
          {
              data.posts.data?.map((e)=> {
                return(
                  <div className=' w-9/12 h-screen sm:h-5/6 mt-5 shadow-2xl rounded-xl' key={e.id}>
                       <img src={e.attributes.img_link} className = 'w-screen h-2/4 rounded-t-xl'></img>
                       <div className='h-2/5'>
                           <h1 className='p-10 font-Spectral text-xl'>{e.attributes.title}</h1>
                       </div>
                       <div className=' flex justify-end content-center'>
                       <button>
                         <Link to = {`/PublicPost/PostDetail/${e.id}`}>
                         <img src={view} className = "w-10 h-10 p-2"></img>
                         </Link>
                        </button>
                        <button onClick={() => {deletepost(e.id)}}>
                          <img src={remove} className = "w-10 h-10 p-2"></img>
                        </button>
                       

                       </div>

                  </div>
                  
                )
              })
          }
          </div>

          <div className='flex justify-end'>
            <a href='#top-public' className='w-10 h-10 bg-red-400 mr-10 mb-5 sm:mt-5 sm:mb-5 rounded-full'>
                  <img src ={up}></img>
            </a>

          </div>
        
         
      </div>
        }
       
      
   </div>
  )

}

export default Post_Public