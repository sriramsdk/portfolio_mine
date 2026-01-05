import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { PROFILE } from "../data/content";

export default function Contact() {

  const [form, setForm] = useState({
    name : "",
    email : "",
    subject : "",
    message : ""
  });

  const [status, setStatus] = useState({ loading : false, error : "", ok : false });

  function onChange(e){
    setForm((p) => ({ ...p, [e.target.name] : e.target.value }) )
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus({ loading : true, error : "", ok : false });

    const user = "Sriram";
    const pass = "Sriramdhanush";

    const auth = "Basic "+ btoa(`${user}:${pass}`);

    try {
      
      const res = await fetch(' https://my-portfolio-backend-kigi.onrender.com/submit',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
          Authorization : auth
        },
        body : JSON.stringify(form)
      });

      if(res.status == 500 || res.status == 400){
        console.log(res.message);
        throw new Error(`Request Failed : ${res.message}`);
      }
      console.log(res.message);
      setStatus({ loading : false, error : "", ok : true });
      setForm({ name : "", email : "", subject : "", message : "" });

    } catch (error) {
      console.log(error.message);
      setStatus({ loading: false, error: error.message || "Failed", ok: false });
    }

  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Let’s talk"
          title="Contact"
          subtitle="Reach me out or send a message"
        />

        <div className="grid" style={{ gridTemplateColumns: "1fr 1fr", alignItems: "start" }}>
          <motion.div
            className="card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            style={{ padding: 18 }}
          >
            <h3 style={{ marginTop: 0 }}>Reach out</h3>
            <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,.74)" }}>
              Email: <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </p>
            <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,.74)" }}>
              Phone: <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
            </p>
            <p style={{ margin: "6px 0 0", color: "rgba(255,255,255,.74)" }}>
              LinkedIn: <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">{PROFILE.socials.linkedin}</a>
            </p>

            <div style={{ display: "flex", gap: 10, marginTop: 14, flexWrap: "wrap" }}>
              <a className="btn" href={PROFILE.socials.github} target="_blank" rel="noreferrer">GitHub</a>
              <a className="btn secondary" href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </motion.div>

          <motion.form
            className="card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            style={{ padding: 18 }}
            // name="contact"
            // method="POST"
            // data-netlify="true"
            // netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p style={{ display: "none" }}>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>Name</label>
                <input name="name" required placeholder="Your name" value={form.name} onChange={onChange} />
              </div>
              <div>
                <label style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>Email</label>
                <input name="email" type="email" required placeholder="you@email.com" value={form.email} onChange={onChange} />
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>Subject</label>
              <input name="subject" required placeholder="Job opportunity / Project / Collaboration" value={form.subject} onChange={onChange} />
            </div>

            <div style={{ marginTop: 12 }}>
              <label style={{ fontSize: 13, color: "rgba(255,255,255,.72)" }}>Message</label>
              <textarea name="message" required placeholder="Write your message..." value={form.message} onChange={onChange} />
            </div>

            <div style={{ marginTop: 12, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
              <button className="btn" type="submit" style={{ cursor: "pointer" }}>
                Send Message
              </button>
              <span style={{ color: "rgba(255,255,255,.6)", fontSize: 13 }}>
                Replies usually within 24 hours
              </span>
               {status.ok && (
                  <span style={{ color: "rgba(120,255,120,.9)", fontSize: 13 }}>Sent successfully.</span>
                )}
                {status.error && (
                  <span style={{ color: "rgba(255,120,120,.9)", fontSize: 13 }}>{status.error}</span>
                )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
