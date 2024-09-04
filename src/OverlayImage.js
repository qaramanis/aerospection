import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";

const OverlayImage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const logo = "/images/logo-white.png";

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

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

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      window.removeEventListener("scroll", handleScroll);
    };
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

  // Styles for desktop version
  const desktopNavStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem 5%",
    backgroundColor: "rgba(48, 54, 66, 0.4)",
  };

  const desktopLogoStyle = {
    maxWidth: "20%",
    maxHeight: "20%",
    width: "auto",
    height: "auto",
    cursor: "pointer",
  };

  const desktopMenuStyle = {
    display: "flex",
    gap: "5rem",
    fontSize: "30px",
  };

  const desktopMenuItemStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "bold",
  };

  // Styles for mobile version
  const mobileNavStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(48, 54, 66, 0.9)",
    padding: "10px 20px",
    zIndex: 1000,
  };

  const mobileNavContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const mobileLogoStyle = {
    height: "40px",
    cursor: "pointer",
  };

  const mobileMenuButtonStyle = {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "24px",
    cursor: "pointer",
  };

  const mobileMenuStyle = {
    display: isMenuOpen ? "flex" : "none",
    flexDirection: "column",
    position: "absolute",
    top: "60px",
    left: 0,
    right: 0,
    backgroundColor: "rgba(48, 54, 66, 0.9)",
    padding: "10px",
  };

  const mobileMenuItemStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    fontSize: "18px",
  };

  if (isMobile) {
    return (
      <nav style={mobileNavStyle}>
        <div style={mobileNavContentStyle}>
          <img
            src={logo}
            alt="Logo"
            onClick={(e) => handleNavClick(e, "home")}
            style={mobileLogoStyle}
          />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={mobileMenuButtonStyle}
          >
            ☰
          </button>
        </div>
        <div style={mobileMenuStyle}>
          {["home", "about", "team"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => handleNavClick(e, section)}
              style={{
                ...mobileMenuItemStyle,
                fontWeight: activeSection === section ? "bold" : "normal",
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
          <ContactButton isMobileOverlay={true} />
        </div>
      </nav>
    );
  }

  return (
    <nav style={desktopNavStyle}>
      <img
        src={logo}
        alt="Logo"
        onClick={(e) => handleNavClick(e, "home")}
        style={desktopLogoStyle}
      />
      <div style={desktopMenuStyle}>
        {["home", "about", "team"].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            onClick={(e) => handleNavClick(e, section)}
            style={{
              ...desktopMenuItemStyle,
              color: activeSection === section ? "white" : "#FFFFFF",
            }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
      <ContactButton />
    </nav>
  );
};

export default OverlayImage;
