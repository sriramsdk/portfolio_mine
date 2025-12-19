import React from "react";
import { useEffect, useState } from "react";
import { PROFILE } from "../data/content";

export default function Footer() {
  return (
    <footer style={{ padding: "28px 0 40px" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap", color: "rgba(255,255,255,.62)" }}>
        <div>© {new Date().getFullYear()} {PROFILE.name}</div>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
