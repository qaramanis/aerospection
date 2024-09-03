import React from "react";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        height: "auto",
        width: "auto",
        textAlign: "start",
        backgroundColor: "#def9c4",
        marginRight: "120vh",
        marginTop: "-30vh",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          color: "#333",
          MozMarginStart: "10vh",
        }}
      >
        Inspect your projects from a different angle
      </h1>

      <p
        style={{
          fontSize: "24px",
          color: "#333",
          MozMarginStart: "10vh",
          marginBottom: "20px", // Optional: Adds some space after the lorem ipsum text
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default MainPage;
