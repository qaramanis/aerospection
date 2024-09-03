import React from "react";

const Modal = ({ show, onClose }) => {
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
          color: "#333",
          padding: "5px",
          borderRadius: "8px",
          maxWidth: "400px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2>Contact Us</h2>
        <p>
          Visit our Instagram:{" "}
          <a
            href="https://www.instagram.com/aero.spection/"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram.com/aero.spection
          </a>
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
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
