import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { GithubIcon, KaggleIcon, ExternalLinkIcon } from "../ui/Icons";

const FILTERS = ["All", "Python", "React", "ML", "NLP"];

export default function Projects() {
    const [filter,   setFilter]   = useState("All");
    const [hovered,  setHovered]  = useState(null);

    const filtered = filter === "All"
        ? projects
        : projects.filter(p => p.tags.some(t => t.includes(filter)));

    return (
        <section id="projects" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>

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
                    style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text">03 — Selected Projects</span>
                </motion.div>

                {/* Header row with filters */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                    marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #1a1a1a",
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
                        }}
                    >
                        Work &<br />
                        <span style={{ color: "#333333" }}>Projects.</span>
                    </motion.h2>

                    {/* Filter pills */}
                    <div style={{ display: "flex", gap: "0.25rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
                        {FILTERS.map(f => (
                            <button key={f} onClick={() => setFilter(f)} style={{
                                padding: "0.375rem 0.875rem",
                                fontSize: "0.6875rem", fontWeight: "700",
                                letterSpacing: "0.15em", textTransform: "uppercase",
                                cursor: "pointer", border: "none", transition: "all 0.2s",
                                background: filter === f ? "#ffffff" : "transparent",
                                color:      filter === f ? "#000000" : "#555555",
                                outline: filter === f ? "none" : "1px solid #222222",
                            }}>
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Project rows */}
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{    opacity: 0, y: -10 }}
                                transition={{ duration: 0.35, delay: i * 0.06 }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "2rem 1fr 1fr auto",
                                    alignItems: "center",
                                    gap: "2rem",
                                    padding: "1.5rem 0",
                                    borderBottom: "1px solid #1a1a1a",
                                    cursor: "default",
                                    transition: "background 0.2s",
                                    background: hovered === i ? "#111111" : "transparent",
                                    paddingLeft: hovered === i ? "1rem" : "0",
                                }}
                            >
                                {/* Index */}
                                <span style={{
                                    fontSize: "0.6875rem", fontFamily: "monospace",
                                    color: "#333333", fontWeight: "700",
                                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                                {/* Title + tags */}
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                        <h3 style={{
                                            fontSize: "1rem", fontWeight: "700",
                                            color: "#ffffff", letterSpacing: "-0.01em",
                                        }}>
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <span style={{
                                                fontSize: "0.6rem", fontWeight: "700",
                                                letterSpacing: "0.15em", textTransform: "uppercase",
                                                color: "#000000", background: "#ffffff",
                                                padding: "0.15rem 0.5rem",
                                            }}>
                        Featured
                      </span>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: "0.625rem", fontWeight: "700",
                                                letterSpacing: "0.1em", textTransform: "uppercase",
                                                color: "#555555",
                                            }}>
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Description */}

                                {/* Description */}
                                <p style={{
                                    fontSize: "0.9rem", color: "#777777",
                                    lineHeight: 1.7,
                                }}>
                                    {project.description}
                                </p>

                                {/* links stay the same, update tags only */}
                                {/* Title + tags */}
                                <div>
                                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                                        <h3 style={{
                                            fontSize: "1.0625rem", fontWeight: "700",
                                            color: "#ffffff", letterSpacing: "-0.01em",
                                        }}>
                                            {project.title}
                                        </h3>
                                        {project.featured && (
                                            <span style={{
                                                fontSize: "0.65rem", fontWeight: "700",
                                                letterSpacing: "0.15em", textTransform: "uppercase",
                                                color: "#000000", background: "#ffffff",
                                                padding: "0.15rem 0.5rem",
                                            }}>
                        Featured
                      </span>
                                        )}
                                    </div>
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                                        {project.tags.map(tag => (
                                            <span key={tag} style={{
                                                fontSize: "0.75rem", fontWeight: "700",
                                                letterSpacing: "0.08em", textTransform: "uppercase",
                                                color: "#777777",
                                            }}>
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer"
                                           style={{ color: "#444444", textDecoration: "none", transition: "color 0.2s" }}
                                           onMouseEnter={e => e.target.style.color = "#ffffff"}
                                           onMouseLeave={e => e.target.style.color = "#444444"}
                                        >
                                            <GithubIcon />
                                        </a>
                                    )}
                                    {project.kaggle && (
                                        <a href={project.kaggle} target="_blank" rel="noreferrer"
                                           style={{ color: "#444444", textDecoration: "none", transition: "color 0.2s" }}
                                           onMouseEnter={e => e.target.style.color = "#ffffff"}
                                           onMouseLeave={e => e.target.style.color = "#444444"}
                                        >
                                            <KaggleIcon />
                                        </a>
                                    )}
                                    {project.demo && (
                                        <a href={project.demo} target="_blank" rel="noreferrer"
                                           style={{ color: "#444444", textDecoration: "none", transition: "color 0.2s" }}
                                           onMouseEnter={e => e.target.style.color = "#ffffff"}
                                           onMouseLeave={e => e.target.style.color = "#444444"}
                                        >
                                            <ExternalLinkIcon />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}