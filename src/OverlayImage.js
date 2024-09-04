import React, { useState, useEffect } from "react";
import ContactButton from "./ContactButton";

const OverlayImage = () => {
  const [activeSection, setActiveSection] = useState("home");
  const logo = "/images/logo-white.png";

  useEffect(() => {
    const sectionIds = ["home", "about", "team"];
    const sectionElements = sectionIds.map((id) => document.getElementById(id));

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      sectionElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    setActiveSection(section);

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (section === "team") {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        window.scrollTo({
          top: 925,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          right: "0",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "1rem 5%",
          backgroundColor: "rgba(48, 54, 66, 0.4)",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          onClick={(e) => handleNavClick(e, "home")}
          style={{
            maxWidth: "20%",
            maxHeight: "20%",
            width: "auto",
            height: "auto",
            cursor: "pointer",
          }}
        />
        <div style={{ display: "flex", gap: "5rem", fontSize: "30px" }}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className={`nav-link ${activeSection === "home" ? "active" : ""}`}
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "about")}
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About Us
          </a>
          <a
            href="#team"
            onClick={(e) => handleNavClick(e, "team")}
            className={`nav-link ${activeSection === "team" ? "active" : ""}`}
            style={{
              color: "#FFFFFF",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Our team
          </a>
        </div>
        <ContactButton />
      </div>
    </div>
  );
};

export default OverlayImage;
