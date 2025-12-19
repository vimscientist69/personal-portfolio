import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    figma,
    docker,
    nextjs,
    automa,
    replit,
    fly,
    swift,
    python,
    postgresql,
    cookiejar,
    superHero,
    tripguide,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "hire",
        title: "Hire Me",
    }
];

const services = [
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: "Native Developer",
        icon: mobile,
    },
    {
        title: "Automations Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Next JS",
        icon: nextjs
    },
    {
        name: "Fly.io",
        icon: fly
    },
    {
        name: "Swift",
        icon: swift
    },
    {
        name: "Python",
        icon: python
    },
    {
        name: "PostgreSQL",
        icon: postgresql
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Automa",
        icon: automa,
        iconBg: "black",
        date: "March 2025 - Present day",
        points: [
            "Built and maintained backend systems in Swift, including user authentication, ORM/database layers, background job processing, observability, and continuous integration/testing.",
            "Designed and operated cloud infrastructure on Fly.io, including PostgreSQL, Temporal, Selenium Grid, and an autoscaling workflow to improve reliability, developer speed, and cost efficiency.",
            "Developed browser automation and WebDriver tooling in Swift, adding new features, integration tests, GitHub Actions workflows, and code quality improvements to open-source libraries.",
            "Improved developer experience and codebase quality by reducing dependencies, refactoring utilities, unifying metrics, updating documentation, and enabling local observability with Prometheus, Grafana, and Loki."
        ],
    },
    {
        title: "Freelance Software Developer",
        company_name: "Replit",
        icon: replit,
        iconBg: "#0f1626",
        date: "September 2023 - August 2024",
        points: [
            "Developed full-stack AI-driven web applications using Next.js, OpenAI, Supabase, and Vercel to convert PDFs, audio files, and web pages into structured and searchable data.",
            "Built web scraping and automation pipelines to collect job listings and market data, applying data cleaning, deduplication, enrichment, and LLM summarization to improve accuracy.",
            "Created targeted automation and scraping tools using Selenium and scripting to streamline workflows, collect analytics, and extract data for dashboards and research tasks.",
            "Implemented an AWS Lambda workflow to process medical documents, convert them into FHIR format, and store structured records in AWS HealthLake for analysis."
        ],
    }
];

const projects = [
    {
        name: "Automa",
        description:
        "Automa is an automation sulation made for humans. Allowing everyone to automate Any social media at the click of a few buttons.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "swift",
                color: "green-text-gradient",
            },
            { 
                name: "supabase", color: "green-text-gradient",
            },
            {
                name: "chakra-ui",
                color: "pink-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "zustand",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "GO",
                color: "green-text-gradient",
            },
            {
                name: "openai",
                color: "green-text-gradient",
            },
            {
                name: "scala",
                color: "pink-text-gradient",
            },
            {
                name: "docker",
                color: "blue-text-gradient",
            },
            {
                name: "kubernetes",
                color: "blue-text-gradient",
            },
            {
                name: "And about 50 unique technologies more...",
                color: "pink-text-gradient",
            },
        ],
        image: 'https://github.com/Automa-Automations/.github/assets/122154257/b1933428-b151-4117-8549-8f357af3bf72',
        source_code_link: "https://github.com/Automa-Automations/",
        live_demo: "https://youtube.com/@AdonisCodes",
    },
    {
        name: "SuperHero.",
        description:
        "A web-application that enables users to lookup their favourite heros. The app features stunning animations. Quick load times thanks to the SPA architecture & Svelte framework. The app will show stats on all super heros, with a simple search. This was a little dummy project for me.",
        tags: [
            {
                name: "Svelte",
                color: "pink-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
        ],
        image: superHero,
        source_code_link: "https://github.com/",
        live_demo: "https://super-hero-api-app-lol.onrender.com/",
    },
    {
        name: "And Many more...",
        description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "Moviepy",
                color: "green-text-gradient",
            },
            {
                name: "Selenium",
                color: "blue-text-gradient",
            },
            {
                name: "requests",
                color: "pink-text-gradient",
            },
            {
                name: "Puppeteer",
                color: "green-text-gradient",
            },
            {
                name: "APIS",
                color: "blue-text-gradient",
            },
        ],
        image: "https://placehold.co/600x400?text=Check My Github&font=roboto",
        source_code_link: "https://github.com/AdonisCodes",
        live_demo: "https://github.com/AdonisCodes",
    },
];

export { services, technologies, experiences, projects };
