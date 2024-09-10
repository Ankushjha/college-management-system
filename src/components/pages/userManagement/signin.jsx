import { Form, Select, Input, Button } from 'antd'
import { useEffect } from 'react';

const Signin = ({ role, ...props }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ role })
  }, [role, form])

  const handleFinish = (values) => {
    props.onFinish(values); //these values will be passed inside onFinish that we called from RegisterModal component
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
        name='login'
        onFinish={handleFinish} //this will submit the form data as per provided function
      // initialValues={{ role }} //this will set the intial value [update: I'm not using this as this initialValues only initializes the form once and doesn't update dynamically]
      >
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
          <Input placeholder="john@doe.com" />
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
          name="role"
          label="Loggin as"
          rules={[{
            required: true,
          }]}
          hasFeedback
        >
          <Select
            value={role}
            // defaultValue={role} //this ensures that value should be role only

            disabled
          >
            <Select.Option value="student">Student</Select.Option>
            <Select.Option value="faculty">Faculty</Select.Option>
            <Select.Option value="admin">Admin</Select.Option>
          </Select>

          {/* <Input value={role} disabled></Input> */}
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
          <Button className='me-5' danger onClick={props.onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Signin