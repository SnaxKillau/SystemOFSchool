import React, { useEffect, useState } from 'react'

import Report_information from './PostDetail'
import { useDispatch, useSelector } from 'react-redux'
import {fetchReport,fetchReportError,fetchReportRequest,deleteReport }from '../redux/ReportAction'
import Loading from './Loading'
import de from './image/delete.png'
import edit from './image/edit.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import view from './image/file.png'
import {fetchInfo , deleteInfo} from '../redux/InformationAction'





function Reportpage() {
    const [show , Setshow] = useState(true)
    const [haveData, SetHaveData] = useState(false)
    const dispatch = useDispatch();
    const [reportData , setReportData] = useState([])
    const data = useSelector(state => state.report)
    var num = 0
    const deletedata = useSelector(state => state.deletereport)
    const infoData = useSelector(state => state.info)
    const deleteInfoData = useSelector(state => state.deleteInfo)

    useEffect(() => {

         
           if(data.report.length == 0){
            dispatch(fetchReport())
            console.log("Hello")
           }
           if(infoData.posts.length == 0){
            dispatch(fetchInfo())
           }
           

           
          
    },[])
    const deletebyID = (id) => {
          dispatch(deleteReport(id))
          console.log(id)
          
    }
    const deleteInfobyID = (id) =>{
       dispatch(deleteInfo(id))
       console.log(id)

    }
   
 

    


  
    
    
   
    



  return (
    <div>
         <Menu></Menu>
       
        
        {
          data.loading || deletedata.loading || deleteInfoData.loading ||infoData.loading ? <Loading></Loading> :  <div className='mt-10'>
          {
              show ? 
             <div>
                <div className=' flex justify-end mr-5 sm:mr-5 '>
             <Link to = '/ReportandInfoPosting' className=' bg-[#A1454D] text-white w-20 p-2 text-center rounded-lg'>Posting</Link>
              </div>
               <div  className='flex justify-between pt-3'>
              <button className='border-solid border-black w-2/4 h-15 pt-3 text-center border-t-2 '>
                Ask for Informations
              </button>
              <button className='border-2 border-solid border-black w-2/4 pt-3 text-center bg-[#52586B] text-white' onClick={() => {Setshow(false)}}>
                Report
              </button>
              </div> 

                
                 {
                  infoData.posts.data?.map((e) => {
                    return(
  
                      <div className=' grid grid-cols-2 mt-5 border-l-8 border-[#A1454D] h-14' key={e.id}>
                      <div className='grid items-center ml-5'>
                          <h1>{e.attributes.title}</h1>
                          <h1 className=' font-Spectral'>{e.attributes.username}</h1>
                      </div>
                      <div className='flex justify-end'>
                      <div className='flex justify-between sm:justify-center sm:space-x-5 '>
                        <button className=' w-12 sm:w-10 flex justify-center items-center' onClick={() => {deleteInfobyID(e.id)}}>
                          <img src = {de} className='w-5' ></img>
                        </button>
                        <button  className=' w-12 sm:w-10 flex justify-center items-center'>
                        <Link to = {`/infomationDetail/${e.id}`}><img src = {view} className='w-5' ></img></Link>
                        </button>
                    </div>
                      </div>
                
                   </div>
                    )
                  })
                 }
                
                
           
             </div>
  
              :
               <div>
               <div className='flex justify-between pt-3'>
               <button  className='border-solid border-black w-2/4 h-15 pt-3 text-center border-2 bg-[#52586B] text-white' onClick={() => {Setshow(true)}}>
               Ask for Informations
               </button>
               <button className='border-t-2 border-solid border-black w-2/4 pt-3 text-center text-black'>
               Report 
               </button>
               
               </div>

               {
                  data.report.data?.map((e) => {
                    return(
                      <div className=' grid grid-cols-2 mt-5 border-l-8 border-[#A1454D] h-14' key={e.id}>
                      <div className='grid items-center ml-5'>
                          <h1>{e.attributes.title}</h1>
                          <h1 className=' font-Spectral'>{e.attributes.username}</h1>
                      </div>
                      <div className='flex justify-end'>
                      <div className='flex justify-between sm:justify-center sm:space-x-5 '>
                        <button className=' w-12 sm:w-10 flex justify-center items-center'  onClick={() => {deletebyID(e.id)}}>
                          <img src = {de} className='w-5' ></img>
                        </button>
                        <button  className=' w-12 sm:w-10 flex justify-center items-center' >
                          <Link to = {`/reportDetail/${e.id}`}><img src = {view} className='w-5' ></img></Link>
                        </button>
                    </div>
                      </div>
                
                   </div>
                    )
                  })
                 }
             
               </div>
               
               
              
            
              
          }
  
        </div>
        }
    


    </div>
  )
}



export default Reportpage