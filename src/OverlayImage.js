import React from "react";
import ContactButton from "./ContactButton";
import logo from "/home/qaramanis/projects/aerospection/src/assets/logo-white.png";

const OverlayImage = () => {
  const handleNavClick = (e, section) => {
    e.preventDefault(); // Prevent default link behavior

    if (section === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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
          style={{
            maxWidth: "20%",
            maxHeight: "20%",
            width: "auto",
            height: "auto",
          }}
        />
        <div style={{ display: "flex", gap: "2rem", fontSize: "30px" }}>
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
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
