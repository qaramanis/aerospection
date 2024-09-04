import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";

const OverlayImage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logo = "/images/logo-white.png";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = ["home", "about", "team"];

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);
    setIsMenuOpen(false);

    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(48, 54, 66, 0.9)",
    padding: "10px 20px",
    zIndex: 1000,
  };

  const navContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const logoStyle = {
    height: "40px",
    cursor: "pointer",
  };

  const menuButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  };

  const menuStyle = {
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "rgba(48, 54, 66, 0.9)",
    padding: "10px",
  };

  const menuItemStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    fontSize: "18px",
  };

  return (
    <nav style={navStyle}>
      <div style={navContentStyle}>
        <img
          src={logo}
          alt="Logo"
          onClick={(e) => handleNavClick(e, "home")}
          style={logoStyle}
        />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={menuButtonStyle}
        >
          ☰
        </button>
      </div>
      <div style={menuStyle}>
        {["home", "about", "team"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavClick(e, section)}
            style={{
              ...menuItemStyle,
              fontWeight: activeSection === section ? "bold" : "normal",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
        <ContactButton />
      </div>
    </nav>
  );
};

export default OverlayImage;
