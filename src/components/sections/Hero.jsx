import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MapPinIcon, CalendarIcon, CheckCircleIcon } from "../ui/Icons";
import { useState, useEffect, useRef } from "react";

const TICKER_ITEMS = [
    "Data Science", "Machine Learning", "React", "Python",
    "Neural Networks", "Data Viz", "SQL", "AI Engineering",
    "Data Science", "Machine Learning", "React", "Python",
    "Neural Networks", "Data Viz", "SQL", "AI Engineering",
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

// --- Scramble Text Component ---
const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

const ScrambleText = ({ text }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovered, setIsHovered] = useState(false);
    const intervalRef = useRef(null);

    const scramble = () => {
        let pos = 0;
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            const scrambled = text.split("")
                .map((char, index) => {
                    if (index < pos) return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                })
                .join("");

            setDisplayText(scrambled);
            pos += 1 / 3;

            if (pos > text.length) {
                clearInterval(intervalRef.current);
            }
        }, 30);
    };

    // Scramble on mount
    useEffect(() => {
        scramble();
        return () => clearInterval(intervalRef.current);
    }, []);

    // Scramble on hover
    useEffect(() => {
        if (isHovered) scramble();
    }, [isHovered]);

    return (
        <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                fontFamily: "var(--font-mono)",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-block",
                color: "var(--accent)" // Use accent color for the name
            }}
        >
      {displayText}
    </span>
    );
};

export default function Hero() {
    return (
        <section id="hero">
            {/* Background Image */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    // Neural Network / Abstract Data Particles Image
                    backgroundImage: `url(https://images.unsplash.com/photo-1620712943543-0a3f5e4e3df1?q=80&w=2070&auto=format&fit=crop)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: "var(--hero-bg-opacity)", scale: 1 }}
                transition={{ duration: 1.5 }}
                whileHover={{ scale: 1.02 }}
            />

            {/* Top label bar */}
            <div style={{
                position: "absolute", top: "64px", left: 0, right: 0,
                borderBottom: "1px solid var(--border-color)",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "0.75rem 2rem", maxWidth: "100%",
                flexWrap: "wrap", gap: "1rem",
                background: "var(--bg-primary)",
            }}>
                <span className="label-text" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <CalendarIcon /> Portfolio — 2025
                </span>
                <span className="label-text" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <MapPinIcon /> Accra, Ghana
                </span>
                <span className="label-text" style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "#22c55e" }}>
                    <span style={{ position: "relative", display: "flex", width: "8px", height: "8px" }}>
                      <span style={{
                          position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e",
                          opacity: 0.75, animation: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite"
                      }}></span>
                      <span style={{ position: "relative", borderRadius: "50%", height: "8px", width: "8px", background: "#22c55e" }}></span>
                    </span>
                    Available for work
                </span>
            </div>

            {/* Main content */}
            <motion.div
                className="section-inner"
                style={{ justifyContent: "center", position: "relative", zIndex: 1 }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >

                {/* Eyebrow / Name Section */}
                <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", marginBottom: "2.5rem" }}>
                    <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "3rem" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="line-accent"
                    />
                    {/* The NEW Name Component */}
                    <div style={{
                        fontSize: "1.25rem", // Significantly larger than label text
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                    }}>
                        <ScrambleText text="Kelvin Kwabena Apau" />
                    </div>
                </motion.div>

                {/* Big headline */}
                <motion.div variants={itemVariants}>
                    <h1 style={{
                        fontSize: "clamp(3.5rem, 11vw, 9rem)",
                        fontWeight: "900",
                        lineHeight: 0.9,
                        letterSpacing: "-0.04em",
                        textTransform: "uppercase",
                        marginBottom: "2rem",
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-sans)"
                    }}>
                        Data Scientist<br />
                        <span style={{ color: "var(--text-muted)" }}>& ML Engineer</span>
                    </h1>
                </motion.div>

                {/* Sub-headline */}
                <motion.p
                    variants={itemVariants}
                    style={{
                        fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
                        color: "var(--text-secondary)",
                        maxWidth: "600px",
                        marginBottom: "2.5rem",
                        lineHeight: 1.6,
                        fontFamily: "var(--font-sans)"
                    }}
                >
                    I build intelligent systems that turn complex data into actionable decisions.
                    Specializing in predictive modeling, NLP, and full-stack data applications.
                </motion.p>

                {/* CTA Row */}
                <motion.div variants={itemVariants} style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "1rem 2.5rem",
                            background: "var(--accent)", color: "var(--bg-primary)",
                            fontSize: "0.75rem", fontWeight: "700",
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            textDecoration: "none", border: "1px solid var(--accent)",
                            fontFamily: "var(--font-mono)"
                        }}>
                        View Projects
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2, backgroundColor: "var(--border-color)" }} whileTap={{ scale: 0.95 }}
                        style={{
                            display: "inline-flex", alignItems: "center", gap: "0.5rem",
                            padding: "1rem 2.5rem",
                            background: "transparent", color: "var(--text-primary)",
                            fontSize: "0.75rem", fontWeight: "700",
                            letterSpacing: "0.2em", textTransform: "uppercase",
                            textDecoration: "none", border: "1px solid var(--border-color)",
                            fontFamily: "var(--font-mono)"
                        }}>
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Ticker strip at bottom */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                borderTop: "1px solid var(--border-color)",
                padding: "1rem 0",
                overflow: "hidden",
                background: "var(--bg-primary)",
                zIndex: 1,
            }}>
                <div className="ticker-track">
                    {TICKER_ITEMS.map((item, i) => (
                        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "2rem" }}>
              <span className="label-text" style={{ color: "var(--text-muted)", fontSize: "0.875rem" }}>{item}</span>
              <span style={{ color: "var(--border-light)", fontSize: "0.5rem" }}>◆</span>
            </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
