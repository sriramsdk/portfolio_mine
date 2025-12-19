import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <SectionTitle
          eyebrow="Stack"
          title="Skills"
          subtitle="Organized by what you’ll actually use on real projects."
        />

        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {SKILLS.map((g) => (
            <motion.div
              key={g.group}
              className="card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              style={{ padding: 18 }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "baseline" }}>
                <div style={{ fontWeight: 700 }}>{g.group}</div>
                <div style={{ color: "rgba(102,217,255,.9)", fontSize: 12, letterSpacing: ".08em" }}>
                  Core
                </div>
              </div>

              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
                {g.items.map((s) => (
                  <span key={s} className="pill">{s}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
