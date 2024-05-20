/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { ChangeEvent, FormEvent, useState } from 'react';
import './login.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';


function Login() {

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <main>
      <div className='login-page'>
        <h1> Login </h1>
        <form onSubmit={ handleSubmit }>
                <input type="email" name='' placeholder='Enter Email ...' value={email} required onChange={handleEmailChange} /><br />
                <input type="password" placeholder='Enter Password ...' value={password} required onChange={handlePasswordChange} /><br />
                <button type="submit" className='btn' >Login</button>
                <p>or login with</p>
                <div className='icons'>
                    <div className='icon'>
                        <GitHubIcon className='logo' fontSize='medium' />
                    </div>
                    <div className='icon'>
                        <GoogleIcon className='logo' fontSize='medium' />
                    </div>
                    <div className='icon'>
                        <FacebookIcon className='logo' fontSize='medium' />
                    </div>
                </div>
        </form>
      </div>
    </main>
  );
}

export default Login;
