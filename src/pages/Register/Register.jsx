import { Input, Form, Button } from 'antd';
import React from 'react';
import "./Register.scss";
import { register } from '../../services/authService';

const Register = () => {
  const [form] = Form.useForm();

  const sendData = async (values) => {
    try {
      const data = await register(values);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const confirmPasswordValidator = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The two passwords that you entered do not match!'));
    },
  });

  return (
    <div className='register'>
      <div className='register-box'>
        <h2 className='register-title'>Register</h2>

        <Form form={form} onFinish={sendData}>
          <Form.Item name='userName'>
            <Input placeholder='Username' />
          </Form.Item>
          <Form.Item name='firstName'>
            <Input placeholder='First Name' />
          </Form.Item>
          <Form.Item name='lastName'>
            <Input placeholder='Last Name' />
          </Form.Item>
          <Form.Item name='email'>
            <Input placeholder='Email' />
          </Form.Item>
          <Form.Item name='password'>
            <Input.Password placeholder='Password' />
          </Form.Item>
          <Form.Item
            name='confirmPassword'
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              confirmPasswordValidator,
            ]}
          >
            <Input.Password placeholder='Confirm Password' />
          </Form.Item>

          <Form.Item>
            <Button htmlType='submit' className='next-btn'>
              Next
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Register;
