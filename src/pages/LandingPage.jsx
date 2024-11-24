import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import "./LandingPage.css";
import facebookLogo from "./images/akar-icons_facebook-fill.png";
import googleLogo from "./images/google.png";
import logo from "./images/logo.png";
import group from "./images/group.png" 

const User = [
  { email: "melsoft@academy.co.za", password: "Melsoft2024" },
];
function LandingPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = User.find(user => user.email === email && user.password === password);
    if (user) {
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container-fluid flex h-screen p-0">
      <div className="left-section d-none d-md-flex flex-column justify-center align-items-center text-white p-8">
        <div className="mydash">
          <img src={logo} alt="" className="mydash max-w-xs h-auto" />
        </div>
        <div className="group">
        <img src={group} alt=""  className="center"/>
        </div>
        <br />
        <p className="heading">Welcome to your Dashboard</p>
        <p className="sub">Everything you need to manage your online store</p>
      </div>

      <div className="right-section flex flex-column justify-center align-items-center p-8 bg-white">
        <h2 className="text-2xl font-bold">Sign In to your Account</h2> 
        <p>Welcome back! Please enter your details.</p> <br />
        
      
        
        <form className="login-form flex flex-col gap-4 w-full max-w-sm" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="input-field p-2 border border-gray-300 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field p-2 border border-gray-300 rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="options flex justify-between">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password text-blue-500">Forgot Password?</a>
          </div>
          <button type="submit" className="sign-in-btn bg-blue-500 text-white py-2 rounded-lg">Sign In</button>
        </form>
        <p>Or Sign In Using</p>

        <div className="social-login text-center mt-6 mb-4">
          <button className="social-btn google bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center py-2 mt-2">
            <img src={googleLogo} alt="google logo" className="google-logo " />
            Google
          </button>
          <button className="social-btn facebook bg-white border border-gray-300 rounded-lg flex items-center justify-center py-2 mt-2">
            <img src={facebookLogo} alt="facebook logo" className="facebook-logo" />
            Facebook
          </button>
        </div>
        <p className="sign-up mt-4 text-sm">Don't have an account? <a href="#" className="text-blue-500">Sign Up</a></p>
      </div>
    </div>
  );
}

export default LandingPage;