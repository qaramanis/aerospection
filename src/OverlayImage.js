import React from "react";
import ContactButton from "./ContactButton";
import logo from "/home/qaramanis/projects/aerospection/src/assets/logo-black.png";

const OverlayImage = () => {
  const handleNavClick = (section) => {
    console.log("scrolling to ${section} section");
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
          justifyContent: "start",
          padding: "1rem 5%",
          backgroundColor: "rgba(255, 255, 255, 1)",
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
        <div style={{ display: "flex", gap: "2rem" }}>
          <a
            href="#home"
            onClick={() => handleNavClick("home")}
            style={{
              color: "#303642",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => handleNavClick("about")}
            style={{
              color: "#303642",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About Us
          </a>

          <a
            href="#about"
            onClick={() => handleNavClick("about")}
            style={{
              color: "#303642",
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
