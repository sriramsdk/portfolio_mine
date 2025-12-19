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
          subtitle="A recruiter-friendly snapshot of your strengths and what you deliver."
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
              <h3 style={{ margin: "0 0 8px" }}>What recruiters like</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                <li>Production-focused: clean code, performance, maintainability.</li>
                <li>Strong PHP ecosystems: Laravel, CodeIgniter, Drupal, WordPress.</li>
                <li>Modern full-stack: MERN + API integrations + databases.</li>
              </ul>
            </div>
            <div>
              <h3 style={{ margin: "0 0 8px" }}>What you can add</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                <li>Key domain: ecommerce, CRM, ERP, booking, CMS, etc.</li>
                <li>One-line achievements with numbers (speed, users, revenue, automation).</li>
                <li>Any leadership: mentoring, ownership, reviews.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
