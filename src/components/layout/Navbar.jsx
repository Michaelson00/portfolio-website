import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            borderBottom: "1px solid #1a1a1a",
            background: "rgba(10,10,10,0.95)",
            backdropFilter: "blur(10px)",
        }}>
            <div style={{
                maxWidth: "1200px", margin: "0 auto", padding: "0 2rem",
                height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between",
            }}>

                {/* Logo */}
                <a href="#hero" style={{ textDecoration: "none" }}>
          <span style={{ fontSize: "0.75rem", fontWeight: "700", letterSpacing: "0.2em", textTransform: "uppercase", color: "#ffffff" }}>
            KKA<span style={{ color: "#555555" }}>.DEV</span>
          </span>
                </a>

                {/* Desktop nav */}
                <nav style={{ display: "flex", gap: "0.25rem", alignItems: "center" }}>
                    {NAV_LINKS.map(({ href, label }) => {
                        const id     = href.replace("#", "");
                        const isActive = active === id;
                        return (
                            <a key={href} href={href} style={{
                                padding: "0.375rem 0.875rem",
                                fontSize: "0.6875rem",
                                fontWeight: "700",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                textDecoration: "none",
                                color: isActive ? "#ffffff" : "#555555",
                                borderBottom: isActive ? "1px solid #ffffff" : "1px solid transparent",
                                transition: "all 0.2s",
                            }}>
                                {label}
                            </a>
                        );
                    })}
                </nav>

                {/* CTA */}
                <a href="#contact" style={{
                    padding: "0.5rem 1.25rem",
                    fontSize: "0.6875rem",
                    fontWeight: "700",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    color: "#000000",
                    background: "#ffffff",
                    border: "1px solid #ffffff",
                    transition: "all 0.2s",
                }}>
                    Hire Me
                </a>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{   opacity: 0, height: 0 }}
                        style={{ borderTop: "1px solid #1a1a1a", background: "#0a0a0a", overflow: "hidden" }}
                    >
                        {NAV_LINKS.map(({ href, label }) => (
                            <a key={href} href={href} onClick={() => setMenuOpen(false)} style={{
                                display: "block", padding: "1rem 2rem",
                                fontSize: "0.75rem", fontWeight: "700",
                                letterSpacing: "0.2em", textTransform: "uppercase",
                                color: "#666666", textDecoration: "none",
                                borderBottom: "1px solid #1a1a1a",
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