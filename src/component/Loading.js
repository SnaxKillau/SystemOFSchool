import React from 'react'
import loading from './image/loading.png'

function Loading() {
  return (
    <div className='grid justify-center h-screen content-center'>
            <img src ={loading} className = "w-20  animate-spin"></img>
            <h1 className=' text-center font-semibold'>Loading</h1>
    </div>
  )
}

export default Loading