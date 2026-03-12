import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const NAV_LINKS = [
    { href: "#about",      label: "About"      },
    { href: "#skills",     label: "Skills"     },
    { href: "#projects",   label: "Projects"   },
    { href: "#charts",     label: "Dashboard"  },
    { href: "#experience", label: "Experience" },
    { href: "#contact",    label: "Contact"    },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [active,   setActive]   = useState("");
    
    // Scroll Progress
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
            { threshold: 0.5 }
        );
        NAV_LINKS.forEach(({ href }) => {
            const el = document.querySelector(href);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <header style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
            borderBottom: "1px solid var(--border-color)",
            background: "rgba(10,10,10,0.8)", 
            backdropFilter: "blur(12px)",
            backgroundColor: "var(--bg-secondary)", 
        }}>
            {/* Scroll Progress Bar */}
            <motion.div
                style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                    background: "var(--text-primary)", transformOrigin: "0%", scaleX
                }}
            />

            {/* Override background for theme support */}
            <div style={{
                position: "absolute", inset: 0, opacity: 0.95,
                background: "var(--bg-primary)", zIndex: -1
            }} />

            <div style={{
                maxWidth: "1200px", margin: "0 auto", padding: "0 2rem",
                height: "64px", display: "flex", alignItems: "center", justifyContent: "space-between",
                position: "relative",
            }}>

                {/* Logo */}
                <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "0.875rem", fontWeight: "800", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", fontFamily: "var(--font-mono)" }}>
            KKA<span style={{ color: "var(--text-secondary)" }}>.DEV</span>
          </span>
                </a>

                {/* Desktop nav */}
                <nav style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                    {NAV_LINKS.map(({ href, label }) => {
                        const id     = href.replace("#", "");
                        const isActive = active === id;
                        return (
                            <motion.a
                                key={href}
                                href={href}
                                whileHover={{ scale: 1.05, color: "var(--text-primary)" }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: "0.5rem 1rem",
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase",
                                    textDecoration: "none",
                                    color: isActive ? "var(--text-primary)" : "var(--text-secondary)",
                                    opacity: isActive ? 1 : 0.7,
                                    cursor: "pointer",
                                    fontFamily: "var(--font-mono)"
                                }}
                            >
                                {label}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        style={{ height: "1px", background: "var(--text-primary)", marginTop: "2px" }}
                                    />
                                )}
                            </motion.a>
                        );
                    })}

                    {/* CTA */}
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05, y: -2, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: "0.6rem 1.5rem",
                            fontSize: "0.75rem",
                            fontWeight: "700",
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            textDecoration: "none",
                            color: "var(--bg-primary)",
                            background: "var(--text-primary)",
                            border: "1px solid var(--text-primary)",
                            marginLeft: "1rem",
                            cursor: "pointer",
                            fontFamily: "var(--font-mono)"
                        }}
                    >
                        Hire Me
                    </motion.a>
                </nav>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{   opacity: 0, height: 0 }}
                        style={{ borderTop: "1px solid var(--border-color)", background: "var(--bg-primary)", overflow: "hidden" }}
                    >
                        {NAV_LINKS.map(({ href, label }) => (
                            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                                display: "block", padding: "1.5rem 2rem",
                                fontSize: "0.875rem", fontWeight: "700",
                                letterSpacing: "0.1em", textTransform: "uppercase",
                                color: "var(--text-primary)", textDecoration: "none",
                                borderBottom: "1px solid var(--border-color)",
                                fontFamily: "var(--font-mono)"
                            }}>
                                {label}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}