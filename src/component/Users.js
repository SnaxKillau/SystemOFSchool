import React, { useEffect, useState } from 'react'
import user from './image/user.png'
import de from './image/delete.png'
import edit from './image/edit.png'
import Menu from './Menu'
import {fetchUser,deleteUser} from '../redux/UsersAction'
import { useDispatch, useSelector } from 'react-redux'
import Loading from './Loading'



function Users() {
  const [search , setSearch] = useState("")
  const data = useSelector(state => state.fetchUser)
  const deleteData = useSelector(state => state.deleteUser)
  const dispatch = useDispatch()
  

  useEffect(() => {
      if(data.user.length == 0){
        dispatch(fetchUser())
    

      }
      console.log(data)
  },[])
  const deleteUserbyID = (id) =>{
        dispatch(deleteUser(id))
  }


  return (
    <div>
      <Menu></Menu>
     { data.loading || deleteData.loading ? <Loading></Loading>:
     <div className=' w-screen flex items-center justify-center  h-screen '>
       

   
       <div className=' bg-[#F0F8FF] backdrop-blur-lg  rounded-xl drop-shadow-lg h-10/12 w-10/12 grid overflow-auto'>
        <div className=' flex justify-end mt-5 mr-5'>
        <input className=' w-6/12 h-8 sm:w-3/12 border-[2px] border-[#632A7A] rounded-full text-center' type="text" placeholder='Search by ID' onChange={(e) => {setSearch(e.target.value)}}></input>
        </div>
        <div> </div>
        <div className='mt-2 ml-2 sm:ml-10 text-center'>
          <div className='grid grid-cols-4 h-8'>
            <h1>ID</h1>
            <h1>Username</h1>
            <h1>Role</h1>
            <h1>Tool</h1>
          </div>
        {
        
        
        data.user.data?.filter((e) => {
          if(search == ""){
            return e
        }
        else if(e.attributes.username.toLowerCase().includes(search.toLowerCase())){
          return e
        }
        })
        
        .map((e) => {
          return <div className='grid grid-cols-4 h-8 border-t-[1px]' key={e.id}>
            <h1>{e.id}</h1>
            <h1>{e.attributes.username}</h1>
            <h1>{e.attributes.role}</h1>
           <div className='flex justify-between sm:justify-center sm:space-x-5 '>
              <button className=' w-12 sm:w-10 flex justify-center items-center' onClick={() =>{deleteUserbyID(e.id)}}>
                <img src = {de} className='w-5' ></img>
              </button>
              
           </div>
            
  
  
          </div>
           
       
        })
       }
       
        </div>
  
       </div>
  
  
  
  
      </div>}
    </div>
  )
}

export default Users