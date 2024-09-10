import { Menu, Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/images/logo.png"
import RegisterModal from './pages/userManagement/RegisterModal'
import { UserOutlined, UserAddOutlined } from '@ant-design/icons'

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

          <span className='space-x-5'>
            <RegisterModal icon={<UserAddOutlined />}>Register</RegisterModal>
            <Button
              icon={<UserOutlined />}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </span>
        </nav>
      </header>
    </>
  )
}

export default PublicNavbar