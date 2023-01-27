
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import Menu from './Menu'
import up from "./image/up-arrow.png"
import view from './image/file.png'
import remove from './image/delete.png'

function LostorFoundingPage() {
  const [show , setShow]= useState(true)
  const data = [
   {
       "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
       "title": "I found at stem",
       "username":"scofield",
       "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
   },
   {
       "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
       "title": "I found at stem",
       "username":"scofield",
       "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
   },
   {
       "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
       "title": "I found at stem",
       "username":"scofield",
       "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
   },
   {
       "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
       "title": "I found at stem",
       "username":"scofield",
       "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
   },
   {
     "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
     "title": "I found at stem",
     "username":"scofield",
     "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
   } ,
   {
     "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
     "title": "I found at stem",
     "username":"scofield",
     "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
 },
 {
   "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
   "title": "I found at stem",
   "username":"scofield",
   "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
},
{
   "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
   "title": "I found at stem",
   "username":"scofield",
   "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
},
{
 "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
 "title": "I found at stem",
 "username":"scofield",
 "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
} ,
{
 "img" : "https://www.highsnobiety.com/static-assets/thumbor/NP3Qj83ZUNvIpPW2g46p2qJIJKY=/1600x2133/www.highsnobiety.com/static-assets/wp-content/uploads/2020/12/10192830/apple-airpods-max-review-13.jpg",
 "title": "I found at stem",
 "username":"scofield",
 "user_profile":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx6JhsQ_cONk2X9149DqiXNGnm8hFZuuG__NNpdNoHZ80GoFxeo-kkoIm4Rh8t2CvWTE0&usqp=CAU"
}

  ]
 
 return (
  <div>
    <Menu></Menu>
       {
         show ? <div className='mt-10 ml-5 sm:ml-20' id = "top-public">
         <div className='grid grid-cols-2 justify-between'>
         <h1 className=' underline font-inter text-[#52586B]'>Lost or Found Posts</h1>
         <div className=' flex justify-end mr-5 sm:mr-20 '>
            <Link to = "/LostorFound/Posting" className=' bg-[#A1454D] text-white w-20 p-2 text-center rounded-lg'>Posting</Link>
         </div>
         </div>
         
         
         <div className = "grid  grid-cols-1 sm:grid-cols-3 lg:grid-cols-4" >
         {
             data.map((e)=> {
               return(
                 <div className=' w-9/12 mt-5 shadow-2xl rounded-xl'>
                      <img src={e.img} className = 'w-screen h-2/4 rounded-t-xl'></img>
                      <div className='h-2/5'>
                          <h1>Hello</h1>
                      </div>
                      <div className=' flex justify-end content-center'>
                      <button>
                        <Link to = '/PublicPost/PostDetail'>
                        <img src={view} className = "w-10 h-10 p-2"></img>
                        </Link>
                       </button>
                       <button>
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
       
        
     </div>:<Loading></Loading>
       }
      
     
  </div>
 )

}

export default LostorFoundingPage