import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Menu from './Menu'
import {viewFound} from '../redux/LostorFoundAction'

import Loading from './Loading'

function LostorFoundDetail() {

    const id= useParams()
    const data = useSelector(state => state.foundDetail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewFound(id.id))
        console.log(data)

    },[])

  return (
    <div>
     <div>
    <Menu></Menu>
    {
        data.loading ? <Loading></Loading>: 
         
    
                       
        <div className=' h-screen mt-10 '>
        <h1 className=' underline font-inter text-[#52586B] ml-5 sm:ml-20'>Report Detail</h1>
        <div className='flex justify-center mt-10'
        >
        <img src = {data.report.data?.attributes.photo} className=' h-52 w-3/4 sm:h-96'></img>
       
        </div>
        <h1 className=' text-center font-Spectral'>Picture Reference</h1>
        <div className='flex ml-5 sm:ml-20 '>
         <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
       
         <label className='font-Spectral mt-2 ml-2'>{data.report.data?.attributes.username}</label>

        </div>
       <h1 className='ml-5 mt-10 sm:ml-20 font-semibold text-xl'>{data.report.data?.attributes.title}</h1>
       <h1 className='ml-5 mt-2 sm:ml-20 font-semibold text-sm'>Item : {data.report.data?.attributes.item}</h1>
       <h1 className='ml-5 mt-2 sm:ml-20 font-semibold text-sm'>Place: {data.report.data?.attributes.place}</h1>
       <h1 className='ml-5 mt-2 sm:ml-20 font-semibold text-sm'>Contact: {data.report.data?.attributes.contact}</h1>
      
       
       <hr className='w-5/6 ml-5 mt-4 sm:ml-20'></hr>
       <h1 className='ml-5 sm:ml-20 mt-5 font-Spectral'> Reply:</h1>
      
       <div className='ml-5 sm:ml-20 mt-5 font-Spectral w-10/12'>
             
               <div className='flex'>
                 <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
                 <label className='font-Spectral mt-2 ml-2'>{data.report.data?.attributes.username}</label>
               </div>
               
               <p className=' mt-4'>In bookStore </p>
               <hr></hr>
        </div>
   </div>
}
    
    
    
       
            
        
    
  </div>
    </div>
  )
}

export default LostorFoundDetail