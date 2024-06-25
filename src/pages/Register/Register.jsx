import { Input, Form, Button } from 'antd';
import React, { useState } from 'react';
import "./Register.scss";
import { register } from '../../services/authService';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reduxStore/authSlice';
import { failureLoading, startLoading, successLoading } from '../../redux/reduxStore/loaderSlice';

const Register = () => {
  const [form] = Form.useForm();
  const [regError , setRegError ] = useState("");
  const {user} = useSelector(state => state.authSlice);
  const {isLoading} = useSelector(state => state.loaderSlice);
  const dispatch = useDispatch();


  const sendData = async (values) => {
    dispatch(startLoading())
    try {
      const data = await register(values);
      console.log(data);
      localStorage.setItem("token" , JSON.stringify(data.token));
      dispatch(setUser(data.user));
      dispatch(successLoading())
    } catch (error) {
      console.log(error);
      setRegError(error?.response?.data?.message);
      dispatch(failureLoading())
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
            <Input placeholder='Username' required />
          </Form.Item>
          <Form.Item name='firstName'>
            <Input placeholder='First Name' required />
          </Form.Item>
          <Form.Item name='lastName'>
            <Input placeholder='Last Name' required />
          </Form.Item>
          <Form.Item name='email'>
            <Input type='email' placeholder='Email' required />
          </Form.Item>
          <Form.Item name='password'>
            <Input.Password placeholder='Password' required />
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
            <Input.Password placeholder='Confirm Password' required />
          </Form.Item>

          <Form.Item>
            <Button loading={isLoading} htmlType='submit' className='next-btn'>
              Next
            </Button>
          </Form.Item>
          <span className='register-error'>{regError}</span>
        </Form>
      </div>
    </div>
  );
}

export default Register;
