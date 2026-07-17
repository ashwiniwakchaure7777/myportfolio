import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Work", href: "#work" },
  { id: "contact", label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);
  const openMenu = () => setMenuOpen(true);

  const handleNavClick = (id) => {
    setActive(id);
    closeMenu();
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <AnchorLink className="navbar__logo anchor-link-navbar" offset={80} href="#home">
          <span className="navbar__logo-mark">AW</span>
          <span className="navbar__logo-text">Ashwini</span>
        </AnchorLink>

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={menuOpen ? closeMenu : openMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`navbar__hamburger ${menuOpen ? "open" : ""}`} />
        </button>

        <ul className={`navbar__menu ${menuOpen ? "open" : ""}`}>
          {navLinks.map(({ id, label, href }) => (
            <li key={id}>
              <AnchorLink
                className={`navbar__link anchor-link-navbar ${active === id ? "active" : ""}`}
                offset={80}
                href={href}
              >
                <span onClick={() => handleNavClick(id)}>{label}</span>
              </AnchorLink>
            </li>
          ))}
          <li className="navbar__menu-cta">
            <AnchorLink className="btn-primary anchor-link-navbar" offset={80} href="#contact">
              <span onClick={() => handleNavClick("contact")}>Let's Talk</span>
            </AnchorLink>
          </li>
        </ul>

        <div className="navbar__cta">
          <AnchorLink className="btn-primary anchor-link-navbar" offset={80} href="#contact">
            Let's Talk
          </AnchorLink>
        </div>
      </nav>

      <button
        className={`navbar__overlay ${menuOpen ? "navbar__overlay--visible" : ""}`}
        onClick={closeMenu}
        aria-label="Close menu"
        tabIndex={menuOpen ? 0 : -1}
      />
    </>
  );
};

export default Navbar;
