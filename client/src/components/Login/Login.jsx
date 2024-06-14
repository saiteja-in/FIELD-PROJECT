import React, { useState, useEffect } from "react";
import "./Login.css";
import "../../App.css";

import { Link, useNavigate } from "react-router-dom";
import Axios from 'axios';

import video from "../../loginassets/video.mp4";
import logo from "../../loginassets/logo.jpg";

import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {

  const [loginFacultyID, setLoginFacultyID] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const navigateTo = useNavigate();

  const [loginStatus, setLoginStatus] = useState('');
  const [statusHolder, setstatusHolder] = useState('message');

  const loginUser = (e) => {
    e.preventDefault();
    if (loginFacultyID === '' || loginPassword === '') {
      setLoginStatus("Please fill in all fields!");
      return;
    }
    Axios.post('http://localhost:3002/login', {
      LoginFacultyID: loginFacultyID,
      LoginPassword: loginPassword
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(`Credentials Don't Exist!`);
        console.log(`Credentials Don't Exist!`);
      } else {
        navigateTo('/dashboard');
      }
      setLoginFacultyID('');
      setLoginPassword('');
    }).catch(error => {
      console.error(error);
      setLoginStatus("An error occurred, please try again.");
    });
  };

  useEffect(() => {
    if (loginStatus !== '') {
      setstatusHolder('showMessage');
      setTimeout(() => {
        setstatusHolder('message');
      }, 4000);
    }
  }, [loginStatus]);

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">VNR VJIET</h2>
            <p>EMPOWERING MINDS BUILDING FUTURES</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Don't have an account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>
        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Admin Login Page</h3>
          </div>
          <form className='form grid' onSubmit={loginUser}>
            <span className={statusHolder}>{loginStatus}</span>
            <div className="inputDiv">
              <label htmlFor="facultyID">Faculty ID</label>
              <div className="input flex">
                <FaUserCircle className="icon" />
                <input type="text" id="facultyID" placeholder="Enter Faculty ID" value={loginFacultyID} onChange={(event) => setLoginFacultyID(event.target.value)} />
              </div>
            </div>
            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <MdOutlineSecurity className="icon" />
                <input type="password" id="password" placeholder="Enter Password" value={loginPassword} onChange={(event) => setLoginPassword(event.target.value)} />
              </div>
            </div>
            <button type='submit' className="btn flex">
              <span>Login</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
