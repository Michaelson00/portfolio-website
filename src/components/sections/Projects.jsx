import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data/projects";
import { GithubIcon, KaggleIcon, ExternalLinkIcon } from "../ui/Icons";

const FILTERS = ["All", "Python", "React", "ML", "NLP"];

// Placeholder images for projects (Data Science themed)
const PROJECT_IMAGES = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Analytics
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop", // Dashboard
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop", // Code/NLP
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2055&auto=format&fit=crop", // Web
];

export default function Projects() {
    const [filter, setFilter] = useState("All");
    const [hovered, setHovered] = useState(null);

    const filtered = filter === "All"
        ? projects
        : projects.filter(p => p.tags.some(t => t.includes(filter)));

    return (
        <section id="projects" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>

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

                {/* Header & Filter */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                    marginBottom: "4rem", flexWrap: "wrap", gap: "2rem"
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
                        Built With<br />
                        <span style={{ color: "var(--text-secondary)" }}>Code & Data.</span>
                    </motion.h2>

                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                        {FILTERS.map(f => (
                            <motion.button
                                key={f}
                                onClick={() => setFilter(f)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "0.5rem 1.25rem",
                                    fontSize: "0.75rem", fontWeight: "700",
                                    letterSpacing: "0.1em", textTransform: "uppercase",
                                    cursor: "pointer",
                                    background: filter === f ? "var(--text-primary)" : "transparent",
                                    color:      filter === f ? "var(--bg-primary)" : "var(--text-muted)",
                                    border: filter === f ? "1px solid var(--text-primary)" : "1px solid var(--border-color)",
                                    borderRadius: "100px",
                                    transition: "all 0.3s"
                                }}>
                                {f}
                            </motion.button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <motion.div
                    layout
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHovered(i)}
                                onMouseLeave={() => setHovered(null)}
                                style={{
                                    position: "relative",
                                    background: "var(--bg-secondary)",
                                    border: "1px solid var(--border-color)",
                                    borderRadius: "1rem",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            >
                                {/* Image Cover */}
                                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                                    <div style={{
                                        position: "absolute", inset: 0, background: "rgba(0,0,0,0.2)", zIndex: 1,
                                        transition: "opacity 0.3s", opacity: hovered === i ? 0 : 1
                                    }} />
                                    <motion.img
                                        src={PROJECT_IMAGES[i % PROJECT_IMAGES.length]}
                                        alt={project.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        animate={{ scale: hovered === i ? 1.1 : 1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    {project.featured && (
                                        <span style={{
                                            position: "absolute", top: "1rem", right: "1rem", zIndex: 2,
                                            background: "var(--accent)", color: "var(--bg-primary)",
                                            fontSize: "0.6rem", fontWeight: "800", letterSpacing: "0.1em",
                                            padding: "0.25rem 0.75rem", borderRadius: "100px", textTransform: "uppercase"
                                        }}>
                                            Featured
                                        </span>
                                    )}
                                </div>

                                {/* Content */}
                                <div style={{ padding: "2rem", flex: 1, display: "flex", flexDirection: "column" }}>
                                    <h3 style={{
                                        fontSize: "1.25rem", fontWeight: "800",
                                        color: "var(--text-primary)", marginBottom: "0.75rem",
                                    }}>
                                        {project.title}
                                    </h3>
                                    
                                    <p style={{
                                        fontSize: "0.9375rem", color: "var(--text-secondary)",
                                        lineHeight: 1.6, marginBottom: "1.5rem", flex: 1
                                    }}>
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
                                        {project.tags.slice(0, 3).map(tag => (
                                            <span key={tag} style={{
                                                fontSize: "0.6875rem", color: "var(--text-muted)",
                                                border: "1px solid var(--border-color)",
                                                padding: "0.25rem 0.6rem", borderRadius: "4px",
                                                fontFamily: "var(--font-mono)"
                                            }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: "flex", gap: "1rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-color)" }}>
                                        {project.github && (
                                            <motion.a href={project.github} target="_blank" rel="noreferrer"
                                                whileHover={{ scale: 1.2, color: "var(--text-primary)" }}
                                                style={{ color: "var(--text-muted)" }}>
                                                <GithubIcon />
                                            </motion.a>
                                        )}
                                        {project.kaggle && (
                                            <motion.a href={project.kaggle} target="_blank" rel="noreferrer"
                                                whileHover={{ scale: 1.2, color: "var(--text-primary)" }}
                                                style={{ color: "var(--text-muted)" }}>
                                                <KaggleIcon />
                                            </motion.a>
                                        )}
                                        {project.demo && (
                                            <motion.a href={project.demo} target="_blank" rel="noreferrer"
                                                whileHover={{ scale: 1.2, color: "var(--text-primary)" }}
                                                style={{ color: "var(--text-muted)" }}>
                                                <ExternalLinkIcon />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}