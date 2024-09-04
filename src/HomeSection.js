import React, { useEffect, useRef, useState } from "react";
import ContactButton from "./ContactButton";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

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
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "80%",
    marginTop: isMobile ? "0%" : "10%",
    margin: isMobile ? "0" : "0 auto 0 10%",
    textAlign: isMobile ? "center" : "left",
  };

  const titleStyle = {
    fontSize: isMobile ? "2rem" : "3rem",
    color: "#303642",
    marginBottom: "1rem",
  };

  const subtitleStyle = {
    fontSize: isMobile ? "1rem" : "1.5rem",
    color: "#303642",
    marginBottom: "2rem",
  };

  const buttonContainerStyle = {
    marginTop: "2rem",
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
    </section>
  );
};

export default HomeSection;
