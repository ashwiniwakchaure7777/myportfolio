import React from 'react'
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero, { ReachOut as Contact } from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Services from "./components/Services/Services.jsx";
import MyWork from "./components/MyWork/MyWork.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
       <Hero />
      <About/>
      <Services />
      <MyWork />
      <Contact/>
      <Footer/> 
    </div>
  )
}

export default App