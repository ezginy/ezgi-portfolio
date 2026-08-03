import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaGitAlt, FaGithub, FaDatabase, FaNetworkWired, FaTerminal } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiCplusplus, SiJson, SiIntellijidea, SiClion, SiDocker, SiGithubactions, SiApachemaven, SiPostgresql, SiJunit5, SiVite } from "react-icons/si";

// PROJECT'S DATAS
export const projectInfo = [
    {
        title: "Tempora",
        description: "A full-stack Kanban board that measures how long each task actually spends in progress and compares it against your estimate, surfacing where a workflow slows down. Timing is computed entirely server-side, so the client can't forge it. Built on a hand-written Java REST API — no framework, no ORM.",
        technologies: ["Java", "PostgreSQL", "JDBC", "REST API", "Docker", "CI/CD", "React", "TypeScript",],

        images: "/projects/tempora.webp",

        githubUrl: "https://github.com/ezginy/tempora",
        liveUrl: "https://tempora-gray.vercel.app/",
    },
    {
        title: "Portfolio Website",
        description: "A responsive portfolio website developed with React and Tailwind CSS, designed to present projects, skills, and professional growth through a clean user experience.",
        technologies: ["React", "JavaScript", "Tailwind CSS"],

        images: "/projects/portfolio.webp",

        githubUrl: "https://github.com/ezginy/ezgi-portfolio",
        liveUrl: "https://ezgi-portfolio-iota.vercel.app/",
    },
    {
        title: "Quiz Engine",
        description: "An interactive console-based quiz engine that dynamically loads question banks from text files. Features randomized question selection without repetition, robust user input validation, and a custom scoring algorithm with penalty logic.",
        technologies: ["C++", "File I/O", "Algorithms", "Data Validation"],
        
        images: "",

        githubUrl: "https://github.com/ezginy/console-quiz-cpp",
        liveUrl: "",
    },
    {
        title: "Focusly",
        description: "A multi-page productivity dashboard combining a Pomodoro focus timer with task management and session analytics that tracks progress over time. Includes light/dark theme support and LocalStorage persistence, so data survives page reloads.",
        technologies: ["HTML", "CSS", "JavaScript", "LocalStorage"],

        images: "/projects/focusly.webp",

        githubUrl: "https://github.com/ezginy/focusly",
        liveUrl: "https://ezginy.github.io/focusly/",
    },
    {
        title: "Sudoku Validator",
        description: "A C++ program that validates Sudoku solutions using file handling and multidimensional arrays.",
        technologies: ["C++", "File I/O", "Arrays"],

        images: "",

        githubUrl: "https://github.com/ezginy/sudoku-validator-cpp",
        liveUrl: "",
    },
    {
        title: "MindCare",
        description: "A mood check-in web app where users select their mood and current need; a data-driven matching system returns a randomized supportive response from multiple pre-written options per combination, with check-in history tracking for reflecting on past entries.",
        technologies: ["HTML", "CSS", "JavaScript"],

        images: "/projects/mindcare.webp",

        githubUrl: "https://github.com/ezginy/mindcare-app",
        liveUrl: "https://ezginy.github.io/mindcare-app/",
    },
];

// SKILLS' DATAS
export const skillInfo = [

    // Frontend Skills
    { name: "HTML5", icon: FaHtml5, category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend" },

    // Backend Skills
    { name: "Java", icon: FaJava, category: "Backend" },
    { name: "C++", icon: SiCplusplus, category: "Backend" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Backend" },

    // Tool Skills
    { name: "Git", icon: FaGitAlt, category: "Tools" },
    { name: "GitHub", icon: FaGithub, category: "Tools" },
    { name: "CI/CD", icon: SiGithubactions, category: "Tools" },
    { name: "Docker", icon: SiDocker, category: "Tools" },
    { name: "Maven", icon: SiApachemaven, category: "Tools" },
    { name: "Vite", icon: SiVite, category: "Tools" },
    { name: "IntelliJ", icon: SiIntellijidea, category: "Tools"},
    { name: "VS Code", icon: null, category: "Tools" },
    { name: "CLion", icon: SiClion, category: "Tools"},

    // Other Skills
    { name: "REST API", icon: FaNetworkWired, category: "Other" },
    { name: "JDBC", icon: FaDatabase, category: "Other" },
    { name: "JUnit", icon: SiJunit5, category: "Other" },
    { name: "JSON", icon: SiJson, category: "Other" },
    { name: "Terminal", icon: FaTerminal, category: "Other" },
];