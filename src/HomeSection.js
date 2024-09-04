import React, { useEffect, useRef, useState } from "react";
import ContactButton from "./ContactButton";
import useResponsiveStyles from "./useResponsiveStyles";

const HomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sectionStyle = useResponsiveStyles(
    {
      minHeight: "100vh",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#def9c4",
      marginTop: "-1px",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
    },
    {
      minHeight: "100vh",
      padding: "1rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      backgroundColor: "#def9c4",
      marginTop: "-1px",
      opacity: isVisible ? 1 : 0,
      transition: "opacity 0.5s ease-in-out",
    },
  );

  const contentStyle = useResponsiveStyles(
    {
      maxWidth: "100%",
      marginLeft: "5%",
      marginRight: "5%",
      textAlign: "left",
    },
    {
      maxWidth: "32rem",
      marginLeft: "10%",
      textAlign: "left",
    },
  );

  const h1Style = useResponsiveStyles(
    {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#303642",
    },
    {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#303642",
    },
  );

  const h3Style = useResponsiveStyles(
    {
      fontSize: "1rem",
      marginBottom: "1rem",
      color: "#303642",
    },
    {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      color: "#303642",
    },
  );

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
        <div style={{ marginTop: "2rem" }}>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
