import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { PROFILE, INTRO } from "../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 }
};

export default function Hero() {
  return (
    <section id="top" className="section" style={{ paddingTop: 64 }}>
      <div className="container" style={{ display: "grid", gap: 22, gridTemplateColumns: "1.3fr .7fr", alignItems: "center" }}>
        <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ duration: 0.7 }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
            <span className="pill">{PROFILE.experience}</span>
            <span className="pill">{PROFILE.role}</span>
            <span className="pill">{PROFILE.location}</span>
          </div>

          <h1 style={{ margin: "14px 0 10px", fontSize: 46, lineHeight: 1.04 }}>
            {INTRO.headline}
          </h1>

          <p style={{ margin: 0, color: "rgba(255,255,255,.72)", fontSize: 16, maxWidth: 760 }}>
            {INTRO.summary}
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 18, flexWrap: "wrap" }}>
            <a className="btn" href="#projects">View Projects</a>
            <a className="btn secondary" href="#contact">Contact</a>
            <a className="btn secondary" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -1.2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="card"
          style={{ padding: 14, justifySelf: "end" }}
        >
          <div
            style={{
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(102,217,255,.18)",
              background: "rgba(255,255,255,.03)"
            }}
          >
            <img
              src={profile}
              alt="Profile"
              style={{ width: 280, height: 320, objectFit: "cover" }}
            />
          </div>

          <div style={{ marginTop: 12, display: "grid", gap: 8 }}>
            <div style={{ color: "rgba(102,217,255,.95)", fontWeight: 650 }}>{PROFILE.name}</div>
            <div style={{ color: "rgba(255,255,255,.72)", fontSize: 14 }}>{PROFILE.role}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span className="pill">PHP</span>
              <span className="pill">MERN</span>
              <span className="pill">Python</span>
              <span className="pill">Flutter</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
