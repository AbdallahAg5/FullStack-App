import React from 'react'
import { Outlet } from 'react-router-dom'

function PublicLayout() {
  return (
    <div>
         hello there
        <Outlet />
    </div>
  )
}

export default PublicLayout