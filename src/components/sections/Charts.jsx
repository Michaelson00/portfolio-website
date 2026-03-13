import {
    Chart as ChartJS,
    RadialLinearScale, PointElement, LineElement, Filler,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Tooltip, Legend,
} from "chart.js";
import { Radar, Bar, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

ChartJS.register(
    RadialLinearScale, PointElement, LineElement, Filler,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Tooltip, Legend
);

const FONT_FAMILY = "JetBrains Mono, SF Mono, Fira Code, monospace";

const STATS = [
    { value: "21+",  label: "Projects"          },
    { value: "8",    label: "Kaggle Medals"      },
    { value: "140+", label: "GitHub Stars"       },
    { value: "50+",  label: "Datasets Analysed"  },
];

const chartColors = {
    grid: "rgba(255,255,255,0.06)",
    tick: "rgba(255,255,255,0.3)",
    pointBg: "rgba(255,255,255,1)",
    pointBorder: "#000000",
    borderColor: "rgba(255,255,255,0.8)",
    bgColor: "rgba(255,255,255,0.05)",
    barBgs: [
        "rgba(255,255,255,0.15)", "rgba(255,255,255,0.25)", "rgba(255,255,255,0.4)",
        "rgba(255,255,255,0.7)", "rgba(255,255,255,0.9)",
    ],
    doughnutBgs: [
        "rgba(255,255,255,0.9)", "rgba(255,255,255,0.65)", "rgba(255,255,255,0.45)",
        "rgba(255,255,255,0.25)", "rgba(255,255,255,0.1)",
    ],
    doughnutBorder: "#0a0a0a",
};

const radarData = {
    labels: ["Machine Learning", "Data Viz", "Backend", "Frontend", "Statistics", "Cloud"],
    datasets: [{
        label: "Skill Level",
        data:  [88, 82, 70, 76, 80, 60],
        backgroundColor:     chartColors.bgColor,
        borderColor:         chartColors.borderColor,
        pointBackgroundColor:chartColors.pointBg,
        pointBorderColor:    chartColors.pointBorder,
        pointRadius:         3,
        borderWidth: 1,
    }],
};

const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
        r: {
            min: 0, max: 100,
            ticks:       { display: false },
            grid:        { color: chartColors.grid },
            angleLines:  { color: chartColors.grid },
            pointLabels: { color: chartColors.tick, font: { family: FONT_FAMILY, size: 10 } },
        },
    },
};

const barData = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [{
        label: "Projects",
        data:  [1, 3, 5, 8, 4],
        backgroundColor: chartColors.barBgs,
        borderRadius: 0,
        borderSkipped: false,
    }],
};

const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
        x: { grid: { color: chartColors.grid }, ticks: { color: chartColors.tick, font: { family: FONT_FAMILY, size: 10 } } },
        y: { grid: { color: chartColors.grid }, ticks: { color: chartColors.tick, font: { family: FONT_FAMILY, size: 10 } } },
    },
};

const doughnutData = {
    labels: ["Python", "JavaScript", "SQL", "R", "Other"],
    datasets: [{
        data: [45, 25, 15, 10, 5],
        backgroundColor: chartColors.doughnutBgs,
        borderColor:  chartColors.doughnutBorder,
        borderWidth:  2,
        hoverOffset:  6,
    }],
};

const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
        legend: {
            position: "bottom",
            labels: { color: chartColors.tick, font: { family: FONT_FAMILY, size: 10 }, padding: 14, boxWidth: 8 },
        },
    },
};

export default function Charts() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <section id="charts" style={{ background: "var(--bg-primary)", borderTop: "1px solid var(--border-color)" }}>
            
            {/* Background Image: Financial/Data Analytics Graph */}
            <motion.div
                style={{
                    position: "absolute", inset: 0, zIndex: 0,
                    backgroundImage: `url(https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2070&auto=format&fit=crop)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.05 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
            />

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)
        `,
                backgroundSize: "80px 80px",
            }} />

            <div className="section-inner" style={{ position: "relative", zIndex: 1 }}>

                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "flex", alignItems: "center", marginBottom: "3rem" }}
                >
                    <span className="line-accent" />
                    <span className="label-text">04 — Data Dashboard</span>
                </motion.div>

                {/* Header */}
                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "flex-end",
                    marginBottom: "3rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)",
                    flexWrap: "wrap", gap: "2rem"
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
                        By The<br />
                        <span style={{ color: "var(--text-secondary)" }}>Numbers.</span>
                    </motion.h2>

                    {/* Stat strip */}
                    <div style={{ display: "flex", gap: "0", flexWrap: "wrap" }}>
                        {STATS.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    padding: "0 2rem",
                                    borderLeft: "1px solid var(--border-color)",
                                    textAlign: "center",
                                    marginBottom: isMobile ? "1rem" : "0",
                                    flex: isMobile ? "1 0 45%" : "auto" // Responsive flex
                                }}
                            >
                                <p style={{
                                    fontSize: "1.5rem", fontWeight: "800",
                                    color: "var(--text-primary)", letterSpacing: "-0.02em",
                                }}>
                                    {value}
                                </p>
                                <p className="label-text" style={{ marginTop: "0.25rem" }}>{label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Charts grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr 1fr",
                    gap: isMobile ? "2rem" : "0",
                    border: isMobile ? "none" : "1px solid var(--border-color)",
                }}>
                    {/* Radar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ 
                            padding: "1.5rem", 
                            borderRight: !isMobile ? "1px solid var(--border-color)" : "none",
                            border: isMobile ? "1px solid var(--border-color)" : "",
                            height: "400px", // Increased height
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <p className="label-text" style={{ marginBottom: "1rem" }}>Skill Radar</p>
                        <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
                            <Radar data={radarData} options={radarOptions} />
                        </div>
                    </motion.div>

                    {/* Bar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ 
                            padding: "1.5rem", 
                            borderRight: !isMobile ? "1px solid var(--border-color)" : "none",
                            border: isMobile ? "1px solid var(--border-color)" : "",
                            height: "400px", // Increased height
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <p className="label-text" style={{ marginBottom: "1rem" }}>Projects / Year</p>
                        <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </motion.div>

                    {/* Doughnut */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ 
                            padding: "1.5rem",
                            border: isMobile ? "1px solid var(--border-color)" : "",
                            height: "400px", // Increased height
                            display: "flex",
                            flexDirection: "column"
                        }}
                    >
                        <p className="label-text" style={{ marginBottom: "1rem" }}>Tech Stack Split</p>
                        <div style={{ flex: 1, position: "relative", minHeight: 0 }}>
                            <Doughnut data={doughnutData} options={doughnutOptions} />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
