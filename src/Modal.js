import React, { useState } from "react";

const Modal = ({ show, onClose }) => {
  const [copied, setCopied] = useState(false);
  const email = "info@aerospection.gr";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  if (!show) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#def9c4",
          color: "#303642",
          padding: "5px",
          borderRadius: "20px",
          maxWidth: "700px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h3>Contact Us</h3>
        <h4>
          E-mail us at{" "}
          <span
            onClick={copyToClipboard}
            style={{
              color: "#0066cc",
              cursor: "pointer",
              textDecoration: "underline",
            }}
            title="Click to copy email"
          >
            {email}
          </span>{" "}
          {copied && (
            <span style={{ color: "green", fontSize: "0.8em" }}>(Copied!)</span>
          )}
        </h4>
        <p>or</p>
        <h4>
          Visit our LinkedIn page{" "}
          <a
            href="https://www.linkedin.com/company/aerospectiongr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#0066cc" }}
          >
            here
          </a>
        </h4>

        <button
          style={{
            marginTop: "20px",
            marginBottom: "10px",
            padding: "10px 20px",
            backgroundColor: "#41B3A2",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            maxWidth: "120px",
          }}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
