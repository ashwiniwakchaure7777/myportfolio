import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img className='logo' src='./ashwini_logo.png' alt='footer logo' />
                <p>I am a Full Stack Developer from India, turning ideas into reality </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src='./user_icon.svg' alt='' />
                    <input type='email' placeholder="Enter your email"/>
                </div>
                <div className="footer-subscribe">Subscribe</div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom">
        <p className="footer-bottom-left">&#169; 2024 Ashwini Wakchaure. All rights are reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Privacy Policy</p>
                <p>Connect with me</p>
            </div>
          
        </div>
    </div>
  )
}

export default Footer