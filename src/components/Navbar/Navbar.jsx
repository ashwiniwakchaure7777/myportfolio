import React,{useState, useRef} from 'react'
import "./Navbar.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }

  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img className='logo' src='./ashwini_logo.png' alt='logo'/>
        <img onClick={openMenu} src='./menu_open.svg' alt='' className='nav-mob-open' />
        <ul ref={menuRef} className='nav-menu'>
          <img onClick={closeMenu}  src='./menu_close.svg' alt='' className='nav-mob-close'/>
            <li><AnchorLink className='anchor-link' offset={50} href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu === "home" ? <img src="./nav_underline.svg" alt=''/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu === "about" ? <img src="./nav_underline.svg" alt=''/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu === "services" ? <img src="./nav_underline.svg" alt=''/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Portfolio</p></AnchorLink>{menu === "work" ? <img src="./nav_underline.svg" alt=''/> : <></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu === "contact" ? <img src="./nav_underline.svg" alt=''/> : <></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar