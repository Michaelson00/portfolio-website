import { motion } from "framer-motion";
import { timeline } from "../../data/experience";
import { GraduationCapIcon, ScrollIcon, BriefcaseIcon, BrainIcon } from "../ui/Icons";

const typeStyles = {
    education:     { color: "var(--text-primary)", bg: "var(--bg-secondary)" },
    certification: { color: "var(--text-secondary)", bg: "var(--bg-tertiary)" },
    experience:    { color: "var(--text-primary)", bg: "var(--bg-secondary)" },
};

// Helper to get icon based on type
const getIcon = (type) => {
    switch (type) {
        case "education": return <GraduationCapIcon />;
        case "certification": return <ScrollIcon />;
        case "experience": return <BriefcaseIcon />;
        default: return <BrainIcon />;
    }
};

export default function Experience() {
    return (
        <section id="experience" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
            
            {/* Background Image: Connected Nodes / Networking */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop)`,
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
                    <span className="label-text">05 — Experience & Education</span>
                </motion.div>

                {/* Header */}
                <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-end", marginBottom: "3rem",
                    paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)",
                }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: "800", lineHeight: 1.05,
                            letterSpacing: "-0.02em", textTransform: "uppercase",
                            color: "var(--text-primary)"
                        }}
                    >
                        Journey &<br />
                        <span style={{ color: "var(--text-secondary)" }}>Background.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            color: "var(--text-muted)", fontSize: "0.8125rem",
                            maxWidth: "18rem", textAlign: "right", lineHeight: 1.7,
                        }}
                    >
                        My path through academia, certifications, and real-world industry experience.
                    </motion.p>
                </div>

                {/* Two column layout */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>

                    {/* Left column */}
                    <div>
                        {timeline.slice(0, 2).map(({ type, year, title, organisation, description }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{
                                    borderBottom: "1px solid var(--border-color)",
                                    paddingBottom: "2rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                {/* Top row */}
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "flex-start", marginBottom: "1rem",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div style={{
                                            width: "2.25rem", height: "2.25rem",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "1rem", color: typeStyles[type].color,
                                            border: "1px solid var(--border-color)",
                                            background: typeStyles[type].bg,
                                        }}>
                                            {getIcon(type)}
                                        </div>
                                        <span style={{
                                            fontSize: "0.6rem", fontWeight: "700",
                                            letterSpacing: "0.15em", textTransform: "uppercase",
                                            color: "var(--text-muted)", border: "1px solid var(--border-color)",
                                            padding: "0.2rem 0.5rem",
                                        }}>
                      {type}
                    </span>
                                    </div>
                                    <span style={{
                                        fontSize: "0.6875rem", fontFamily: "monospace",
                                        color: "var(--text-secondary)",
                                    }}>
                    {year}
                  </span>
                                </div>

                                {/* Content */}
                                <h3 style={{
                                    fontSize: "1rem", fontWeight: "700",
                                    color: "var(--text-primary)", marginBottom: "0.375rem",
                                    letterSpacing: "-0.01em",
                                }}>
                                    {title}
                                </h3
>
                                <p style={{
                                    fontSize: "0.8125rem", color: "var(--text-muted)",
                                    fontWeight: "600", marginBottom: "0.75rem",
                                    letterSpacing: "0.05em",
                                }}>
                                    {organisation}
                                </p>
                                <p style={{
                                    fontSize: "0.9rem", color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                }}>
                                    {description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right column */}
                    <div>
                        {timeline.slice(2).map(({ type, year, title, organisation, description }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 + 0.15 }}
                                style={{
                                    borderBottom: "1px solid var(--border-color)",
                                    paddingBottom: "2rem",
                                    marginBottom: "2rem",
                                }}
                            >
                                {/* Top row */}
                                <div style={{
                                    display: "flex", justifyContent: "space-between",
                                    alignItems: "flex-start", marginBottom: "1rem",
                                }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                                        <div style={{
                                            width: "2.25rem", height: "2.25rem",
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                            fontSize: "1rem", color: typeStyles[type].color,
                                            border: "1px solid var(--border-color)",
                                            background: typeStyles[type].bg,
                                        }}>
                                            {getIcon(type)}
                                        </div>
                                        <span style={{
                                            fontSize: "0.6rem", fontWeight: "700",
                                            letterSpacing: "0.15em", textTransform: "uppercase",
                                            color: "var(--text-muted)", border: "1px solid var(--border-color)",
                                            padding: "0.2rem 0.5rem",
                                        }}>
                      {type}
                    </span>
                                    </div>
                                    <span style={{
                                        fontSize: "0.6875rem", fontFamily: "monospace",
                                        color: "var(--text-secondary)",
                                    }}>
                    {year}
                  </span>
                                </div>

                                {/* Content */}
                                <h3 style={{
                                    fontSize: "1rem", fontWeight: "700",
                                    color: "var(--text-primary)", marginBottom: "0.375rem",
                                    letterSpacing: "-0.01em",
                                }}>
                                    {title}
                                </h3>
                                <p style={{
                                    fontSize: "0.8125rem", color: "var(--text-muted)",
                                    fontWeight: "600", marginBottom: "0.75rem",
                                    letterSpacing: "0.05em",
                                }}>
                                    {organisation}
                                </p>
                                <p style={{
                                    fontSize: "0.9rem", color: "var(--text-secondary)",
                                    lineHeight: 1.7,
                                }}>
                                    {description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}