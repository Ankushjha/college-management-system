import React, { useState } from 'react'
import { PiStudentFill } from "react-icons/pi";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { FaPersonChalkboard } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'antd';
import Signin from './Signin';

const SigninModal = () => {

    const navigate = useNavigate();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState([])
    const [currentRole, setCurrentRole] = useState("")
    const [modalRole, setModalRole] = useState("")

    // array of data to pass inside button component 
    const buttonData = [
        {
            key: "home",
            icon: <AiOutlineHome className='text-2xl' />,
            text: "Home",
            onclick: () => navigate('/'),
        },

        {
            key: "student",
            icon: <PiStudentFill className='text-2xl' />,
            text: "Student Login",
            onclick: () => {
                setCurrentRole("student")
                setModalRole("Student")
                setIsModalVisible(true)
            },
        },

        {
            key: "faculty",
            icon: <FaPersonChalkboard className='text-2xl' />,
            text: "Faculty Login",
            onclick: () => {
                setCurrentRole("faculty")
                setModalRole("Faculty")
                setIsModalVisible(true)
            },
        },

        {
            key: "admin",
            icon: <RiAdminLine className='text-2xl' />,
            text: "Administration Login",
            onclick: () => {
                setCurrentRole("admin")
                setModalRole("Admin")
                setIsModalVisible(true)
            },
        },
    ]


    const handleCancel = () => {
        setIsModalVisible(false)
        setCurrentRole("")
        setModalRole("");
    }

    const handleFormSubmit = (values) => {
        setFormData(values);
        setIsModalVisible(false);
        setCurrentRole("");
        setModalRole("");
    }
    console.log(formData) //TODO: we have to put and check this formData is available in ourdata base or not

    return (
        <>
            {buttonData.map((data) => (
                <Button
                    type='text'
                    className='bg-white w-1/2 justify-start ps-10 font-semibold text-xl py-6 uppercase'
                    size="large"
                    key={data.key}
                    onClick={data.onclick}
                >
                    {data.icon} {data.text}
                </Button>
            ))}

            <Modal
                title={`Login Yourself as a ${modalRole}`}
                open={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >

                <Signin
                    role={currentRole}
                    onFinish={handleFormSubmit}
                    onCancel={handleCancel}
                />

            </Modal>

        </>
    )
}

export default SigninModal