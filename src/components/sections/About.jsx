import { motion } from "framer-motion";

const STATS = [
    { value: "21+",  label: "Projects Completed" },
    { value: "3+",   label: "Years Experience"   },
    { value: "8",    label: "Kaggle Medals"       },
    { value: "50+",  label: "Datasets Analysed"  },
];

export default function About() {
    return (
        <section id="about" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
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
                    style={{ display: "flex", alignItems: "center", marginBottom: "4rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text">01 — About</span>
                </motion.div>

                {/* Two column layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "start" }}>

                    {/* Left — big statement */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 style={{
                            fontSize: "clamp(2rem, 4vw, 3.5rem)",
                            fontWeight: "800",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                            marginBottom: "2rem",
                        }}>
                            Turning Raw<br />
                            <span style={{ color: "#444444" }}>Data Into</span><br />
                            Meaningful<br />
                            <span style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}>
                Intelligence.
              </span>
                        </h2>

                        <a href="/cv.pdf" download style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "0.75rem 1.5rem",
                            background: "transparent", color: "#ffffff",
                            fontSize: "0.6875rem", fontWeight: "700",
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            textDecoration: "none", border: "1px solid #333333",
                            transition: "all 0.2s",
                        }}>
                            Download CV →
                        </a>
                    </motion.div>

                    {/* Right — bio + stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
                    >
                        {/* Bio */}
                        <div style={{ borderLeft: "1px solid #222222", paddingLeft: "1.5rem" }}>
                            <p style={{
                                color: "#aaaaaa", lineHeight: 1.8,
                                fontSize: "1rem", marginBottom: "1rem",
                            }}>
                                I'm a <span style={{ color: "#ffffff", fontWeight: "600" }}>Data Scientist & Web Designer</span> based
                                in Accra, Ghana. I specialise in machine learning, data visualisation,
                                and building full-stack applications that are both intelligent and elegant.
                            </p>
                            <p style={{ color: "#777777", lineHeight: 1.8, fontSize: "0.9375rem" }}>
                                When I'm not training models or designing systems, I'm competing on Kaggle,
                                contributing to open source, or exploring the latest AI research. ☕
                            </p>
                        </div>

                        {/* Info rows */}
                        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                            {[
                                { label: "Location",   value: "Accra, Ghana"          },
                                { label: "Education",  value: "BSc Computer Science"  },
                                { label: "Available",  value: "Freelance & Full-time" },
                                { label: "Languages",  value: "English, Twi"          },
                            ].map(({ label, value }) => (
                                <div key={label} style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "center", padding: "0.875rem 0",
                                    borderBottom: "1px solid #1a1a1a",
                                }}>
                                    <span className="label-text">{label}</span>
                                    <span style={{ fontSize: "0.9375rem", color: "#ffffff", fontWeight: "500" }}>{value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "#1a1a1a", border: "1px solid #1a1a1a" }}>
                            {STATS.map(({ value, label }) => (
                                <div key={label} style={{ background: "#0a0a0a", padding: "1.25rem" }}>
                                    <p style={{ fontSize: "1.75rem", fontWeight: "800", color: "#ffffff", letterSpacing: "-0.02em" }}>
                                        {value}
                                    </p>
                                    <p className="label-text" style={{ marginTop: "0.25rem" }}>{label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}