import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { skillCategories } from "../../data/skills";
import { CodeIcon, SettingsIcon, ChartIcon, WrenchIcon } from "../ui/Icons";

function SkillBar({ name, level, delay }) {
    const { ref, inView } = useScrollAnimation();
    return (
        <div ref={ref} style={{ marginBottom: "1.25rem" }}>
            <div style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", marginBottom: "0.5rem",
            }}>
                <span style={{ fontSize: "0.9rem", color: "var(--text-secondary)", fontWeight: "500" }}>{name}</span>
                <span style={{ fontSize: "0.8rem", fontFamily: "monospace", color: "var(--text-muted)" }}>{level}%</span>
            </div>
            <div style={{ height: "1px", background: "var(--border-color)", width: "100%" }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : {}}
                    transition={{ duration: 1.4, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
                    style={{ height: "1px", background: "var(--text-primary)" }}
                />
            </div>
        </div>
    );
}

// Helper to resolve icon string to component
const getIcon = (iconName) => {
    switch (iconName) {
        case "CodeIcon":     return <CodeIcon />;
        case "SettingsIcon": return <SettingsIcon />;
        case "ChartIcon":    return <ChartIcon />;
        case "WrenchIcon":   return <WrenchIcon />;
        default:             return <CodeIcon />;
    }
};

export default function Skills() {
    return (
        <section id="skills" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
            
            {/* Background Image: Binary Code / Terminal */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }} // Subtle
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
                    style={{ display: "flex", alignItems: "center", marginBottom: "4rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text">02 — Skills & Technologies</span>
                </motion.div>

                {/* Top heading */}
                <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "flex-end", marginBottom: "4rem",
                    borderBottom: "1px solid var(--border-color)", paddingBottom: "2rem",
                }}>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: "800",
                            lineHeight: 1.05,
                            letterSpacing: "-0.02em",
                            textTransform: "uppercase",
                            color: "var(--text-primary)"
                        }}
                    >
                        Technical<br />
                        <span style={{ color: "var(--text-secondary)" }}>Arsenal.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: "var(--text-muted)", fontSize: "0.8125rem", maxWidth: "18rem", textAlign: "right", lineHeight: 1.7 }}
                    >
                        A snapshot of the tools and technologies I use to build intelligent systems.
                    </motion.p>
                </div>

                {/* Skills grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "0",
                    border: "1px solid var(--border-color)",
                }}>
                    {skillCategories.map(({ category, icon, skills }, catIdx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                            style={{
                                padding: "2rem",
                                borderRight: "1px solid var(--border-color)",
                                borderBottom: "1px solid var(--border-color)",
                            }}
                        >
                            {/* Category header */}
                            <div style={{
                                display: "flex", alignItems: "center", gap: "0.75rem",
                                marginBottom: "2rem", paddingBottom: "1rem",
                                borderBottom: "1px solid var(--border-color)",
                            }}>
                                <span style={{ fontSize: "1.125rem", color: "var(--text-primary)" }}>
                                    {getIcon(icon)}
                                </span>
                                <span style={{
                                    fontSize: "0.6875rem", fontWeight: "700",
                                    letterSpacing: "0.15em", textTransform: "uppercase",
                                    color: "var(--text-primary)",
                                }}>
                  {category}
                </span>
                            </div>

                            {/* Skill bars */}
                            {skills.map(({ name, level }, i) => (
                                <SkillBar
                                    key={name}
                                    name={name}
                                    level={level}
                                    delay={catIdx * 0.1 + i * 0.08}
                                />
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
