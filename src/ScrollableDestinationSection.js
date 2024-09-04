import React, { useEffect, useRef, useState } from "react";

const ScrollableDestinationSection = () => {
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

  const destinations = [
    { name: "Kalamaki" },
    { name: "Kissos" },
    { name: "Lagoudi" },
    { name: "Nireas" },
  ];

  const sectionStyle = {
    backgroundColor: "#303642",
    minHeight: "75vh",
    display: "flex",
    alignItems: "flex-start",
    marginBottom: "-100px",
    justifyContent: "center",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease",
  };

  const containerStyle = {
    width: "100%",
    maxWidth: "1500px",
    padding: "0 20px",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: "2rem",
  };

  const scrollContainerStyle = {
    overflowX: "auto",
    whiteSpace: "nowrap",
    padding: "20px 0",
  };

  const cardStyle = {
    display: "inline-block",
    width: "300px",
    height: "500px",
    marginRight: "20px",
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px",
  };

  const textStyle = {
    color: "white",
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  };

  return (
    <section ref={sectionRef} style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Meet our Team Members</h2>
        <div style={scrollContainerStyle}>
          {destinations.map((dest, index) => (
            <div key={index} style={cardStyle}>
              <img src={dest.image} alt={dest.name} style={imageStyle} />
              <div style={overlayStyle}>
                <h3 style={textStyle}>{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollableDestinationSection;
