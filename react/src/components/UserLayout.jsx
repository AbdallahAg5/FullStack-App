
import React, { useEffect, useState }  from 'react'
import { Link, Navigate, Outlet, useNavigate } from 'react-router-dom'
import { axiosClient } from '../api/axios'
import { useStateContext } from '../context/Context'

function UserLayout() {
  const {user,token,setUser,TokenFunc}=useStateContext()
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
 
 
   const LogoutHandler=()=>{
    axiosClient.post('/logout')
    .then(() => {
      setUser({})
      TokenFunc(null)
    })
}

useEffect(() => {
  setLoading(true)
  axiosClient.get('/user')
    .then(({data}) => {
       setUser(data)
       setLoading(false)
    })
     
  if(!token){
    navigate('/')
    
}
}, [])



  return (
    <div className=''>
    <nav className='public_layout'>
       <h1 className='logo'>Welecome {user.name}</h1>
       <ul className='ul-public'>
           <Link  to={''} ><li>About</li></Link>
           <Link  to={'/'} onClick={LogoutHandler} ><li>Logout</li></Link>
       </ul>
    </nav>
       <Outlet />
   </div>
  )
}

export default UserLayout


  