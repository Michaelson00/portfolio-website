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
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: "2.5rem",
            paddingBottom: "2.5rem",
            marginTop: "2.5rem",
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
                color: "rgba(255,255,255,0.3)",
            }}>
                <p className="gradient-text"
                   style={{ fontWeight: "700", fontSize: "1rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    YourName<span style={{ color: "rgba(255,255,255,0.3)" }}>.dev</span>
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                    {socials.map(({ href, icon, label }) => (
                        <motion.a key={label} href={href} target="_blank" rel="noreferrer"
                                  whileHover={{ y: -2 }}
                                  aria-label={label}
                                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>

                <p>&copy; {new Date().getFullYear()} YourName. All rights reserved.</p>
            </div>
        </footer>
    );
}