import React from "react";
import { useState } from "react";
import Modal from "./Modal";

const ContactButton = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          color: "#fff",
          backgroundColor: "#41B3A2", // Bootstrap primary color
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "20px", // Space above the button
          transition: "background-color 0.3s ease",
        }}
        onClick={toggleModal}
      >
        Contact Us
      </button>
      <Modal show={showModal} onClose={toggleModal} />
    </div>
  );
};

export default ContactButton;
