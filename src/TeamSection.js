import React, { useEffect, useRef, useState } from "react";

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: "G. Matthaiou",
      role: "Dipl. Civil Engineer",
      bio: "Passive Innovator and drone enthusiast",
    },
    {
      name: "I. Matthaiou",
      role: "Civil Engineering Student",
      bio: "",
    },
    {
      name: "A. Gairos",
      role: "Civil Engineering Student",
      bio: "Driven entrepreneur and creative strategist, a real visionary thinker",
    },
    {
      name: "A. Troullos",
      role: "Chemical Engineering Student",
      bio: "Hands-On Spirit and a great problem solver, entrepreneur",
    },
  ];

  return (
    <section
      id="team"
      ref={sectionRef}
      className={`fade-section ${isVisible ? "is-visible" : ""} flex flex-col min-h-screen bg-blue-100 p-8`}
      style={{
        alignContent: "center",
        marginRight: "50%",
        paddingTop: "15rem",
        paddingBottom: "0rem",
      }}
    >
      <div
        className="max-w-4xl mx-auto"
        style={{
          textAlign: "start",
          padding: "10%",
        }}
      >
        <h2
          style={{ fontSize: "48px", color: "#303642", marginBottom: "2rem" }}
        >
          Our Team
        </h2>
        <p style={{ fontSize: "24px", color: "#303642", marginBottom: "3rem" }}>
          Meet the experts behind Aerospection's revolutionary maritime
          technology.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              style={{ paddingTop: "20px" }}
            >
              <div className="mb-2 whitespace-nowrap overflow-hidden text-ellipsis">
                <span
                  style={{
                    fontSize: "30px",
                    color: "#303642",
                    fontWeight: "bold",
                  }}
                >
                  {member.name}
                </span>
                <span
                  style={{
                    fontSize: "35px",
                    color: "#303642",
                    margin: "0 0.5rem",
                  }}
                >
                  -
                </span>
                <span
                  style={{
                    fontSize: "25px",
                    color: "#303642",
                    marginRight: "0.5rem",
                  }}
                >
                  {member.role}
                </span>
              </div>
              <p style={{ fontSize: "22px", color: "#303642" }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
