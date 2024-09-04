import React from "react";

const MainPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#def9c4",
        padding: "50px",
        minHeight: "0",
      }}
    >
      {/* Left Column */}
      <div
        style={{
          flex: 1,
          marginRight: "100px",
          textAlign: "left",
        }}
      >
        <h1 style={{ fontSize: "48px", color: "#303642" }}>
          The Aerospection Edge
        </h1>
        <h3 style={{ fontSize: "35px", color: "#303642" }}>
          Let Aerospection take your maritime operations to new heights. Your
          fleet, our technology - together, we sail towards a smarter, safer and
          more sustainable future
        </h3>
        <h2 style={{ fontSize: "30px", color: "#303642" }}>Who we are:</h2>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "20px" }}>
          Aerospection is a cutting-edge company that seamlessly integrates
          advanced technology with the critical need of maritime inspections and
          services.
        </p>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "20px" }}>
          Our innovative approach leverages the latest in drone technology,
          AI-driven analytics, and remote inspection solutions to revolutionize
          the way maritime assets are monitored, maintained, and managed.
        </p>
      </div>

      {/* Right Column */}
      <div
        style={{
          flex: 1,
          marginLeft: "100px",
          textAlign: "right",
        }}
      >
        <h2 style={{ fontSize: "30px", color: "#303642" }}>Our Mission:</h2>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "20px" }}>
          At Aerospection, our mission is to transform the maritime industry
          through innovative technology solutions. We aim to enhance safety,
          efficiency, and sustainability in maritime operations.
        </p>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "20px" }}>
          By combining state-of-the-art drone technology with advanced AI
          analytics, we provide unparalleled insights and services to our
          clients, ensuring the integrity and longevity of their maritime
          assets.
        </p>
      </div>
    </div>
  );
};

export default MainPage;
