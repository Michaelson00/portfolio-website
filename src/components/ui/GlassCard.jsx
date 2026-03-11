import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true, delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={hover ? { y: -6, scale: 1.015 } : {}}
            className={`glass rounded-2xl ${className}`}
        >
            {children}
        </motion.div>
    );
}