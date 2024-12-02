import cloudwave from "@/assets/img/_cloudwave.png";
import raphaelly from "@/assets/img/raphaelly.png";
import krowdfi from "@/assets/img/_krowdfi.png";
import angular from "@/assets/svg/angular.svg";
import aws from "@/assets/svg/aws.svg";
import docker from "@/assets/svg/docker.svg";
import gcp from "@/assets/svg/gcp.svg";
import go from "@/assets/svg/go.svg";
import kubernetes from "@/assets/svg/kubernetes.svg";
import mysql from "@/assets/svg/mysql.svg";
import nodejs from "@/assets/svg/nodejs.svg";
import react from "@/assets/svg/react.svg";
import kuberpc from "@/assets/img/kuberpc.png";
import kafresh from "@/assets/img/kafresh.png";
import typescript from "@/assets/svg/typescript.svg";
import dotnet from "@/assets/svg/dotnet.svg";
import firebase from "@/assets/svg/firebase.svg";
import tailwind from "@/assets/svg/tailwind.svg";
import mongo from "@/assets/svg/mongo.svg";
import helm from "@/assets/svg/helm.svg";
import redis from "@/assets/svg/redis.svg";
import sueidotdev from "@/assets/img/sueidotdev.png";

export const technologies = [
  go,
  typescript,
  angular,
  react,
  tailwind,
  nodejs,
  dotnet,
  gcp,
  aws,
  docker,
  kubernetes,
  helm,
  firebase,
  redis,
  mysql,
  mongo,
];

export const experience = [
  {
    id: 1,
    company: "NewWave Telecom and Technologies.",
    title: "Sofware Engineer",
    range: "December 2023 - Present",
    url: "https://newwave.io/",
    btn: 1,
    description: [
      "Collaborated with a talented Agile team to deliver innovative fintech solutions, leveraging microservices architecture across Node.js, Spring Boot, .NET, and Python.",
      "Developed cloud-native applications, utilizing tools from the CNCF ecosystem to ensure scalability, reliability, and performance.",
      "Emphasized code quality through comprehensive unit testing and adherence to development best practices, ensuring maintainability and robustness.",
      "Worked in close synergy with cross-functional teams to achieve seamless integration of design and functionality while meeting tight deadlines.",
    ],
  },
  {
    id: 2,
    company: "TechBeaver",
    title: "FrontEnd Developer",
    range: "November 2023 - November 2024",
    url: "https://techbeaver.io/",
    btn: 1,
    description: [
      "Served as a Frontend Developer at TechBeaver, contributing to three impactful projects: two internal applications and one client-facing solution.",
      "Built responsive and user-friendly interfaces using frameworks such as React and Angular, leveraging styling tools like SCSS, Bootstrap, Chakra UI, and Tailwind CSS.",
      "Collaborated within a Scrum-based team, participating in daily standups and delivering features incrementally to meet project timelines.",
      "Focused on creating engaging user experiences by ensuring cross-browser compatibility, performance optimization, and adherence to modern design principles.",
    ],
  },
  {
    id: 3,
    company: "FunConnect",
    title: "Quality Assurance Engineer",
    range: "October 2023 - December 2023",
    url: "https://funconnect.app/",
    btn: 1,
    description: [
      "Conducted comprehensive testing of software systems, including APIs, a mobile application, and a web application, ensuring functionality, reliability, and performance.",
      "Authored clear and concise documentation, including test plans and reports, to facilitate transparency and collaboration within the team.",
      "Ensured code quality and maintainability by rigorously following established testing guidelines and standards.",
    ],
  },
  {
    id: 4,
    company: "Circle-Dodge Systems",
    title: "BackEnd Developer",
    range: "January 2023 - August 2023",
    url: "",
    btn: 2,
    description: [
      "Collaborated as a Backend Developer on a team to design and maintain the backend architecture for a SaaS-based restaurant management system, leveraging Next.js, Express, and MongoDB.",
      "Focused on writing clean, maintainable code by implementing SOLID principles, ensuring scalability and robustness despite the project not reaching production.",
    ],
  },
  {
    id: 5,
    company: "Africa to Silicon Valley (A2SV)",
    title: "Hackathon Semi-finalist",
    range: "September 2023",
    url: "https://a2sv.org/",
    btn: 4,
    description: [
      "Led a team of four to develop a Generative AI-powered web application designed to help students accelerate their exam preparation by generating tailored resources and summaries based on input timelines.",
      "Built the application using Angular, Node.js, TypeScript, Redis, and SQLite, focusing on performance and usability. Pitched the concept to a panel of judges and investors, showcasing its potential to enhance student performance through AI-driven solutions.",
    ],
  },
];

export const projects = [
  {
    name: "Cloudwave",
    id: 1,
    description:
      "A cloud storage web application where users can upload, share, preview and store files and media for free.",
    tech: ["React", "Node JS", "MongoDB", "Mega"],
    link: "https://cloudwave.ink/",
    image: cloudwave,
    git: "https://github.com/darksuei/cloudwave/",
  },
  {
    name: "Krowdfi",
    id: 2,
    description: "A crowdfunding platform for exporters and backers to connect and fund campaigns.",
    tech: ["React", "Chakra UI", "Firebase"],
    link: "https://krowdfi.com/",
    image: krowdfi,
    git: "",
  },
  {
    name: "KubeRPC",
    id: 3,
    description:
      "A lightweight kubernetes-native RPC framework designed to enable low-latency communication.",
    tech: ["Go", "Kubernetes", "Redis"],
    link: "https://blog.suei.dev/posts/yet_another_rpc_framework/",
    image: kuberpc,
    git: "https://github.com/darksuei/kuberpc",
  },
];

export const moreprojects = [
  {
    name: "KaFresh",
    id: 4,
    description:
      "The official website of an agro-processing company focused on extending the shelf life of farm produce.",
    tech: ["Angular", "Typescript", "Firebase"],
    link: "https://siovalley.tech/",
    image: kafresh,
    git: "",
  },
  {
    name: "Raphaelly Editorials",
    id: 5,
    description:
      "The official website for an editorial organization focused on project research and marketing consultancy.",
    tech: ["JavaScript", "Django", "PostgreSQL"],
    link: "https://raphaellyeditorial.netlify.app/",
    image: raphaelly,
    git: "https://github.com/darksuei/raphaellyeditorials/",
  },
  {
    name: "Portfolio v2.0",
    id: 6,
    description: "My personal portfolio.",
    tech: ["Next JS", "Tailwind CSS", "Docker"],
    link: "https://suei.dev/",
    image: sueidotdev,
    git: "https://github.com/darksuei/suei/",
  },
];
