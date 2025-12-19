import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { EXPERIENCE } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Career"
          title="Experience"
          subtitle="Keep it outcome-driven: what you shipped, what improved, how you collaborated."
        />

        <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
          {EXPERIENCE.map((e) => (
            <motion.div
              key={e.title + e.company}
              className="card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              style={{ padding: 18 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontWeight: 750 }}>{e.title}</div>
                  <div style={{ color: "rgba(255,255,255,.72)", marginTop: 4 }}>{e.company}</div>
                </div>
                <span className="pill">{e.period}</span>
              </div>

              <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
