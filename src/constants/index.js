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
    upwork,
    automa,
    replit,
    fly,
    swift,
    python,
    postgresql,
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
    },
    // {
    //     title: "Blog",
    //     id: "blog",
    //     link: "https://garden.williamferns.org",
    // }
];

const services = [
    {
        title: "Backend Systems",
        icon: backend,
    },
    {
        title: "API Development",
        icon: web,
    },
    {
        title: "Data Extraction & APIs",
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
        title: "Freelance Software Developer",
        company_name: "Upwork",
        icon: upwork,
        iconBg: "black",
        date: "February 2026 - Present day",
        points: [
            "Built a flight booking platform with Next.js integrating the Riya Travel API, featuring real-time search, multi-currency support, dynamic pricing, and an admin dashboard for managing markups and incentives.",
            "Providing freelance web scraping solutions for data extraction, automation, and analysis",
            "Developing and maintaining backend services, APIs, and databases for web applications",
        ],
    },
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
        name: "PropIntel",
        description:
        "Lead intelligence and enrichment platform that transforms raw real estate data into structured, high-quality leads. Combines multi-source scraping, validation, and scoring into a unified pipeline with API and dashboard support.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "fastapi", color: "green-text-gradient" },
            { name: "react", color: "pink-text-gradient" },
            { name: "lead-enrichment", color: "blue-text-gradient" },
            { name: "workflow-automation", color: "pink-text-gradient" },
        ],
        image: "https://raw.githubusercontent.com/vimscientist69/PropIntel/refs/heads/main/assets/logo.png",
        source_code_link: "https://github.com/vimscientist69/PropIntel",
    },
    {
        name: "PropFlux",
        description:
        "Production-grade scraping and ETL system for large-scale data extraction, normalization, and enrichment. Includes a backend API and monitoring dashboard for managing scraping jobs and tracking results across multiple sites.",
        tags: [
            { name: "python", color: "blue-text-gradient" },
            { name: "scrapy", color: "green-text-gradient" },
            { name: "selenium", color: "pink-text-gradient" },
            { name: "etl", color: "blue-text-gradient" },
            { name: "api", color: "green-text-gradient" },
            { name: "data-pipelines", color: "pink-text-gradient" },
        ],
        image: "https://raw.githubusercontent.com/vimscientist69/PropFlux/refs/heads/main/assets/logo.png",
        source_code_link: "https://github.com/vimscientist69/PropFlux",
    },
    {
        name: "AutomaInfraCore",
        description:
        "Backend infrastructure powering the Automa application. It provides scalable API services and background job processing for reliable data handling, integrations, and system monitoring.",
        tags: [
            { name: "vapor", color: "blue-text-gradient" },
            { name: "ios", color: "green-text-gradient" },
            { name: "macos", color: "pink-text-gradient" },
            { name: "backend", color: "green-text-gradient" },
            { name: "postgresql", color: "blue-text-gradient" },
            { name: "swiftui", color: "pink-text-gradient" },
            { name: "ai-integration", color: "green-text-gradient" },
            { name: "docker", color: "blue-text-gradient" },
        ],
        image:
        "https://raw.githubusercontent.com/GetAutomaApp/AutomaInfraCore/refs/heads/develop/assets/logo.png",
        source_code_link:
        "https://github.com/GetAutomaApp/AutomaInfraCore",
    },
    {
        name: "SwiftWebDriver",
        description:
        "Production-grade library for using Selenium WebDriver with server-side Swift. Designed for reliable browser automation, it enables scalable scraping and testing workflows with full control over headless browser execution.",
        tags: [
            { name: "swift", color: "blue-text-gradient" },
            { name: "selenium", color: "green-text-gradient" },
            { name: "webdriver", color: "pink-text-gradient" },
            { name: "automation", color: "blue-text-gradient" },
            { name: "docker", color: "pink-text-gradient" },
            { name: "chrome-driver", color: "green-text-gradient" },
            { name: "ui-testing", color: "blue-text-gradient" },
            { name: "browser-automation", color: "blue-text-gradient" },
        ],
        image:
        "https://raw.githubusercontent.com/GetAutomaApp/SwiftWebDriver/refs/heads/master/assets/logo.png",
        source_code_link:
        "https://github.com/GetAutomaApp/SwiftWebDriver",
    },
    {
        name: "AutomaWebCore",
        description:
        "Backend service for scalable browser automation and web scraping. It manages distributed automation workloads, Selenium Grid orchestration, and API-driven job execution for high-volume scraping systems.",
        tags: [
            { name: "swift", color: "blue-text-gradient" },
            { name: "selenium-grid", color: "pink-text-gradient" },
            { name: "autoscaling", color: "green-text-gradient" },
            { name: "web-automation", color: "blue-text-gradient" },
            { name: "docker", color: "pink-text-gradient" },
            { name: "api-service", color: "blue-text-gradient" },
            { name: "infrastructure", color: "blue-text-gradient" },
        ],
        image:
        "https://raw.githubusercontent.com/GetAutomaApp/AutomaWebCore/refs/heads/main/assets/logo.png",
        source_code_link:
        "https://github.com/GetAutomaApp/AutomaWebCore",
    },
];

export { services, technologies, experiences, projects };
