import React from 'react'
import Menu from './Menu'
import { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Loading from './Loading'
import {infoDetail} from '../redux/InformationAction'
import { list } from 'postcss'
import { useParams } from 'react-router-dom'

function InformationDetail() {
    const data = useSelector(state => state.infoDetail)
    const dispatch = useDispatch()
    const ParamId = useParams()

   useEffect(() => {
    dispatch(infoDetail(ParamId.id))
    console.log(data)
    console.log(ParamId.id)
    
    
   },[]

   )
    

  return (
    <div>
    <Menu></Menu>
    {
        data.loading ? <Loading></Loading>: 
                       
        <div className=' h-screen mt-10 '>
        <h1 className=' underline font-inter text-[#52586B] ml-5 sm:ml-20'>Report Detail</h1>
        <div className='flex justify-center mt-10'
        >
        <img src = "https://www.realsimple.com/thmb/KrGb42aamhHKaMzWt1Om7U42QsY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/great-books-for-anytime-2000-4ff4221eb1e54b659689fef7d5e265d5.jpg" className=' h-52 w-3/4 sm:h-96'></img>
       
        </div>
        <h1 className=' text-center font-Spectral'>Picture Reference</h1>
        <div className='flex ml-5 sm:ml-20 '>
         <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
       
         <label className='font-Spectral mt-2 ml-2'>{data.posts.data?.attributes.username}</label>

        </div>
       <h1 className='ml-5 mt-10 sm:ml-20 font-semibold text-xl'>{data.posts.data?.attributes.information}</h1>
       <p className='ml-5 sm:ml-20 w-5/6'>
     
       </p>
       <hr className='w-5/6 ml-5 mt-4 sm:ml-20'></hr>
       <h1 className='ml-5 sm:ml-20 mt-5 font-Spectral'> Reply:</h1>
      
       <div className='ml-5 sm:ml-20 mt-5 font-Spectral w-10/12'>
             
               <div className='flex'>
                 <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
                 <label className='font-Spectral mt-2 ml-2'></label>
               </div>
               
               <p className=' mt-4'>In bookStore </p>
               <hr></hr>
        </div>
   </div>
}       
  </div>
  )
    
}

export default InformationDetail