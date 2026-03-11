import {
    Chart as ChartJS,
    RadialLinearScale, PointElement, LineElement, Filler,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Tooltip, Legend,
} from "chart.js";
import { Radar, Bar, Doughnut } from "react-chartjs-2";
import { motion } from "framer-motion";

ChartJS.register(
    RadialLinearScale, PointElement, LineElement, Filler,
    CategoryScale, LinearScale, BarElement, ArcElement,
    Tooltip, Legend
);

const FONT   = { family: "-apple-system, SF Pro Display, Inter, sans-serif", size: 10 };
const GRID   = "rgba(255,255,255,0.06)";
const TICK   = "rgba(255,255,255,0.3)";

const radarData = {
    labels: ["Machine Learning", "Data Viz", "Backend", "Frontend", "Statistics", "Cloud"],
    datasets: [{
        label: "Skill Level",
        data:  [88, 82, 70, 76, 80, 60],
        backgroundColor:     "rgba(255,255,255,0.05)",
        borderColor:         "rgba(255,255,255,0.8)",
        pointBackgroundColor:"rgba(255,255,255,1)",
        pointBorderColor:    "#000000",
        pointRadius:         3,
        borderWidth: 1,
    }],
};

const radarOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
        r: {
            min: 0, max: 100,
            ticks:       { display: false },
            grid:        { color: GRID },
            angleLines:  { color: GRID },
            pointLabels: { color: TICK, font: FONT },
        },
    },
};

const barData = {
    labels: ["2021", "2022", "2023", "2024", "2025"],
    datasets: [{
        label: "Projects",
        data:  [1, 3, 5, 8, 4],
        backgroundColor: [
            "rgba(255,255,255,0.15)",
            "rgba(255,255,255,0.25)",
            "rgba(255,255,255,0.4)",
            "rgba(255,255,255,0.7)",
            "rgba(255,255,255,0.9)",
        ],
        borderRadius: 0,
        borderSkipped: false,
    }],
};

const barOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
        x: { grid: { color: GRID }, ticks: { color: TICK, font: FONT } },
        y: { grid: { color: GRID }, ticks: { color: TICK, font: FONT } },
    },
};

const doughnutData = {
    labels: ["Python", "JavaScript", "SQL", "R", "Other"],
    datasets: [{
        data: [45, 25, 15, 10, 5],
        backgroundColor: [
            "rgba(255,255,255,0.9)",
            "rgba(255,255,255,0.65)",
            "rgba(255,255,255,0.45)",
            "rgba(255,255,255,0.25)",
            "rgba(255,255,255,0.1)",
        ],
        borderColor:  "#0a0a0a",
        borderWidth:  2,
        hoverOffset:  6,
    }],
};

const doughnutOptions = {
    responsive: true,
    cutout: "70%",
    plugins: {
        legend: {
            position: "bottom",
            labels: { color: TICK, font: FONT, padding: 14, boxWidth: 8 },
        },
    },
};

const STATS = [
    { value: "21+",  label: "Projects"          },
    { value: "8",    label: "Kaggle Medals"      },
    { value: "140+", label: "GitHub Stars"       },
    { value: "50+",  label: "Datasets Analysed"  },
];

export default function Charts() {
    return (
        <section id="charts" style={{ background: "#0a0a0a", borderTop: "1px solid #1a1a1a" }}>

            {/* Grid overlay */}
            <div style={{
                position: "absolute", inset: 0, pointerEvents: "none",
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
                    marginBottom: "3rem", paddingBottom: "1.5rem", borderBottom: "1px solid #1a1a1a",
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
                        }}
                    >
                        By The<br />
                        <span style={{ color: "#333333" }}>Numbers.</span>
                    </motion.h2>

                    {/* Stat strip */}
                    <div style={{ display: "flex", gap: "0" }}>
                        {STATS.map(({ value, label }, i) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                style={{
                                    padding: "0 2rem",
                                    borderLeft: "1px solid #1a1a1a",
                                    textAlign: "center",
                                }}
                            >
                                <p style={{
                                    fontSize: "1.5rem", fontWeight: "800",
                                    color: "#ffffff", letterSpacing: "-0.02em",
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
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: "0",
                    border: "1px solid #1a1a1a",
                }}>
                    {/* Radar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ padding: "2rem", borderRight: "1px solid #1a1a1a" }}
                    >
                        <p className="label-text" style={{ marginBottom: "1.5rem" }}>Skill Radar</p>
                        <Radar data={radarData} options={radarOptions} />
                    </motion.div>

                    {/* Bar */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ padding: "2rem", borderRight: "1px solid #1a1a1a" }}
                    >
                        <p className="label-text" style={{ marginBottom: "1.5rem" }}>Projects / Year</p>
                        <Bar data={barData} options={barOptions} />
                    </motion.div>

                    {/* Doughnut */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ padding: "2rem" }}
                    >
                        <p className="label-text" style={{ marginBottom: "1.5rem" }}>Tech Stack Split</p>
                        <Doughnut data={doughnutData} options={doughnutOptions} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}