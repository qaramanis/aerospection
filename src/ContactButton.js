import React, { useState, useEffect } from "react";

const ContactButton = ({ isMobileOverlay }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setCopySuccess("");
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Email copied to clipboard!");
    } catch (err) {
      setCopySuccess("Failed to copy email");
    }
  };

  useEffect(() => {
    if (copySuccess) {
      const timer = setTimeout(() => {
        setCopySuccess("");
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [copySuccess]);

  const buttonStyle = {
    padding: isMobile ? "8px 16px" : "12px 24px",
    fontSize: isMobile ? "16px" : "22px",
    color: "#fff",
    backgroundColor: "#41B3A2",
    border: "none",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    width: isMobileOverlay ? "auto" : isMobile ? "auto" : "18vh",
    height: isMobile ? "auto" : "6vh",
  };

  const popupStyle = {
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
  };

  const popupContentStyle = {
    backgroundColor: "#fff",
    padding: isMobile ? "15px" : "20px",
    borderRadius: isMobile ? "20px" : "60px",
    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: isMobile ? "85%" : "90%",
    width: isMobile ? "300px" : "600px", // Adjusted width for mobile
    maxHeight: "90%",
    overflow: "auto",
    position: "relative",
    textAlign: "center",
  };

  const titleStyle = {
    marginTop: 0,
    color: "#41B3A2",
    fontSize: isMobile ? "24px" : "50px", // Adjusted font size for mobile
    marginBottom: isMobile ? "15px" : "30px",
  };

  const textStyle = {
    marginBottom: "20px",
    fontSize: isMobile ? "16px" : "35px", // Adjusted font size for mobile
    lineHeight: "1.5",
  };

  const linkStyle = {
    color: "#0077B5",
    textDecoration: "none",
  };

  const emailStyle = {
    color: "#41B3A2",
    cursor: "pointer",
    textDecoration: "underline",
  };

  const closeButtonStyle = {
    ...buttonStyle,
    display: "inline-block",
    marginTop: "20px",
    fontSize: isMobile ? "14px" : "22px", // Adjusted font size for mobile
    padding: isMobile ? "6px 12px" : "12px 24px", // Adjusted padding for mobile
  };

  return (
    <>
      <button style={buttonStyle} onClick={togglePopup}>
        Contact Us
      </button>
      {showPopup && (
        <div style={popupStyle} onClick={togglePopup}>
          <div style={popupContentStyle} onClick={(e) => e.stopPropagation()}>
            <h2 style={titleStyle}>Contact Us</h2>
            <p style={textStyle}>
              Find us at{" "}
              <a
                href="https://www.linkedin.com/company/aerospectiongr/"
                target="_blank"
                rel="noopener noreferrer"
                style={linkStyle}
              >
                LinkedIn
              </a>
            </p>
            <p
              style={{ fontSize: isMobile ? "14px" : "24px", margin: "15px 0" }}
            >
              or
            </p>
            <p style={textStyle}>
              Email us at{" "}
              <span
                onClick={() => copyToClipboard("info@aerospection.gr")}
                style={emailStyle}
              >
                info@aerospection.gr
              </span>
            </p>
            {copySuccess && (
              <p
                style={{
                  color: "green",
                  fontSize: isMobile ? "14px" : "20px",
                  marginBottom: "15px",
                }}
              >
                {copySuccess}
              </p>
            )}
            <button style={closeButtonStyle} onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactButton;
