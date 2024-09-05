import React, { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const poster = "/images/drone.png";

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
    alignItems: isMobile ? "center" : "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "80%",
    margin: isMobile ? "0" : "0 10% 0 auto",
    textAlign: isMobile ? "center" : "center",
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

  const featuresStyle = {
    display: "grid",
    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    gap: "2rem",
  };

  const featureStyle = {
    backgroundColor: "#0fb68a",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const featureTitleStyle = {
    fontSize: isMobile ? "1.25rem" : "1.5rem",
    color: "white",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const featureDescriptionStyle = {
    fontSize: isMobile ? "0.9rem" : "1rem",
    color: "white",
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
    <section id="about" ref={sectionRef} style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>About Aerospection</h2>
        <p style={subtitleStyle}>
          Aerospection is a cutting-edge company that seamlessly integrates
          advanced technology with the critical needs of maritime inspections
          and services
        </p>
        <div style={featuresStyle}>
          <div style={featureStyle}>
            <h3 style={featureTitleStyle}>Innovation</h3>
            <p style={featureDescriptionStyle}>
              Our innovative approach leverages the latest in drone technology,
              AI-driven analytics and remote inspection solutions to
              revolutionize the way maritime assets are monitored and managed
            </p>
          </div>
          <div style={featureStyle}>
            <h3 style={featureTitleStyle}>Efficiency</h3>
            <p style={featureDescriptionStyle}>
              We are not just a service provider; we are your partner in
              navigating the future of maritime operations. Aerospection brings
              together the best of technology and industry expertise to deliver
              unmatched efficiency, safety, and cost savings, all while ensuring
              your fleet stays at the forefront of innovation
            </p>
          </div>
        </div>
        <div style={imageContainerStyle}>
          <img
            src={poster}
            alt="Aerospection Maritime Operations"
            style={imageStyle}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
