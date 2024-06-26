import React, { useState } from 'react';
import google from '../assets/google.svg';
import { encryptData } from "./CyptoUtils";
import { jwtDecode } from "jwt-decode";
import { MyContext } from "../App";
import { useContext } from "react";
import { Link } from 'react-router-dom';

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSignin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
  
      const token = data.token;
  
      localStorage.setItem('token', token);

      if (token) {
      setIsLogin(true)
      const decodedToken = jwtDecode(token);
      const userRole = decodedToken.role;
      console.log(userRole);
      const encryptedUserData = encryptData({
      id: decodedToken.id,
      role: userRole,
      });
      // localStorage.setItem('contextData', encryptedUserData);

      // updateContextValue(decodedToken.id, userRole);
      // console.log(updateContextValue);
      setRole(userRole);

        if (userRole === 'ROLE_ADMIN') {
          navigate('/admin')
        } else if(userRole === 'ROLE_USER') {
          navigate('/user')
        }
        else {
        
        }
      }
  
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      const response = await fetch('http://localhost:8080/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);

    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div className='login'>
      <div className='bg-gray relative flex items-center justify-center h-screen'>
        <div className='loginNav bg-white p-9 w-[448px] h-[660px] absolute rounded-[20px]'>
          <div className='flex justify-between mb-3'>
            <div></div>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="20">
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
              </svg>
            </button>
          </div>
          <h1 className='text-lg text-center mb-7'>
            Welcome to Accommodate Me
          </h1>
          <div className='flex justify-center mb-6'>
          <div>
        <button
          onClick={() => setIsLogin(true)}
          className='w-[114px] mb-4'
        >
          Sign in
        </button>
        <div className={`login_underline ${isLogin ? 'bg-blue h-[5px]' : 'bg-gray h-[2px] mt-[3px]'} w-[114px]`}></div>
      </div>
      <div>
        <button
          onClick={() => setIsLogin(false)}
          className='w-[114px] mb-4'
        >
          Register
        </button>
        <div className={`register_underline ${isLogin ? 'bg-gray h-[2px] mt-[3px]' : 'bg-orange h-[5px]'} w-[114px] h-[2px]`}></div>
      </div>
          </div>
          <div>
            <div className={isLogin ? 'login' : 'Register'}>
              <div className='flex flex-col gap-3'>
                <div className='flex border border-gray p-3 rounded-[10px]'>
                  <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20">
                  <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
                  </svg>
                  <input className='outline-none' placeholder='Enter Email' />
                </div>
                <div className='flex border border-gray p-3 rounded-[10px]'>
                <svg className='mr-3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"><path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17v80c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24V448h40c13.3 0 24-10.7 24-24V384h40c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/>
                  </svg>
                  <input className='outline-none' placeholder='Enter Password'/>
                </div>
              </div>
              <div className='w-full mt-3'>
                <Link to="/dashboard">
                <button className={`bg-${isLogin ? 'blue' : 'orange'} text-white w-full p-3 rounded-[10px]`}>
                  {isLogin ? 'Sign In' : 'Register'}
                </button>
                </Link>
              </div>
              {isLogin && (
                <div>
                  <p className='text-blue text-center mt-2 font-semibold'>Forgot your password?</p>
                </div>
              )}
            </div>
            <h1 className='divider text-center mt-4'>OR</h1>
            <div className='w-full mt-4'>
              <button className='border border-gray p-2 rounded-[10px] w-full'> 
                <div className='flex items-center justify-between'>
                  <p>Continue with Google</p>
                  <img src={google} className='w-[40px]'/>
                </div>
              </button>
            </div>
            <p className='text-sm text-center font-semibold mt-6'>
              By continuing I understand and agree with Accommodate Me’s
              <span className='text-blue'> Terms & Conditions</span> and 
              <span className='text-blue'> Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
