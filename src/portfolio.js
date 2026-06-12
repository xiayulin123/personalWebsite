/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Yulin Xia",
  title: "Hi, I'm Yulin",
  subTitle: emoji(
    "Waterloo Computer Engineering student who ships across production SRE, full-stack product engineering, and local-first AI workspaces — from PersonalOps (Tauri + LangGraph + Cursor Agent) to RAG systems and undergraduate research in dialogue systems, static analysis, and computer vision."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/xiayulin123",
  linkedin: "https://linkedin.com/in/yulinXia",
  gmail: "y9xia@uwaterloo.ca",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "END-TO-END BUILDER ACROSS CLOUD RELIABILITY, FULL-STACK PRODUCT, LOCAL-FIRST AI, AND RESEARCH",
  skills: [
    emoji(
      "⚡ Own production cloud infrastructure — Terraform, Kubernetes, observability, and on-call runbooks"
    ),
    emoji(
      "⚡ Ship full-stack products with React, TypeScript, FastAPI, and cloud-native CI/CD pipelines"
    ),
    emoji(
      "⚡ Build local-first AI workspaces — LangGraph RAG, Cursor Agent, ChromaDB, OAuth life integrations, and human-in-the-loop personalization"
    ),
    emoji(
      "⚡ Research across dialogue systems, static analysis, computer vision, reinforcement learning, and NLP"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Go",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fas fa-dharmachakra"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "google-cloud",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "tauri",
      fontAwesomeClassname: "fas fa-desktop"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/uwaterloo_logo.png"),
      subHeader: "Bachelor of Computer Engineering",
      duration: "September 2022 — Present",
      desc: "6th co-operative work term as of 2026. Coursework spans algorithms, software design, distributed systems, machine learning, and human–computer interaction.",
      descBullets: [
        "Co-op sequence: Caerulean AI → Ford (×2) → TextNow (×2)",
        "Research: Furhat dialogue systems, EISOP static analysis, computer vision",
        "Personal project: PersonalOps — local-first AI workspace with dual agent pipelines"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Cloud & SRE",
      progressPercentage: "85%"
    },
    {
      Stack: "Full-Stack",
      progressPercentage: "80%"
    },
    {
      Stack: "AI / ML",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Site Reliability Engineer (Co-op, 2nd term)",
      company: "TextNow",
      companylogo: require("./assets/images/textnow-logo.png"),
      date: "January 2026 — April 2026",
      desc: "Production infrastructure ownership in Waterloo. Hardened AWS resources, tuned observability, and improved Terraform CI workflows with structured plan parsing and an AI-assisted review agent.",
      descBullets: [
        "Fixed Terraform drift and IAM gaps in GitHub Actions; reconciled AWS state",
        "Upgraded plan scans to deterministic parsing with structured error/drift summaries",
        "Refreshed on-call runbooks; retired unused load balancers after K8s/AWS validation",
        "Tuned Datadog, Kibana, and SMS log filters for cost-aware, lower-noise alerts"
      ]
    },
    {
      role: "Site Reliability Engineer (Co-op, 1st term)",
      company: "TextNow",
      companylogo: require("./assets/images/textnow-logo.png"),
      date: "May 2025 — August 2025",
      desc: "Maintained multi-environment AWS infrastructure with Terraform and Atlantis across staging and production.",
      descBullets: [
        "Deployed JTL Reporter: Aurora PostgreSQL, IRSA, Helm-based Nexus HA, SQL migrations",
        "Updated legacy EC2, ENI, NLB, and Route 53 resources across environments",
        "Wired AWS Health alerts to Slack; supported EKS/Istio upgrades",
        "Enabled SageMaker notebook access for data science via IAM and VPC controls"
      ]
    },
    {
      role: "Software Developer, SYNC HMI (Co-op, 2nd term)",
      company: "Ford Motor Company",
      companylogo: require("./assets/images/ford-logo.png"),
      date: "September 2024 — December 2024",
      desc: "Built React/JSX settings flows for in-vehicle SYNC HMI screens with hardware-validated testing.",
      descBullets: [
        "Introduced custom React hooks to reduce duplication and improve performance",
        "Authored unit tests for hooks and components; validated builds on target hardware",
        "Participated in Jenkins-driven integration and code reviews"
      ]
    },
    {
      role: "Software Developer, SYNC HMI (Co-op, 1st term)",
      company: "Ford Motor Company",
      companylogo: require("./assets/images/ford-logo.png"),
      date: "January 2024 — April 2024",
      desc: "Delivered analytics-oriented HMI features for climate control, Menlo settings, and Menlo media.",
      descBullets: [
        "Enabled tracking of user modifications and tab access after vehicle releases",
        "Conducted Linux bring-up and system modifications",
        "Ran Jenkins regression tests and participated in pre-release code reviews"
      ]
    },
    {
      role: "Software Engineer (Co-op)",
      company: "Caerulean AI",
      companylogo: require("./assets/images/caerulean-logo.png"),
      date: "May 2023 — August 2023",
      desc: "Full-stack startup delivery in Toronto — shipped frontend pages, CI/CD on AWS EKS, and ML pipeline optimizations.",
      descBullets: [
        "Shipped 7 React/TypeScript pages with REST APIs; Prisma schema changes with Dockerized DBs",
        "Deployed CI/CD on AWS EKS with ArgoCD — improved deployment throughput by ~20%",
        "Optimized Kubeflow pipelines — reduced AI training cost by ~80%",
        "Added AWS Lambda ingestion; streamed S3 data into EKS workloads"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "TEAM, PERSONAL, AND RESEARCH PROJECTS I'VE SHIPPED OR LED END-TO-END",
  projects: [
    {
      image: require("./assets/images/personalOps-cover.png"),
      projectName: "PersonalOps — Local-First AI Workspace",
      projectDesc:
        "Desktop AI workspace (Tauri 2 + React + FastAPI) unifying study, code, career, and life. Dual pipelines: LangGraph RAG with ChromaDB citations, and Cursor Agent for codebase-aware chat. Life workspace syncs Outlook/Gmail via OAuth PKCE; agent personalization logs prompts, distills habits with LLM review, and archives encrypted logs to GCS.",
      footerLink: []
    },
    {
      image: require("./assets/images/aiPuzzel.webp"),
      projectName: "WatAIOliver — WAT.ai Campus RAG Assistant",
      projectDesc:
        "RAG-based LLM assistant for course materials with chunked embeddings, vector search, and citation-first answers. Compared GPT-4o-mini, Azure OpenAI, and Gemini on latency and citation quality.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/XiandaDu/WatAIOliver"}
      ]
    },
    {
      image: require("./assets/images/stockmarket-screenshot.png"),
      projectName: "Stock Market Monitoring System",
      projectDesc:
        "Full-stack watchlists, charts (SMA, RSI, MACD), Finnhub news, backtests with backtrader, and an AI finance tutor via Llama 3. Educational use only.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/xiayulin123/StockMarketMonitoringSystem"
        }
      ]
    },
    {
      image: require("./assets/images/yulinnote.png"),
      projectName: "yulinnote.online",
      projectDesc:
        "Solo-built note-taking app with authentication and persistent storage — designed for real daily use and deployed on Oracle Cloud Infrastructure.",
      footerLink: [
        {name: "Live Demo", url: "http://yulinnote.online"},
        {
          name: "GitHub",
          url: "https://github.com/xiayulin123/yulinnote.online"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Research Experience (uses Achievement section template)

const achievementSection = {
  title: emoji("Research Experience 🔬"),
  subtitle:
    "Undergraduate research and independent ML projects — dialogue systems, static analysis, computer vision, reinforcement learning, and NLP.",

  achievementsCards: [
    {
      title: "URA — Furhat Social Robots / Dialogue Systems",
      subtitle:
        "Built Python dialogue with the Furhat SDK for child-facing social anxiety studies — intelligent responses, turn-taking, and speech-conditioned routing. Extended lab control panel for multi-robot scripted scenes. Returning May–Aug 2026.",
      image: require("./assets/images/furhat-logo.webp"),
      imageAlt: "Dialogue systems research",
      footerLink: []
    },
    {
      title: "URA — EISOP Checker Framework",
      subtitle:
        "Contributed to null-safety static analysis for Spring apps on the Checker Framework. Compared custom Nullness Checker with Uber NullAway; resolved toolchain compatibility and improved coverage.",
      image: require("./assets/images/EISOP.png"),
      imageAlt: "Static analysis research",
      footerLink: []
    },
    {
      title: "2D Puzzle Assembly",
      subtitle:
        "Computer vision pipeline reconstructing images from randomly positioned puzzle pieces on MS-COCO tiles and DAFNE fresco fragments. Lightweight CNN pose regression (~144K params) with unified preprocessing for both datasets.",
      image: require("./assets/images/puzzle-assembly.webp"),
      imageAlt: "2D puzzle assembly research",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/xiayulin123/2D-Puzzle-Assembly"
        }
      ]
    },
    {
      title: "TD3 Bipedal Walker Agent",
      subtitle:
        "Reinforcement learning project training a TD3 agent to walk and jump in rldurham/Walker. Reward shaping, rolling-median scaling, velocity and jump bonuses — standard and hardcore environments.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Reinforcement learning walker agent",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/xiayulin123/rl-walker-agent"
        }
      ]
    },
    {
      title: "Privacy Policy Multi-Label Classification",
      subtitle:
        "NLP pipeline on OPP-115: EDA, DistilBERT + Linear SVM baseline (~0.63 F1 macro), and zero/few-shot LLM comparison with Qwen2.5 for 12 privacy practice categories.",
      image: require("./assets/images/jsFramework.svg"),
      imageAlt: "Privacy policy classifier",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/xiayulin123/privacy-policy-classifier"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Interested in co-op, internships, or collaboration? My inbox is open.",
  number: "",
  email_address: "y9xia@uwaterloo.ca"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
