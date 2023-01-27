import React from 'react'
import "./output.css"

function Header() {
  return (
    <div>
        <header>
            <section className="flex items-center justify-between  h-12 bg-brownmixgreen">
            <h1 className='font-inter ml-2 mt-1.5 text-sm text-[#FFFFFF]'>School Report System</h1>
            <h1 className='font-inter mr-20 mt-1.5 text-sm text-[#FFFFFF] ' >Username</h1>
            </section>
            <img className='  sm:  w-8 rounded-lg absolute top-0 right-6 mt-2' src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' ></img>
            
           
        </header>
      

    </div>
  )
}

export default Header