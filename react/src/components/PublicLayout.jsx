import React  from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../context/Context'
import '../style/publiclayout.scss'

function PublicLayout() {
      const {token}=useStateContext()
      
          if(token){
              return <Navigate to={'users'} />
          }
    
  return (
         <div className=''>
             <nav className='public_layout'>
                <h1 className='logo'>Logo Shit</h1>
                <ul className='ul-public'>
                    <Link  to={''} ><li>About</li></Link>
                    <Link  to={''} ><li>Policy</li></Link>
                </ul>
             </nav>
             <Outlet />
         </div>

 
  )
}

export default PublicLayout