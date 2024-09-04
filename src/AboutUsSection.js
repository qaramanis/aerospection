import React from "react";
import useFadeSection from "./useFadeSection";

const AboutUsSection = () => {
  const [sectionRef, isVisible] = useFadeSection();
  return (
    <section
      id="about"
      ref={sectionRef}
      className={`fade-section ${isVisible ? "is-visible" : ""} flex flex-col min-h-screen bg-gray-100 p-8`}
      style={{ alignContent: "center" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          style={{ fontSize: "48px", color: "#303642", marginBottom: "2rem" }}
        >
          About Aerospection
        </h2>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "2rem" }}>
          Aerospection is at the forefront of maritime technology,
          revolutionizing the way shipping companies manage their fleets and
          operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "1rem",
              }}
            >
              Innovation
            </h3>
            <p style={{ fontSize: "18px", color: "#303642" }}>
              We leverage cutting-edge drone technology and AI to provide
              unparalleled insights into maritime operations.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "1rem",
              }}
            >
              Efficiency
            </h3>
            <p style={{ fontSize: "18px", color: "#303642" }}>
              Our solutions streamline inspections and maintenance processes,
              saving time and reducing operational costs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3
              style={{
                fontSize: "24px",
                color: "#303642",
                marginBottom: "1rem",
              }}
            >
              Safety
            </h3>
            <p style={{ fontSize: "18px", color: "#303642" }}>
              By minimizing human involvement in dangerous inspection tasks, we
              significantly enhance workplace safety.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
