import { icons } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiCplusplus, SiJson } from "react-icons/si";

// PROJECT'S DATAS
export const projectInfo = [
    {
        title: "Syncro",
        description: "A productivity-focused project management platform built to explore scalable frontend architecture, clean code practices, and modern UI design.",
        technologies: ["React", "TypeScript", "Tailwind CSS"],

        images: "",

        githubUrl: "",
        liveUrl: "",
        comingSoon: true,
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
        title: "Focusly",
        description: "A modern productivity dashboard. Focusly is a responsive Pomodoro and task management application designed to help users stay focused and organized.",
        technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],

        images: "/projects/focusly.webp",

        githubUrl: "https://github.com/ezginy/focusly",
        liveUrl: "https://ezginy.github.io/focusly/",
    },
    {
        title: "MindCare",
        description: "A simple mental health check-in web app that helps users reflect on their mood and needs, and provides supportive responses.",
        technologies: ["HTML5", "CSS3", "JavaScript"],

        images: "/projects/mindcare.webp",

        githubUrl: "https://github.com/ezginy/mindcare-app",
        liveUrl: "https://ezginy.github.io/mindcare-app/",
    },
    {
        title: "Sudoku Validator",
        description: "A C++ program that validates Sudoku solutions using file handling and multidimensional arrays.",
        technologies: ["C++", "File I/O", "Arrays"],

        images: "",

        githubUrl: "https://github.com/ezginy/sudoku-validator-cpp",
        liveUrl: "",
    }
];

// SKILLS' DATAS
export const skillInfo = [

    // Frontend Skills
    { name: "HTML5", icon: FaHtml5, category: "Frontend" },
    { name: "CSS3", icon: FaCss3Alt, category: "Frontend" },
    { name: "JavaScript", icon: SiJavascript, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "TypeScript", icon: SiTypescript, category: "Frontend" },

    // Backend Skills
    { name: "Node.js", icon: FaNodeJs, category: "Backend" },
    { name: "C++", icon: SiCplusplus, category: "Backend" },

    // Tool Skills
    { name: "Git", icon: FaGitAlt, category: "Tools" },
    { name: "GitHub", icon: FaGithub, category: "Tools" },
    { name: "VS Code", icon: null, category: "Tools" },

    // Other Skills
    { name: "REST APIs", icon: null, category: "Other" },
    { name: "Terminal", icon: null, category: "Other" },
    { name: "JSON", icon: SiJson, category: "Other" },
];