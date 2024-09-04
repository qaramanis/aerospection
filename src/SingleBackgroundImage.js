import React from "react";

const SingleBackgroundImage = () => {
  const imagePath = `${process.env.PUBLIC_URL}/images/pic1.jpg`;

  return (
    <div
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3,
        zIndex: -1,
      }}
    />
  );
};

export default SingleBackgroundImage;
