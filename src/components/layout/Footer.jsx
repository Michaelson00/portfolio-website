import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, KaggleIcon, MailIcon } from "../ui/Icons";

const socials = [
    { href: "https://github.com",   icon: <GithubIcon />,   label: "GitHub"   },
    { href: "https://linkedin.com", icon: <LinkedInIcon />, label: "LinkedIn" },
    { href: "https://kaggle.com",   icon: <KaggleIcon />,   label: "Kaggle"   },
    { href: "mailto:you@email.com", icon: <MailIcon />,     label: "Email"    },
];

export default function Footer() {
    return (
        <footer style={{
            borderTop: "1px solid var(--border-color)",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            marginTop: "2.5rem",
            background: "var(--bg-primary)",
        }}>
            <div style={{
                maxWidth: "72rem",
                margin: "0 auto",
                padding: "0 1.25rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
            }}>
                <p className="gradient-text"
                   style={{ fontWeight: "700", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-primary)" }}>
                    KKA<span style={{ color: "var(--text-secondary)" }}>.dev</span>
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    {socials.map(({ href, icon, label }) => (
                        <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                                  whileHover={{ y: -2, color: "var(--text-primary)" }}
                                  aria-label={label}
                                  style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>

                <p style={{ color: "var(--text-muted)" }}>&copy; {new Date().getFullYear()} Kelvin Kwabena Apau. All rights reserved.</p>
            </div>
        </footer>
    );
}