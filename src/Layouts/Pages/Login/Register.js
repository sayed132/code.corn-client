import React from 'react';
import { SiGnuprivacyguard } from "react-icons/si";
import './Login.css';

const Register = () => {
    return (
        <div className="login-container">
          <div className="login-title">Sign up <SiGnuprivacyguard /></div>
          <form className="login-form">
            <input type="text" placeholder="Your Email" />
            <input placeholder="password" />
    
            <input type="password" placeholder="confirm password" />
    
            <button>Sign up</button>
    
          </form>
        </div>
      );
};

export default Register;