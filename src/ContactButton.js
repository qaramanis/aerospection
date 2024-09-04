import React, { useState, useEffect } from "react";

const ContactButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [copySuccess, setCopySuccess] = useState("");

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

  return (
    <>
      <button
        style={{
          transform: "scale(1)",
          padding: "12px 24px",
          fontSize: "20px",
          color: "#fff",
          backgroundColor: "#41B3A2",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          width: "18vh",
          height: "6vh",
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
              borderRadius: "60px",
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.1)",
              maxWidth: "90%",
              width: "600px",
              maxHeight: "90%",
              overflow: "auto",
              position: "relative",
              textAlign: "center",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                marginTop: 0,
                color: "#41B3A2",
                fontSize: "50px",
                marginBottom: "30px",
              }}
            >
              Contact Us
            </h2>
            <p
              style={{
                marginBottom: "20px",
                fontSize: "35px",
                lineHeight: "1.5",
              }}
            >
              Find us at{" "}
              <a
                href="https://www.linkedin.com/company/aerospectiongr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0077B5", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </p>
            <p style={{ fontSize: "24px", margin: "20px 0" }}>or</p>
            <p
              style={{
                fontSize: "35px",
                marginBottom: "20px",
                lineHeight: "1.5",
              }}
            >
              Email us at{" "}
              <span
                onClick={() => copyToClipboard("info@aerospection.gr")}
                style={{
                  color: "#41B3A2",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
              >
                info@aerospection.gr
              </span>
            </p>
            {copySuccess && (
              <p
                style={{
                  color: "green",
                  fontSize: "20px",
                  marginBottom: "20px",
                }}
              >
                {copySuccess}
              </p>
            )}
            <button
              style={{
                padding: "12px 24px",
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#41B3A2",
                border: "none",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
                display: "inline-block",
                marginTop: "20px",
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
