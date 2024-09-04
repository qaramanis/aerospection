import React from "react";

const BackgroundImages = () => {
  const images = [
    "pic1.jpg",
    "pic2.jpg",
    "pic3.jpg",
    // Add more image paths as needed
  ];

  return (
    <div className="background-images">
      {images.map((image, index) => (
        <div
          key={index}
          className="background-image"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/${image})`,
            opacity: 0.1,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          }}
        />
      ))}
      <style jsx>{`
        .background-images {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: -1;
        }
        .background-image {
          animation: fadeInOut 30s infinite;
          animation-delay: ${(props) => props.index * 10}s;
        }
        @keyframes fadeInOut {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
};

export default BackgroundImages;
