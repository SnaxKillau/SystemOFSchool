
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Menu from './Menu'
import up from "./image/up-arrow.png"
import view from './image/file.png'
import remove from './image/delete.png'
import { useDispatch, useSelector } from 'react-redux'
import {fetchFound ,deleteFound} from '../redux/LostorFoundAction'

function LostorFoundingPage() {
  const [show , setShow]= useState(true)
  const data = useSelector(state => state.foundReducer)
  const dispatch = useDispatch()



  useEffect(() => {
      dispatch(fetchFound())
      console.log(data)
  },[])

const deleteLostorFound = (id) => {
  dispatch(deleteFound(id))
}



 
 return (
  <div>
    <Menu></Menu>
       {
            data.loading ? <Loading></Loading> : <div className='mt-10 ml-5 sm:ml-20' id = "top-public">
            <div className='grid grid-cols-2 justify-between'>
            <h1 className=' underline font-inter text-[#52586B]'>Public Post</h1>
            <div className=' flex justify-end mr-5 sm:mr-20 '>
               <Link to = '/LostorFound/Posting' className=' bg-[#A1454D] text-white w-20 p-2 text-center rounded-lg'>Posting</Link>
            </div>
            </div>
            
            
            <div className = "grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4" >
            {
                data.report.data?.map((e)=> {
                  return(
                    <div className=' w-9/12 h-screen sm:h-5/6 mt-5 shadow-2xl rounded-xl' key={e.id}>
                         <img src={e.attributes.photo} className = 'w-screen h-2/4 rounded-t-xl'></img>
                         <div className='h-2/5'>
                             <h1 className='pl-10 pt-4 font-Spectral text-xl'>Type : {e.attributes.type}</h1>
                             <h1 className='pl-10 pt-2 font-Spectral text-xl'>{e.attributes.title}</h1>

                         </div>
                         <div className=' flex justify-end content-center'>
                         <button>
                           <Link to = {`/LostorFound/${e.id}`}>
                           <img src={view} className = "w-10 h-10 p-2"></img>
                           </Link>
                          </button>
                          <button onClick={() => {deleteLostorFound(e.id)}}>
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

export default LostorFoundingPage