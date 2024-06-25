import { Input , Form, Button } from 'antd'
import React from 'react';
import "./Register.scss"
import { register } from '../../services/authService';


const Register = () => {

  const [form] = Form.useForm();

  const sendData  = async (e) => {
    try {
      const data = await register(e)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='register'>
      <div className='register-box'>
      <h2 className='register-title'>Register</h2>

      <Form from={form} onFinish={sendData}>
        <Form.Item name={'userName'}>
          <Input placeholder='Username' />
        </Form.Item>
        <Form.Item name={'firstName'}>
          <Input placeholder='First Name' />
        </Form.Item>
        <Form.Item name={'lastName'}>
          <Input placeholder='Last Name' />
        </Form.Item>
        <Form.Item name={'email'}>
          <Input placeholder='Email' />
        </Form.Item>
        <Form.Item name={'password'}>
          <Input placeholder='Password' />
        </Form.Item>
        <Form.Item>
          <Input placeholder='Confirm Password' />
        </Form.Item>

        <Button htmlType='submit' className='next-btn' >Next </Button>
        
      </Form>
    </div>
    </div>
  )
}

export default Register
