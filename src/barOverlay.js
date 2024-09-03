import React from "react";
import logo from "./logo-black.png";

const OverlayImage = () => {
  return (
    <div
      style={{
        backgroundColor: "F6FB7A",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "0%",
          left: "5%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <img
          src={logo}
          alt="Overlay"
          style={{
            zIndex: 1000,
            maxWidth: "20%",
            maxHeight: "20%",
            width: "auto",
            height: "auto",
          }}
        />
      </div>

      <div
        style={{
          position: "fixed",
          top: "0%",
          right: "10%",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            color: "#16423C",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          Your custom aerial shots
        </div>
      </div>
    </div>
  );
};

export default OverlayImage;
