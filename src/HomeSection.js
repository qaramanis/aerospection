import React, { useEffect, useRef, useState } from "react";
import ContactButton from "./ContactButton";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const poster = "/images/poster-dark.png";

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionStyle = {
    minHeight: "100vh",
    padding: isMobile ? "2rem 1rem" : "8rem 2rem",
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "flex-start",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "80%",
    margin: isMobile ? "3rem 0 0 0" : "0 auto 0 10%",
    textAlign: "left",
    alignSelf: "start",
  };

  const titleStyle = {
    fontSize: isMobile ? "2rem" : "3rem",
    color: "white",
    marginBottom: "1rem",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.5rem",
    color: "white",
    marginBottom: "2rem",
  };

  const buttonContainerStyle = {
    marginTop: "2rem",
  };

  const imageContainerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "4rem",
  };

  const imageStyle = {
    maxWidth: "80%",
    height: "auto",
    border: "4px solid white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <section id="home" ref={sectionRef} style={sectionStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>The Aerospection Edge</h1>
        <h3 style={subtitleStyle}>
          Let Aerospection take your maritime operations to new heights.
        </h3>
        <h3 style={subtitleStyle}>
          Your fleet, our technology - together, we sail towards a smarter,
          safer and more sustainable future.
        </h3>
        <div style={buttonContainerStyle}>
          <ContactButton />
        </div>
      </div>
      <div style={imageContainerStyle}>
        <img
          src={poster}
          alt="Aerospection Maritime Operations"
          style={imageStyle}
        />
      </div>
    </section>
  );
};

export default HomeSection;
