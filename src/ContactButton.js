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
          transform: "scale(1)",
          padding: "10px 20px",
          fontSize: "1.8vh",
          color: "#fff",
          backgroundColor: "#41B3A2", // Bootstrap primary color
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          width: "15vh",
          height: "5vh",
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
