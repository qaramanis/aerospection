import React, { useEffect, useRef, useState } from "react";
import ContactButton from "./ContactButton";

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

  return (
    <section
      id="home"
      ref={sectionRef}
      className={`fade-section ${isVisible ? "is-visible" : ""} min-h-screen  p-4`}
      style={{
        alignContent: "start",
        marginRight: "50%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div
        className="max-w-2xl"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "start",
          padding: "10%",
          marginTop: "15%",
        }}
      >
        <h1 style={{ fontSize: "65px", color: "#303642" }}>
          The Aerospection Edge
        </h1>
        <h3 style={{ fontSize: "30px", color: "#303642" }}>
          Let Aerospection take your maritime operations to new heights.
        </h3>
        <h3 style={{ fontSize: "30px", color: "#303642" }}>
          Your fleet, our technology - together, we sail towards a smarter,
          safer and more sustainable future.
        </h3>
        <div className="space-y-4 mt-8">
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
