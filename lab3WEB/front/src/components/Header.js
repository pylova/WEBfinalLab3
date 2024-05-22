import React from 'react';
import './stylies/style.css';
import './stylies/style_article.css';
import logo from './images/logo.png';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="menu">
                    <ul style={{ display: 'flex', justifyContent: 'space-between', textAlign:'center',maxHeight:'100px' }}>
                        <li><img src={logo} alt="Logo" style={{ maxHeight: '40px', maxWidth: '40px',marginTop:'-10px' }} /></li>
                        <li><Link id="News" to="/">Latest Posts</Link></li>
                        <li><Link id="About" to="/about-us">About us</Link></li>
                        <li><Link id="Account" to="/account">Your Account</Link></li>
                        <li><Link id="Register" to="/sign">Sign Up</Link></li>
                        <li><Link id="LogIn" to="/login">Log In</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
