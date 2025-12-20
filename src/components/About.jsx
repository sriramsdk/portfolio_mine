import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Overview"
          title="About"
          subtitle="A overview about my strengths"
        />

        <motion.div
          className="card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          style={{ padding: 18 }}
        >
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <h3 style={{ margin: "0 0 8px" }}>How I deliver value</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                <li>Production-focused: Clean code, Performance, Unit Testing, Maintainability.</li>
                <li>Strong PHP ecosystems: Laravel, CodeIgniter, Drupal, WordPress.</li>
                <li>Modern full-stack: MERN + API integrations + databases.</li>
                <li>Mobile App development: Flutter</li>
              </ul>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px" }}>Where I fit in your team</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                <li>Key domain: Ecommerce, CRM, ERP, booking, CMS, etc.</li>
                <li>Covering Frontend, Backend and Mobile App</li>
                <li>Leadership: Mentoring, Code and Project reviews, Tech and Business Analysis, Coordination.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
