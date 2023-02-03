import React, { useEffect } from 'react'
import Menu from './Menu'
import { useSelector , useDispatch} from 'react-redux'
import Loading from './Loading'
import {reportDetail} from '../redux/ReportAction'
import { list } from 'postcss'
import { useParams } from 'react-router-dom'
import  {viewAnnouncementDetail} from '../redux/AnnouncementAction'

function AnnoumentDetail() {

    const id = useParams()
    const data = useSelector(state => state.viewAnnouncement)
    const dispatch = useDispatch()

    useEffect(() => {
        
            dispatch(viewAnnouncementDetail(id.id))

            console.log(data)
    },[])



  return (
    <div>
         <Menu></Menu>
         
            
    
         <div className=' h-screen mt-10 '>
        <h1 className=' underline font-inter text-[#52586B] ml-5 sm:ml-20'>Announcement Detail</h1>
        <div className='flex justify-center mt-10'
        >
        <img src = {data.report.data?.attributes.photo_url} className=' h-52 w-3/4 sm:h-96'></img>
       
        </div>
        <h1 className=' text-center font-Spectral'>Picture Reference</h1>
        <div className='flex ml-5 sm:ml-20 '>
         <img src= "https://i.pinimg.com/564x/ed/38/bb/ed38bbac2c073ae88d6c8b6e5cd87f33.jpg" className='w-10 h-10 rounded-full'></img>
       
         <label className='font-Spectral mt-2 ml-2'>Admin</label>

        </div>
       <h1 className='ml-5 mt-10 sm:ml-20 font-semibold text-xl'> {data.report.data?.attributes.title}</h1>
       <p className='ml-5 sm:ml-20 w-5/6'>
            {data.report.data?.attributes.information}
       </p>
       
        </div>
                
    </div>
  )
}

export default AnnoumentDetail