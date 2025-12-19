import React from "react";
import { useEffect, useState } from "react";

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: 18 }}>
      {eyebrow ? (
        <div style={{ color: "rgba(102,217,255,.95)", letterSpacing: ".14em", textTransform: "uppercase", fontSize: 12 }}>
          {eyebrow}
        </div>
      ) : null}
      <h2 style={{ margin: "10px 0 8px", fontSize: 30, lineHeight: 1.1 }}>
        {title}
      </h2>
      {subtitle ? (
        <p style={{ margin: 0, color: "rgba(255,255,255,.70)", maxWidth: 760 }}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
