import { Menu, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import RegisterModal from './pages/userManagement/registerModal'

const menuItem = [
  {
    key: "/",
    label: "Home",
  },

  {
    key: "/private-navbar",
    label: "Private Navbar",
  },
  {
    key: "/public-layout",
    label: "Public Layout",
  },
]

const PublicNavbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className='container'>
        <nav className='flex justify-between items-center border-b-[1px] border-solid px-8'>
          <img src={logo} alt="CMS ERP" className='w-10 h-10' onClick={() => navigate("/")} />

          <Menu
            onClick={({ key }) => {
              navigate(key);
            }}
            mode="horizontal"
            items={menuItem}
            disabledOverflow
            className='border-none'
          />

          <RegisterModal>Register</RegisterModal>
        </nav>
      </header>
    </>
  )
}

export default PublicNavbar