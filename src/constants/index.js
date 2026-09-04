import {
    automa,
    replit,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const experiences = [
    {
        title: "Freelance work",
        company_name: "Self-employed",
        icon: automa,
        date: "2026",
        points: [
            "Built a small flight booking site with Next.js and a travel API.",
            "Did some freelance web scraping and small backend tasks.",
        ],
    },
    {
        title: "Helped build a side project",
        company_name: "Automa (brother's SaaS idea)",
        icon: automa,
        date: "2025 – 2026",
        points: [
            "Not a registered company — just a small SaaS my brother started and I helped with.",
            "Worked on backend stuff in Swift, some cloud setup on Fly.io, and browser automation tooling.",
            "Learned a lot about how backend systems are put together, even if the project stayed small.",
        ],
    },
    {
        title: "Freelance gigs",
        company_name: "Replit",
        icon: replit,
        date: "2023 – 2024",
        points: [
            "Did a few freelance projects through Replit — nothing huge.",
            "Built some simple AI web apps with Next.js and OpenAI.",
            "Wrote scraping scripts and a small AWS Lambda thing for processing documents.",
        ],
    },
];

const projects = [
    {
        name: "PropSignal",
        description:
            "A tool that pulls property listings and scores them. Has an API, CLI, and a basic dashboard.",
        tags: ["python", "fastapi", "nextjs"],
        image: "https://raw.githubusercontent.com/vimscientist69/PropSignal/refs/heads/main/assets/logo.png",
        source_code_link: "https://github.com/vimscientist69/PropSignal",
    },
    {
        name: "PropIntel",
        description:
            "Scrapes and cleans real estate data into usable leads. Still a work in progress.",
        tags: ["python", "fastapi", "react"],
        image: "https://raw.githubusercontent.com/vimscientist69/PropIntel/refs/heads/main/assets/logo.png",
        source_code_link: "https://github.com/vimscientist69/PropIntel",
    },
    {
        name: "PropFlux",
        description:
            "Scraping and data pipeline project. Extracts data from websites and stores it for later use.",
        tags: ["python", "scrapy", "selenium"],
        image: "https://raw.githubusercontent.com/vimscientist69/PropFlux/refs/heads/main/assets/logo.png",
        source_code_link: "https://github.com/vimscientist69/PropFlux",
    },
    {
        name: "AutomaInfraCore",
        description:
            "Backend for the Automa side project. API services and background jobs in Swift.",
        tags: ["swift", "vapor", "postgresql"],
        image:
            "https://raw.githubusercontent.com/GetAutomaApp/AutomaInfraCore/refs/heads/develop/assets/logo.png",
        source_code_link:
            "https://github.com/GetAutomaApp/AutomaInfraCore",
    },
    {
        name: "SwiftWebDriver",
        description:
            "A Swift library for browser automation with Selenium. Built while working on Automa.",
        tags: ["swift", "selenium"],
        image:
            "https://raw.githubusercontent.com/GetAutomaApp/SwiftWebDriver/refs/heads/master/assets/logo.png",
        source_code_link:
            "https://github.com/GetAutomaApp/SwiftWebDriver",
    },
    {
        name: "AutomaWebCore",
        description:
            "Browser automation backend for the Automa project. Handles scraping jobs via an API.",
        tags: ["swift", "selenium", "docker"],
        image:
            "https://raw.githubusercontent.com/GetAutomaApp/AutomaWebCore/refs/heads/main/assets/logo.png",
        source_code_link:
            "https://github.com/GetAutomaApp/AutomaWebCore",
    },
];

export { experiences, projects };
