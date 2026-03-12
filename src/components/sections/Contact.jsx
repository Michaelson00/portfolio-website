import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, KaggleIcon, MailIcon } from "../ui/Icons";

const SOCIALS = [
    { href: "mailto:you@email.com",        icon: <MailIcon />,     label: "Email",    handle: "you@email.com"       },
    { href: "https://github.com/username", icon: <GithubIcon />,   label: "GitHub",   handle: "github.com/username" },
    { href: "https://linkedin.com/in/you", icon: <LinkedInIcon />, label: "LinkedIn", handle: "linkedin.com/in/you" },
    { href: "https://kaggle.com/username", icon: <KaggleIcon />,   label: "Kaggle",   handle: "kaggle.com/username" },
];

export default function Contact() {
    const [form,      setForm]      = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading,   setLoading]   = useState(false);
    const [isMobile,  setIsMobile]  = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
    };

    const labelStyle = {
        fontSize: "0.75rem",
        fontWeight: "700",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--text-secondary)", 
        display: "block",
        marginBottom: "0.25rem",
    };

    return (
        <section id="contact" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
            
            {/* Background Image: Global Digital Earth / Communication */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            />

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
                backgroundSize: "80px 80px",
            }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text">06 — Contact</span>
                </motion.div>

                {/* Big CTA heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 5rem)",
                        fontWeight: "800", lineHeight: 0.95,
                        letterSpacing: "-0.03em", textTransform: "uppercase",
                        marginBottom: "4rem",
                        color: "var(--text-primary)"
                    }}
                >
                    Let's Build<br />
                    <span style={{ color: "var(--text-secondary)" }}>Something</span><br />
                    <span style={{ WebkitTextStroke: "1px var(--text-primary)", color: "transparent" }}>
            Together.
          </span>
                </motion.h2>

                {/* Two column layout */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                    gap: "6rem",
                }}>

                    {/* Left — socials */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ display: "flex", flexDirection: "column", gap: "0" }}
                    >
                        <p style={{
                            color: "var(--text-secondary)", fontSize: "0.9375rem",
                            lineHeight: 1.8, marginBottom: "2.5rem",
                            borderLeft: "1px solid var(--border-color)", paddingLeft: "1.25rem",
                        }}>
                            Open to new opportunities, collaborations, and interesting conversations.
                            I respond within 24 hours.
                        </p>

                        {SOCIALS.map(({ href, icon, label, handle }, i) => (
                            <motion.a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "space-between",
                                    padding: "1.125rem 0",
                                    borderBottom: "1px solid var(--border-color)",
                                    textDecoration: "none",
                                    color: "var(--text-secondary)",
                                    transition: "color 0.2s",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
                                onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                            >
                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div style={{
                                        width: "2rem", height: "2rem",
                                        border: "1px solid var(--border-color)",
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        color: "var(--text-primary)"
                                    }}>
                                        {icon}
                                    </div>
                                    <div>
                                        <p style={{ fontSize: "0.9rem", fontWeight: "700", color: "inherit", letterSpacing: "0.05em" }}>
                                            {label}
                                        </p>
                                        <p style={{ fontSize: "0.8rem", fontFamily: "monospace", color: "var(--text-muted)" }}>
                                            {handle}
                                        </p>
                                    </div>
                                </div>
                                <span style={{ fontSize: "1rem" }}>→</span>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        style={{
                            border: "1px solid var(--border-color)",
                            padding: "2rem",
                            background: "var(--bg-secondary)"
                        }}
                    >
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{
                                    height: "100%", display: "flex",
                                    flexDirection: "column", justifyContent: "center",
                                    textAlign: "center",
                                    color: "var(--text-primary)"
                                }}
                            >
                                <p style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</p>
                                <h3 style={{
                                    fontSize: "1.25rem", fontWeight: "800",
                                    textTransform: "uppercase", letterSpacing: "-0.01em",
                                    marginBottom: "0.5rem",
                                    color: "var(--text-primary)" 
                                }}>
                                    Message Sent.
                                </h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                                    I'll get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    style={{
                                        marginTop: "1.5rem", background: "none", border: "none",
                                        color: "var(--text-muted)", fontSize: "0.8rem", cursor: "pointer",
                                        letterSpacing: "0.1em", textTransform: "uppercase",
                                        fontFamily: "inherit",
                                    }}
                                >
                                    Send another →
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                                    <div>
                                        <label style={labelStyle}>Name</label>
                                        <input
                                            type="text" required placeholder="John Doe"
                                            style={{
                                                width: "100%",
                                                background: "transparent",
                                                border: "none",
                                                borderBottom: "1px solid var(--border-color)",
                                                padding: "0.875rem 0",
                                                color: "var(--text-primary)",
                                                fontSize: "0.875rem",
                                                outline: "none",
                                                transition: "border-color 0.2s",
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                            }}
                                            value={form.name}
                                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                                            onFocus={e => e.target.style.borderBottomColor = "var(--text-primary)"}
                                            onBlur={e  => e.target.style.borderBottomColor = "var(--border-color)"}
                                        />
                                    </div>
                                    <div>
                                        <label style={labelStyle}>Email</label>
                                        <input
                                            type="email" required placeholder="john@example.com"
                                            style={{
                                                width: "100%",
                                                background: "transparent",
                                                border: "none",
                                                borderBottom: "1px solid var(--border-color)",
                                                padding: "0.875rem 0",
                                                color: "var(--text-primary)",
                                                fontSize: "0.875rem",
                                                outline: "none",
                                                transition: "border-color 0.2s",
                                                boxSizing: "border-box",
                                                fontFamily: "inherit",
                                            }}
                                            value={form.email}
                                            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                            onFocus={e => e.target.style.borderBottomColor = "var(--text-primary)"}
                                            onBlur={e  => e.target.style.borderBottomColor = "var(--border-color)"}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label style={labelStyle}>Message</label>
                                    <textarea
                                        required rows={5}
                                        placeholder="Tell me about your project..."
                                        style={{
                                            width: "100%",
                                            background: "transparent",
                                            border: "none",
                                            borderBottom: "1px solid var(--border-color)",
                                            padding: "0.875rem 0",
                                            color: "var(--text-primary)",
                                            fontSize: "0.875rem",
                                            outline: "none",
                                            transition: "border-color 0.2s",
                                            boxSizing: "border-box",
                                            fontFamily: "inherit",
                                            resize: "none"
                                        }}
                                        value={form.message}
                                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                                        onFocus={e => e.target.style.borderBottomColor = "var(--text-primary)"}
                                        onBlur={e  => e.target.style.borderBottomColor = "var(--border-color)"}
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    whileTap={{ scale: 0.98 }}
                                    disabled={loading}
                                    style={{
                                        padding: "1rem 2rem",
                                        background: "var(--text-primary)", color: "var(--bg-primary)",
                                        fontSize: "0.75rem", fontWeight: "700",
                                        letterSpacing: "0.2em", textTransform: "uppercase",
                                        border: "1px solid var(--text-primary)", cursor: loading ? "not-allowed" : "pointer",
                                        opacity: loading ? 0.6 : 1, transition: "all 0.2s",
                                        alignSelf: "flex-start", fontFamily: "inherit",
                                    }}
                                >
                                    {loading ? "Sending..." : "Send Message →"}
                                </motion.button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}