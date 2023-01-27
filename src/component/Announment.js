import React from 'react'
import Loading from './Loading'
import de from './image/delete.png'
import edit from './image/edit.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'

import view from './image/file.png'

function Announment() {
  return (
    <div>
          <Menu></Menu>
          <div className='mt-10 ml-5 sm:ml-20' id = "top-public">
          <div className='grid grid-cols-2 justify-between'>
          <h1 className=' underline font-inter text-[#52586B]'>Annoument</h1>
          <div className=' flex justify-end mr-5 sm:mr-16'>
             <Link to = '/NewPost' className=' bg-[#A1454D] text-white w-20 p-2 text-center rounded-lg'>Posting</Link>
          </div>
          </div>
          </div>
          <div className=' grid grid-cols-2 mt-5 border-l-8 border-[#A1454D] h-14'>
                      <div className='grid items-center ml-5'>
                          <h1>Hell</h1>
                         
                      </div>
                      <div className='flex justify-end'>
                      <div className='flex justify-between sm:justify-center sm:space-x-5 '>
                        <button className=' w-12 sm:w-10 flex justify-center items-center'>
                          <img src = {de} className='w-5' ></img>
                        </button>
                        <button  className=' w-12 sm:w-10 flex justify-center items-center'>
                          <img src = {view} className='w-5' ></img>
                        </button>
                    ``</div>
                      </div>
                
                   </div>
    </div>
  )
}

export default Announment