import React, { useState } from 'react';
import './Register.css';
import '../../App.css';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';

import video from "../../loginassets/video.mp4";
import logo from "../../loginassets/logo.jpg";

import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from 'react-icons/md';

const Register = () => {
  const [email, setEmail] = useState('');
  const [facultyID, setFacultyID] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const createUser = (e) => {
    e.preventDefault();
    if (email === '' || facultyID === '' || password === '') {
      alert("Please fill in all fields!");
      return;
    }
    Axios.post('http://localhost:3002/register', {
      Email: email,
      FacultyID: facultyID,
      Password: password
    }).then(() => {
      navigateTo('/signin');
      setEmail('');
      setFacultyID('');
      setPassword('');
    }).catch(error => {
      console.error(error);
      alert("An error occurred, please try again.");
    });
  };
  return (
    <div className='registerPage flex'>
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">VNR VJIET</h2>
            <p>EMPOWERING MINDS BUILDING FUTURES</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={'/signin'}>
              <button className='btn'>Login</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Admin Register Page</h3>
          </div>
          <form className='form grid' onSubmit={createUser}>
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className='icon' />
                <input type="email" id='email' placeholder='Enter Email' value={email} onChange={(event) => setEmail(event.target.value)} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="facultyID">Faculty ID</label>
              <div className="input flex">
                <FaUserCircle className='icon' />
                <input type="text" id='facultyID' placeholder='Enter Faculty ID' value={facultyID} onChange={(event) => setFacultyID(event.target.value)} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdOutlineSecurity className='icon' />
                <input type="password" id='password' placeholder='Enter Password' value={password} onChange={(event) => setPassword(event.target.value)} />
              </div>
            </div>
            <button type='submit' className='btn flex'>
              <span>Register</span>
              <AiOutlineSwapRight className='icon' />
            </button>
            <span className='forgotPassword'>
              Forgot your password? <a href="#">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
