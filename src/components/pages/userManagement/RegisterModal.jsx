import { Button, Modal, Result } from 'antd'
import React from 'react'
import Register from './Register';
import { useState } from 'react';

const RegisterModal = (props) => {


    const [isModalVisible, setisModalVisible] = useState(false);
    const [isSubmitModalVisible, setIsSubmitModalVisible] = useState(false);

    const handleOk = (values) => {
        console.log(values); //this will log the data in console
        setisModalVisible(false); //this will close the modal after submission
        setIsSubmitModalVisible(true); //this will open the modal of result after submission
        values={};
    }
    return (
        <>
            <Button onClick={() => setisModalVisible(true)}>{props.children}</Button>
            {/* this props.children will take data from the child where this button is used  */}

            <Modal
                title="Register Yourself!"
                open={isModalVisible}
                onCancel={() => setisModalVisible(false)}
                footer={null} //this is null to use custom button form forms
                className='top-9'
            >
                <Register onFinish={handleOk} onCancel={() => setisModalVisible(false)}></Register>
            </Modal>

            {/* This Result component will show after we successfully register ourself  */}
            < Modal
                title=""
                open={isSubmitModalVisible}
                onCancel={() => setIsSubmitModalVisible(false)}
                footer={null}
            >
                <Result
                    status="success"
                    title="Successfully Registration completed!"
                    subTitle="Please wait for sometime we'll send you your credentials via email!"
                />
            </Modal>
        </>
    )
}

export default RegisterModal