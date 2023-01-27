import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactUs(){
  const form = useRef();
  const [report , Setreport] = useState(false)
 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_oqryd2s", 'template_liyh1k9', form.current, 't7X8mx1UKVR82AgWE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  const ChangeOption = () => {
    if(report == true){
      Setreport(false)
    }
    else{
      Setreport(true)
    }
    
  }


  return (

   <div className='flex flex-col justify-center items-center'>
         <h1 className='flex justify-center mt-10 font-inter'>Report</h1>

         <form ref={form} onSubmit={sendEmail} className='bg-[#D9D9D9] drop-shadow-lg h-90 mt-2 p-10 w-3/4 sm:w-3/5'>
        <select className='ml-4 font-semibold w-11/12' onChange={() => {ChangeOption()}}>
            <option>Report</option>
            <option> Ask information</option>
        </select><br></br>
        <label className=' font-semibold ml-4'>Name</label><br></br>
        <input type="text" name="user_name" className='ml-4 mb-2 mt-2 w-11/12'/><br></br>
        <label className=' font-semibold ml-4'>Email</label><br></br>
        <input type="email" name="user_email"  className=' ml-4 mb-2 mt-2 w-11/12'/><br></br>
        <label className=' font-semibold ml-4'>Message</label><br></br>
        <textarea name="message"  className='ml-4 mb-2 mt-2 w-11/12'/><br></br>
        <input type="submit" value="Send" className=" ml-10 mt-1 w-8/12 h-1/5 shadow-xl hover:bg-red-500 hover:text-white font-bold rounded-lg p-4 sm:w-3/6 sm:ml-32 lg:w-2/5 lg:ml-52 xl:w-1/4 xl:ml-[300px]" /><br></br>
        </form>

   </div>
  );
};