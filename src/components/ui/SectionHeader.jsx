import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: "4rem" }}
        >
            <p style={{
                color: "#818cf8",
                fontSize: "0.75rem",
                fontWeight: "700",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                marginBottom: "0.75rem"
            }}>
                {eyebrow}
            </p>
            <h2 style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: "700",
                letterSpacing: "-0.02em",
                marginBottom: "1rem"
            }}>
                {title}
            </h2>
            {subtitle && (
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.125rem", maxWidth: "36rem", margin: "0 auto" }}>
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}