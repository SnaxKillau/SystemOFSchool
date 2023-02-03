import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {postingReport} from '../redux/ReportAction'
import { useDispatch, useSelector } from 'react-redux';
import {postingInfo} from '../redux/InformationAction'
import Loading from './Loading';
import Menu from './Menu'

export default function ContactUs(){
  const form = useRef();
  const [report , Setreport] = useState(false)
  const [title , setTitle] = useState("")
  const [userName , setUserName] = useState("")
  const [information,setInformation] = useState("")
  const data = useSelector(state => state.postReport)
  const infoData = useSelector(state => state.postPosting)
  const dispatch = useDispatch()
 

  const sendEmail = (e) => {
    e.preventDefault();
    if(report == false){
      dispatch(postingReport
        (title,userName,information))
        console.log(data)
    }
    if(report == true){
      dispatch(postingInfo(title,userName,information))
    }

    emailjs.sendForm("service_oqryd2s", 'template_liyh1k9', form.current, 't7X8mx1UKVR82AgWE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });


  };
 


  return (

  <div>
    <Menu></Menu>
    {
      data.loading ? <Loading></Loading> :<div className='flex flex-col justify-center items-center'>
       <h1 className='flex justify-center mt-10 font-inter'>Report</h1>
       
       <form ref={form} onSubmit={sendEmail} className='bg-[#D9D9D9] drop-shadow-lg h-90 mt-2 p-10 w-3/4 sm:w-3/5'>
       <label className=' font-semibold ml-4'>Type</label><br></br>
       <input type = 'radio' name = 'choice' className='ml-4 font-semibold' onClick = {() => Setreport(false)}></input>
       <label className='ml-2 font-semibold'>Report</label>
       <input type = 'radio' name = 'choice' className='ml-4 font-semibold' onClick = {() => Setreport(true)}></input>
       <label className='ml-2 font-semibold'>Ask Infromation</label><br></br>
       
       
      <label className=' font-semibold ml-4'>Name</label><br></br>
      <input type="text" name="user_name" className='ml-4 mb-2 mt-2 w-11/12' onChange={(e) => {setUserName(e.target.value)}}/><br></br>
      <label className=' font-semibold ml-4'>Email</label><br></br>
      <input type="email" name="user_email"  className=' ml-4 mb-2 mt-2 w-11/12'/><br></br>
      <label className=' font-semibold ml-4'>Title</label><br></br>
      <input type="text" name="user_email"  className=' ml-4 mb-2 mt-2 w-11/12' onChange={(e) => {setTitle(e.target.value)}}/><br></br>
      <label className=' font-semibold ml-4'>Message</label><br></br>
      <textarea name="message"  className='ml-4 mb-2 mt-2 w-11/12' onChange={(e)=> {setInformation(e.target.value)}} /><br></br>
      <input type="submit" value="Send" className=" ml-10 mt-1 w-8/12 h-1/5 shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg p-4 sm:w-3/6 sm:ml-32 lg:w-2/5 lg:ml-52 xl:w-1/4 xl:ml-[300px]" /><br></br>
      </form>

 </div>
    }
  </div>
  );
};