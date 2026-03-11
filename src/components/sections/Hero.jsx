import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const TICKER_ITEMS = [
    "Data Science", "Machine Learning", "React", "Python",
    "Neural Networks", "Data Viz", "SQL", "AI Engineering",
    "Data Science", "Machine Learning", "React", "Python",
    "Neural Networks", "Data Viz", "SQL", "AI Engineering",
];

export default function Hero() {
    return (
        <section id="hero" style={{ background: "#0a0a0a" }}>

            {/* Top label bar */}
            <div style={{
                position: "absolute", top: "56px", left: 0, right: 0,
                borderBottom: "1px solid #1a1a1a",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "0.625rem 2rem", maxWidth: "100%",
            }}>
                <span className="label-text">Portfolio — 2025</span>
                <span className="label-text">Accra, Ghana · GMT+0</span>
                <span className="label-text">Available for work</span>
            </div>

            {/* Main content */}
            <div className="section-inner" style={{ justifyContent: "center", paddingTop: "56px" }}>

                {/* Eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{ display: "flex", alignItems: "center", marginBottom: "2rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text" style={{ color: "#ffffff" }}>
            Kelvin Kwabena Apau
          </span>
                </motion.div>

                {/* Big headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        fontSize: "clamp(3rem, 9vw, 8rem)",
                        fontWeight: "800",
                        lineHeight: 0.95,
                        letterSpacing: "-0.03em",
                        textTransform: "uppercase",
                        marginBottom: "2rem",
                    }}
                >
                    I Want To<br />
                    <span style={{ color: "#333333" }}>Build Systems</span><br />
                    That Turn<br />
                    <span style={{ WebkitTextStroke: "1px #ffffff", color: "transparent" }}>
            Data Into
          </span><br />
                    Decisions.
                </motion.h1>

                {/* Typing role */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "3rem" }}
                >
                    <span className="label-text">Role —</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: "600", color: "#ffffff", letterSpacing: "0.05em" }}>
            <TypeAnimation
                sequence={[
                    "Data Scientist",          2500,
                    "Responsive Web Designer", 2500,
                    "ML Engineer",             2500,
                    "Python Developer",        2500,
                ]}
                wrapper="span"
                speed={55}
                repeat={Infinity}
            />
          </span>
                </motion.div>

                {/* CTA Row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                >
                    <a href="#projects" style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.875rem 2rem",
                        background: "#ffffff", color: "#000000",
                        fontSize: "0.6875rem", fontWeight: "700",
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        textDecoration: "none", border: "1px solid #ffffff",
                        transition: "all 0.2s",
                    }}>
                        View Projects →
                    </a>
                    <a href="#contact" style={{
                        display: "inline-flex", alignItems: "center", gap: "0.5rem",
                        padding: "0.875rem 2rem",
                        background: "transparent", color: "#ffffff",
                        fontSize: "0.6875rem", fontWeight: "700",
                        letterSpacing: "0.2em", textTransform: "uppercase",
                        textDecoration: "none", border: "1px solid #333333",
                        transition: "all 0.2s",
                    }}>
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                    position: "absolute", bottom: "5rem", right: "2rem",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
                }}
            >
                <div style={{ width: "1px", height: "3rem", background: "linear-gradient(to bottom, #ffffff, transparent)" }} />
                <span className="label-text">Scroll</span>
            </motion.div>

            {/* Ticker strip at bottom */}
            <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                borderTop: "1px solid #1a1a1a",
                padding: "0.75rem 0",
                overflow: "hidden",
                background: "#0a0a0a",
            }}>
                <div className="ticker-track">
                    {TICKER_ITEMS.map((item, i) => (
                        <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
              <span className="label-text" style={{ color: "#444444" }}>{item}</span>
              <span style={{ color: "#333333", fontSize: "0.5rem" }}>◆</span>
            </span>
                    ))}
                </div>
            </div>

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
                backgroundSize: "80px 80px",
            }} />
        </section>
    );
}