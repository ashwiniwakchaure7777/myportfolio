import React from 'react'
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src='cropped_image.png' alt='profile'/>
        <h1><span>I'm Ashwini Wakchaure, </span>
        Full Stack Developer Based in India.</h1>
        <p>I am a Full Stack Developer from India, turning ideas into reality with code and design </p>
        <div className='hero-action'>
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
            <a className="hero-resume" href='./Resume.pdf' download='Ashwini_Wakchaure_MERN_Developer.pdf'>My resume</a>
        </div>
    </div>
  )
}

export default Hero