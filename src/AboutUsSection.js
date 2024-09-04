import React, { useEffect, useRef, useState } from "react";

const AboutUsSection = () => {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`fade-section ${isVisible ? "is-visible" : ""} flex flex-col min-h-screen p-8`}
      style={{
        alignContent: "start",
        marginLeft: "50%",
        marginTop: "10rem",
      }}
    >
      <div
        className="max-w-4xl "
        style={{ textAlign: "end", MozPaddingEnd: "10%" }}
      >
        <h2 style={{ fontSize: "48px", color: "#303642" }}>
          About Aerospection
        </h2>
        <p style={{ fontSize: "24px", color: "#303642" }}>
          Aerospection is a cutting-edge company that seamlessly integrates
        </p>
        <p style={{ fontSize: "24px", color: "#303642" }}>
          advanced technology with the critical needs of maritime inspections
          and services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-right">
            {" "}
            {/* Added text-right class */}
            <h3
              style={{
                fontSize: "40px",
                color: "#303642",
                marginBottom: "1rem",
              }}
            >
              Innovation
            </h3>
            <p
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "2rem",
              }}
            >
              Our innovative approach leverages the latest in drone technology,
              AI-driven analytics
            </p>
            <p
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "2rem",
              }}
            >
              and remote inspection solutions to revolutionize assets
            </p>
            <p
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "2rem",
              }}
            >
              the way maritime are monitored and managed
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-right">
            {" "}
            <h3
              style={{
                fontSize: "40px",
                color: "#303642",
                marginBottom: "1rem",
              }}
            >
              Efficiency
            </h3>
            <p style={{ fontSize: "24px", color: "#303642" }}>
              We are not just a service provider; we are your partner
            </p>
            <p style={{ fontSize: "24px", color: "#303642" }}>
              in navigating the future of maritime operations.
            </p>
            <p style={{ fontSize: "24px", color: "#303642" }}>
              Aerospection brings together the best of technology
            </p>
            <p style={{ fontSize: "24px", color: "#303642" }}>
              and industry expertise to deliver unmatched efficiency,
            </p>
            <p style={{ fontSize: "24px", color: "#303642" }}>
              safety, and cost savings, all while ensuring your fleet stays at
              the forefront of innovation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
