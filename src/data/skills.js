// Storing icon names as strings to avoid JSX in a .js file.

export const skillCategories = [
    {
        category: "Languages",
        icon: "CodeIcon",
        skills: [
            { name: "Python",     level: 90 },
            { name: "JavaScript", level: 78 },
            { name: "SQL",        level: 82 },
            { name: "R",          level: 65 },
        ],
    },
    {
        category: "Frameworks",
        icon: "SettingsIcon",
        skills: [
            { name: "React",      level: 80 },
            { name: "TensorFlow", level: 72 },
            { name: "PyTorch",    level: 68 },
            { name: "FastAPI",    level: 74 },
        ],
    },
    {
        category: "Data & ML",
        icon: "ChartIcon",
        skills: [
            { name: "Pandas",        level: 88 },
            { name: "Scikit-Learn",  level: 85 },
            { name: "Tableau",       level: 70 },
            { name: "Power BI",      level: 65 },
        ],
    },
    {
        category: "Tools",
        icon: "WrenchIcon",
        skills: [
            { name: "Git / GitHub", level: 85 },
            { name: "Docker",       level: 60 },
            { name: "Linux",        level: 72 },
            { name: "VS Code",      level: 92 },
        ],
    },
];
