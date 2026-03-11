import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";
import { SunIcon, MoonIcon } from "./Icons";

export default function ThemeToggle() {
    const { dark, toggle } = useTheme();
    return (
        <motion.button
            onClick={toggle}
            whileTap={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="glass"
            style={{
                width: "2.25rem",
                height: "2.25rem",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.7)",
                cursor: "pointer",
                border: "none",
                background: "rgba(255,255,255,0.04)",
            }}
            aria-label="Toggle theme"
        >
            {dark ? <SunIcon /> : <MoonIcon />}
        </motion.button>
    );
}