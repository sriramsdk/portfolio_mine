import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { PROJECTS } from "../data/content";

function LinkButton({ href, children }) {
  if (!href) return null;
  return (
    <a className="btn secondary" href={href} target="_blank" rel="noreferrer" style={{ padding: "10px 12px" }}>
      {children}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Work"
          title="Projects"
          subtitle="I listed down my personal projects excluded my official office projects"
        />

        <div className="grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          {PROJECTS.map((p) => (
            <motion.article
              key={p.title}
              className="card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -6 }}
              style={{ padding: 18, position: "relative", overflow: "hidden" }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -80,
                  background:
                    "radial-gradient(300px 200px at 20% 20%, rgba(102,217,255,.16), transparent 60%)," +
                    "radial-gradient(260px 180px at 85% 25%, rgba(30,79,255,.16), transparent 60%)",
                  pointerEvents: "none"
                }}
              />

              <div style={{ position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "baseline" }}>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{p.title}</h3>
                  <span className="pill">{p.subtitle}</span>
                </div>

                <p style={{ color: "rgba(255,255,255,.74)", margin: "10px 0 12px" }}>
                  {p.description}
                </p>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {p.stack.map((s) => (
                    <span key={s} className="pill">{s}</span>
                  ))}
                </div>

                {p.impact?.length ? (
                  <ul style={{ margin: "12px 0 0", paddingLeft: 18, color: "rgba(255,255,255,.78)" }}>
                    {p.impact.map((x) => <li key={x}>{x}</li>)}
                  </ul>
                ) : null}

                <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
                  <LinkButton href={p.links.live}>Live</LinkButton>
                  <LinkButton href={p.links.github}>GitHub</LinkButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
