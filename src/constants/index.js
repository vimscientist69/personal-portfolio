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
    },
    {
        title: "Blog",
        id: "blog",
        link: "https://garden.williamferns.org",
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
    image: "https://raw.githubusercontent.com/vimscientist69/Mood-Tracker-Application/refs/heads/master/assets/mood-tracker.png",
    source_code_link:
      "https://github.com/vimscientist69/Mood-Tracker-Application",
    live_demo: "https://github.com/vimscientist69/Mood-Tracker-Application",
  },
  {
    name: "YouTube Selenium Py",
    description:
      "Python package that simplifies interactions with YouTube using Selenium.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "youtube",
        color: "pink-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "youtube-api-v3",
        color: "blue-text-gradient",
      },
      {
        name: "package",
        color: "pink-text-gradient",
      },
    ],
    image: "https://avatars.githubusercontent.com/u/182446307?s=200&v=4",
    source_code_link:
      "https://github.com/GetAutomaApp/youtube_selenium_py.git",
    live_demo: "https://github.com/GetAutomaApp/youtube_selenium_py.git",
  },
  {
    name: "RoutineAlarm",
    description:
      "A small Android utility that reads markdown daily routines and creates alarms in the system Clock app.",
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
    name: "2D Platformer Game",
    description:
      "A simple 2D platformer game, made with HTML, CSS, and JavaScript.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "freecodecamp",
        color: "green-text-gradient",
      },
      {
        name: "2d-game",
        color: "pink-text-gradient",
      },
      {
        name: "platformer-game",
        color: "green-text-gradient",
      }
    ],
    image: "https://raw.githubusercontent.com/vimscientist69/2D-Platformer-Game/refs/heads/master/2d-platformer.png",
    source_code_link:
      "https://github.com/vimscientist69/2D-Platformer-Game",
    live_demo: "https://2d-platformer-game.williamferns.org",
  },
  {
    name: "i3wm Nightlight",
    description:
      "A script for managing display color temperature to reduce blue light exposure during night-time computer use.",
    tags: [
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "i3wm",
        color: "green-text-gradient",
      },
      {
        name: "shell-scripting",
        color: "pink-text-gradient",
      },
      {
        name: "nightlight",
        color: "green-text-gradient",
      }
    ],
    image: "https://raw.githubusercontent.com/vimscientist69/i3-nightlight/refs/heads/master/i3wm.png",
    source_code_link:
      "https://github.com/vimscientist69/i3-nightlight",
    live_demo: "https://github.com/vimscientist69/i3-nightlight",
  },
  {
    name: "TMUX for VS Code Extension",
    description: "Direct TMUX integration into VS Code.",
    tags: [
      {
        name: "tmux",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "vscode-extension",
        color: "pink-text-gradient",
      },
      {
        name: "dev-tools",
        color: "green-text-gradient",
      }
    ],
    image: "https://raw.githubusercontent.com/vimscientist69/tmux-for-vscode/refs/heads/main/tmux-for-vscode.png",
    source_code_link: "https://github.com/vimscientist69/tmux-for-vscode",
    live_demo: "https://github.com/vimscientist69/tmux-for-vscode",
  },
  {
    name: "Marvelium",
    description:
      "A React-based superhero encyclopedia powered by the Superhero API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "frontend",
        color: "blue-text-gradient",
      },
      {
        name: "web-app",
        color: "pink-text-gradient",
      },
      {
        name: "api-integration",
        color: "green-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/vimscientist69/Marvelium/refs/heads/main/public/screenshot.png",
    source_code_link:
      "https://github.com/vimscientist69/Marvelium",
    live_demo: "https://marvelium.williamferns.org",
  },
  {
    name: "Web Scraping Collection",
    description:
      "A collection of small web scraping/automation projects using Python, Selenium and Requests.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "selenium",
        color: "green-text-gradient",
      },
      {
        name: "beautifulsoup",
        color: "green-text-gradient",
      },
    ],
    image: "https://raw.githubusercontent.com/vimscientist69/web-automation-collection/refs/heads/main/web-scraping-collection.png",
    source_code_link:
      "https://github.com/vimscientist69/web-automation-collection",
    live_demo: "https://github.com/vimscientist69/web-automation-collection",
  },
];

export { services, technologies, experiences, projects };
