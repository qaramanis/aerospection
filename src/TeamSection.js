import React, { useEffect, useRef, useState } from "react";

const TeamSection = () => {
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

  const sectionStyle = {
    minHeight: "65vh",
    padding: isMobile ? "2rem 1rem" : "8rem 2rem",
    margin: isMobile ? "0 0" : "3rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: isMobile ? "center" : "flex-start",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 1s ease-in-out",
  };

  const contentStyle = {
    maxWidth: isMobile ? "100%" : "80%",
    margin: isMobile ? "0" : "3rem auto 3rem 10%",
    textAlign: isMobile ? "center" : "left",
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

  const teamGridStyle = {
    display: "grid",
    gridTemplateColumns: isMobile
      ? "1fr"
      : "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "2rem",
  };

  const teamMemberStyle = {
    backgroundColor: "#0fb68a",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const memberNameStyle = {
    fontSize: isMobile ? "1.25rem" : "1.5rem",
    color: "white",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  };

  const memberRoleStyle = {
    fontSize: isMobile ? "1rem" : "1.25rem",
    color: "white",
    marginBottom: "1rem",
  };

  const memberBioStyle = {
    fontSize: isMobile ? "0.9rem" : "1rem",
    color: "white",
  };

  return (
    <section id="team" ref={sectionRef} style={sectionStyle}>
      <div style={contentStyle}>
        <h2 style={titleStyle}>Our Team</h2>
        <p style={subtitleStyle}>
          Meet the experts behind Aerospection's revolutionary maritime
          technology.
        </p>
        <div style={teamGridStyle}>
          {teamMembers.map((member, index) => (
            <div key={index} style={teamMemberStyle}>
              <h3 style={memberNameStyle}>{member.name}</h3>
              <p style={memberRoleStyle}>{member.role}</p>
              <p style={memberBioStyle}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
