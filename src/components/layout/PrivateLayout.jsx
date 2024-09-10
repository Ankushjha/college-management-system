import React from 'react'
import PublicNavbar from '../PublicNavbar'
import { Outlet } from 'react-router-dom'

const PrivateLayout = () => {
  return (
    <>
    <PublicNavbar />
    <Outlet />
    </>
  )
}

export default PrivateLayout