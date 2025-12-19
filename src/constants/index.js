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
    name: "AutomaInfraCore",
    description:
      "AutomaInfraCore is the core infrastructure powering the Automa application.",
    tags: [
      {
        name: "vapor",
        color: "blue-text-gradient",
      },
      {
        name: "ios",
        color: "green-text-gradient",
      },
      {
        name: "macos",
        color: "pink-text-gradient",
      },
      {
        name: "backend",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "blue-text-gradient",
      },
      {
        name: "swiftui",
        color: "pink-text-gradient",
      },
      {
        name: "ai-integration",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/182446307?s=200&v=4",
    source_code_link: "https://github.com/GetAutomaApp/AutomaInfraCore",
    live_demo: "https://getautoma.app/",
  },
  {
    name: "SwiftWebDriver",
    description:
      "Library allows you to work with Selenium WebDriver on server-side Swift.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "webdriver",
        color: "pink-text-gradient",
      },
      {
        name: "server-side-swift",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "chrome-driver",
        color: "green-text-gradient",
      },
      {
        name: "swift-package",
        color: "blue-text-gradient",
      },
      {
        name: "ui-testing",
        color: "blue-text-gradient",
      },
      {
        name: "browser-automation",
        color: "blue-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/182446307?s=200&v=4",
    source_code_link: "https://github.com/GetAutomaApp/SwiftWebDriver",
    live_demo: "https://getautoma.app/",
  },
  {
    name: "AutomaWebCore",
    description: "Web automation infrastructure for Automa.",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "vapor",
        color: "green-text-gradient",
      },
      {
        name: "selenium-grid",
        color: "pink-text-gradient",
      },
      {
        name: "autoscaling",
        color: "green-text-gradient",
      },
      {
        name: "web-automation",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "pink-text-gradient",
      },
      {
        name: "fly-io",
        color: "green-text-gradient",
      },
      {
        name: "api-service",
        color: "blue-text-gradient",
      },
      {
        name: "server-side-swift",
        color: "blue-text-gradient",
      },
      {
        name: "infrastructure",
        color: "blue-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/182446307?s=200&v=4",
    source_code_link: "https://github.com/GetAutomaApp/AutomaWebCore",
    live_demo: "https://getautoma.app/",
  },
  {
    name: "RoutineAlarm",
    description:
      "A small Android utility that reads markdown daily routines and creates alarms in the system Clock app",
    tags: [
      {
        name: "android",
        color: "blue-text-gradient",
      },
      {
        name: "kotlin",
        color: "green-text-gradient",
      },
      {
        name: "productivity",
        color: "pink-text-gradient",
      },
      {
        name: "markdown",
        color: "green-text-gradient",
      },
      {
        name: "alarms",
        color: "blue-text-gradient",
      },
      {
        name: "clock",
        color: "pink-text-gradient",
      },
      {
        name: "obsidian",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://raw.githubusercontent.com/vimscientist69/RoutineAlarm/refs/heads/main/Screenshot%202025-12-19%20at%2013.49.01.png",
    source_code_link: "https://github.com/vimscientist69/RoutineAlarm",
    live_demo: "https://github.com/vimscientist69/RoutineAlarm",
  },
  {
    name: "Mood Tracker",
    description:
      "Simple mood tracker application using Expo (React Native) and Firebase.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "mood-tracking",
        color: "blue-text-gradient",
      },
      {
        name: "mental-health",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
    ],
    image:
      "https://private-user-images.githubusercontent.com/198056728/528110937-f03e2259-be5c-4889-bb80-53daefbea96e.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjYxNDU0NjAsIm5iZiI6MTc2NjE0NTE2MCwicGF0aCI6Ii8xOTgwNTY3MjgvNTI4MTEwOTM3LWYwM2UyMjU5LWJlNWMtNDg4OS1iYjgwLTUzZGFlZmJlYTk2ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUxMjE5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MTIxOVQxMTUyNDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xOGNmNDViY2Q5ODhiY2FlNjg5MDg5NWVhNDZhMDcxNGQyN2I1MDlmNGYyMTlkMTZkZTkxNjYxZjlmMjNkYWE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.s3oJMHADsMoe8qElYIHY-r4dxbUwguB84CDYSOARF4E",
    source_code_link:
      "https://github.com/vimscientist69/Mood-Tracker-Application",
    live_demo: "https://github.com/vimscientist69/Mood-Tracker-Application",
  },
  {
    name: "And Many more...",
    description:
      "I build small projects to address personal needs, enhance developer workflow, apply CS concepts, and create tools and microservices for our AI startup, Automa.",
    tags: [
      {
        name: "automation",
        color: "blue-text-gradient",
      },
      {
        name: "productivity-tools",
        color: "pink-text-gradient",
      },
      {
        name: "backend-services",
        color: "green-text-gradient",
      },
      {
        name: "developer-tools",
        color: "green-text-gradient",
      },
    ],
    image: "https://placehold.co/600x400?text=Check My Github&font=roboto",
    source_code_link: "https://github.com/vimscientist69",
    live_demo: "https://github.com/vimscientist69",
  },
];

export { services, technologies, experiences, projects };
