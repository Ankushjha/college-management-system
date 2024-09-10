import {  Input, Form, Select, DatePicker, Button, } from 'antd'
import React, { useState } from 'react'

// const initialFormData = {
//     firstname: "",
//     lastname: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     contactNumber: "",
//     gender: "",
//     dob: "",
//     address: "",
// }

const Register = ({ onFinish, onCancel }) => {

    const [form] = Form.useForm();

    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <Select
                style={{
                    width: 70,
                }}

            >
                <Select.Option value="+91">+91</Select.Option>
                <Select.Option value="+1">+1</Select.Option>
            </Select>
        </Form.Item>
    );

    const handleFinish = (values) => {
        onFinish(values); //these values will be passed inside onFinish that we called from RegisterModal component
        form.resetFields() //this will reset alll fields
    }
    return (
        <>
            <Form
                form={form}
                labelCol={{
                    xs: { span: 24, },
                    sm: { span: 8, },
                }}
                wrapperCol={{
                    xs: { span: 24, },
                    sm: { span: 16, },
                }}
                name='register'
                onFinish={handleFinish} //this will submit the form data as per provided function
            >

                <Form.Item
                    label="First Name"
                    name="firstname"
                    rules={[{
                        required: true,
                        message: "Please enter your First Name"
                    },
                    { whitespace: true },
                    { min: 3 }
                    ]}
                    hasFeedback

                >
                    <Input

                        placeholder="John"
                    />
                </Form.Item>

                <Form.Item
                    label="Last Name"
                    name="lastname"
                    rules={[{
                        required: true,
                        message: "Please enter your Last Name"
                    },
                    { whitespace: true },
                    { min: 2 }
                    ]}
                    hasFeedback
                >
                    <Input

                        placeholder="Doe"
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"

                    rules={[{
                        required: true,
                        message: "Please enter your email"
                    },
                    {
                        type: "email",
                        message: "Please enter a valid email"
                    },
                    { whitespace: true },
                    ]}
                    hasFeedback
                >
                    <Input
                        placeholder="johndoe@xyz.com"
                    />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{
                        required: true,
                        message: "Please enter a password"
                    },
                    { min: 6 }
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        // value={formData.password}                        
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[{
                        required: true,
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject("Passwords don't match")
                        }
                    })
                    ]}
                    hasFeedback
                >
                    <Input.Password
                        // value={formData.confirmPassword}                       
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    label="Contact Number"
                    name="contactNumber"

                    rules={[{
                        required: true,
                        message: "Please enter a valid contact Number"
                    },
                    { whitespace: true },
                    ]}
                    hasFeedback
                >
                    <Input
                        type='number'
                        // value={formData.contactNumber}
                        addonBefore={prefixSelector}
                        placeholder="Contact Number"
                    />
                </Form.Item>

                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[{
                        required: true,
                        message: "Please select a valid gender"
                    }]}
                    hasFeedback
                >
                    <Select
                        // value={formData.gender}                        
                        placeholder="Select your gender"
                    >
                        <Select.Option value="male">Male</Select.Option>
                        <Select.Option value="female">Female</Select.Option>
                        <Select.Option value="others">Others</Select.Option>
                    </Select>

                </Form.Item>

                <Form.Item
                    name="dob"
                    label="Date of Birth"
                    rules={[{
                        required: true,
                        message: "Please select your Date of Birth"
                    }]}
                >
                    <DatePicker
                        // value={formData.dob}                        
                        picker='date'
                        placeholder='Choose Date of Birth'
                    ></DatePicker>
                </Form.Item>
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[{
                        required: true,
                        message: "Please enter a valid Address"
                    },
                    { min: 20 }
                    ]}
                    hasFeedback
                >
                    <Input.TextArea
                        // value={formData.address}                        
                        placeholder='Your Address'
                    />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        xs: {
                            span: 24,
                            offset: 0,
                        },
                        sm: {
                            span: 16,
                            offset: 8,
                        },
                    }}>
                    <Button className='me-5' danger onClick={onCancel}>Cancel</Button>
                    <Button type="primary" htmlType="submit">Register</Button>
                </Form.Item>
            </Form >


        </>
    )
}

export default Register