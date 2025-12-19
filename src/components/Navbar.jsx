import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PROFILE } from "../data/content";

const linkStyle = {
  textDecoration: "none",
  color: "rgba(255,255,255,.78)",
  fontSize: 14
};

export default function Navbar() {
  const links = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(5,7,15,.55)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(102,217,255,.12)"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0" }}>
        <a href="#top" style={{ textDecoration: "none", color: "white", fontWeight: 650, letterSpacing: ".02em" }}>
          {PROFILE.name}
          <span style={{ color: "rgba(102,217,255,.9)" }}></span>
        </a>

        <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={linkStyle}>
              <motion.span whileHover={{ y: -2, color: "rgba(102,217,255,.95)" }} transition={{ duration: 0.15 }}>
                {l.label}
              </motion.span>
            </a>
          ))}
          <a className="btn" href={`mailto:${PROFILE.email}`} style={{ padding: "10px 12px" }}>
            Hire Me
          </a>
        </nav>
      </div>
    </div>
  );
}
