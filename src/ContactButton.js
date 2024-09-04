import React, { useState } from "react";

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button
        style={{
          transform: "scale(1)",
          padding: "10px 20px",
          fontSize: "1.8vh",
          color: "#fff",
          backgroundColor: "#41B3A2",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          width: "15vh",
          height: "5vh",
        }}
        onClick={togglePopup}
      >
        Contact Us
      </button>
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={togglePopup}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              maxWidth: "80%",
              maxHeight: "80%",
              overflow: "auto",
              position: "relative",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ marginTop: 0, color: "#41B3A2", fontSize: "24px" }}>
              Hello World
            </h2>
            <p style={{ marginBottom: "20px", fontSize: "16px" }}>
              This is your beautiful popup message!
            </p>
            <button
              style={{
                padding: "10px 20px",
                fontSize: "16px",
                color: "#fff",
                backgroundColor: "#41B3A2",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                display: "inline-block",
              }}
              onClick={togglePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;
