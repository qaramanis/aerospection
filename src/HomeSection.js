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
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
    marginRight: isMobile ? "0" : "50%",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "32rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    padding: isMobile ? "5%" : "10%",
    marginTop: isMobile ? "10%" : "15%",
  };

  const h1Style = {
    fontSize: isMobile ? "40px" : "65px",
    color: "#303642",
    marginBottom: "1rem",
  };

  const h3Style = {
    fontSize: isMobile ? "20px" : "30px",
    color: "#303642",
    marginBottom: "1rem",
  };

  const buttonContainerStyle = {
    marginTop: "2rem",
  };

  return (
    <section id="home" ref={sectionRef} style={sectionStyle}>
      <div style={contentStyle}>
        <h1 style={h1Style}>The Aerospection Edge</h1>
        <h3 style={h3Style}>
          Let Aerospection take your maritime operations to new heights.
        </h3>
        <h3 style={h3Style}>
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
