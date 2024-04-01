import cloudwave from "@/assets/cloudwave.jpg";
import cybtracy from "@/assets/cybtracy.png";
import raphaelly from "@/assets/raphaelly.png";
import mega from "@/assets/mega.png";

export type TechData = {
  Languages: string[];
  Frontend: string[];
  Backend: string[];
  Styling: string[];
  Database: string[];
  Blockchain: string[];
  Testing: string[];
  Cloud: string[];
};

export const tech: TechData = {
  Languages: ["JavaScript", "TypeScript", "Java", "Solidity"],
  Frontend: ["Vanilla JavaScript", "React", "Redux", "Next JS", "Svelte", "GSAP"],
  Styling: ["SCSS", "Tailwind CSS", "Ant Design", "Bootstrap", "Chakra UI"],
  Backend: ["Node JS", "Nest JS", "Spring Boot", "Apollo-GraphQL", "Redis", "Dapr", "Kafka"],
  Cloud: ["Docker", "Azure"],
  Database: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  Blockchain: ["Solidity", "Hardhat", "Ethereum", "EtherJS", "Web3JS"],
  Testing: ["Jest", "React Testing Library", "Cypress", "Mocha"],
};
export const experience = [
  {
    id: 1,
    company: "TechBeaver",
    title: "FrontEnd Developer",
    range: "Nov 2023 - Present",
    url: "https://techbeaver.io/",
    btn: 1,
    description: [
      "Worked in a scrum based team to build software solutions for clients with limited timelines.",
      "Implemented SOLID development principles to ensure code quality and maintainability.",
      "Worked closely with the design team to ensure pixel perfect UI/UX.",
    ],
  },
  {
    id: 2,
    company: "FunConnect",
    title: "QA Engineer",
    range: "Oct 2023 - Dec 2023",
    url: "https://funconnect.app/",
    btn: 1,
    description: [
      "Component Unit and E2E testing on an existing beta software, ensured efficient code quality and maintainability.",
      "Wrote clear documentation and test cases.",
    ],
  },
  {
    id: 3,
    company: "Oluadepe Farms Ltd.",
    title: "Software Tester Intern",
    range: "Jun 2023 - Oct 2023",
    url: "",
    btn: 1,
    description: [
      "Component Unit and E2E testing on an existing code base, ensured efficient code quality and maintainability.",
      "Promoted Test Driven Development (TDD) and wrote clear documentation for the code base and test cases.",
    ],
  },
  {
    id: 4,
    company: "Circle-Dodge Systems",
    title: "BackEnd Developer",
    range: "Feb 2023 - Sept 2023",
    url: "",
    btn: 2,
    description: [
      "Worked in collaboration with a team to build and maintain the backend for a robust restaurant management system.",
      "Implemented SOLID development principles to ensure code quality and maintainability.",
    ],
  },
  {
    id: 5,
    company: "Cybtracy",
    title: "Volunteer",
    range: "Jul 2023 - Present",
    url: "https://cybtracy.com",
    btn: 3,
    description: [
      "Led a small team to build the official website of the organization",
      "Worked on the social media and marketing team to promote the organization's mission and vision of promoting digital literacy among kids in underserved communities.",
    ],
  },
  {
    id: 6,
    company: "",
    title: "A2SV Hackathon Semi-finalist",
    range: "Sep 2023-Nov 2023",
    url: "",
    btn: 4,
    description: [
      "Led a team of 4 to develop a web application that aids students in exam preparation using Generative AI.",
      "Pitched the idea to a panel of judges and investors",
    ],
  },
];

export const projects = [
  {
    name: "Cloud Wave",
    id: 1,
    description:
      "A cloud storage web application where users can upload, share, preview and store files and media for free.",
    tech: ["React", "Node JS", "Mega JS", "Mongo DB", "Million JS", "Docker"],
    link: "https://cloud-wave-x9iy.onrender.com/",
    image: cloudwave,
    git: "https://github.com/darksuei/cloudwave",
  },
  {
    name: "Image Vision API",
    id: 2,
    description:
      "An image recognition API created using the tensorflow mobile-net computer vision model for image recognition.",
    tech: ["TypeScript", "Fastify", "TypeORM", "Tensorflow JS", "Mongo DB"],
    link: "https://image-vision-api.onrender.com/",
    image: "",
    demo: "https://image-vison-demo.vercel.app/",
    git: "https://github.com/darksuei/imagevision",
  },
  {
    name: "Mega JS Documentation",
    id: 3,
    description: "The documentation for MEGA JS. An unofficial Javascript sdk for MEGA.nz",
    tech: ["JavaScript", "Docusaurus", "Markdown"],
    link: "https://mega.js.org/",
    image: mega,
    git: "https://github.com/qgustavor/megajs-docs",
  },
  {
    name: "Raphaelly Editorials Services",
    id: 4,
    description:
      "The official website for an editorial organization focused on project research and marketing consultancy.",
    tech: ["JavaScript", "Tailwind CSS", "Django", "PostgreSQL"],
    link: "https://raphaellyeditorial.netlify.app/",
    image: raphaelly,
    git: "https://github.com/darksuei/raphaellyeditorials",
  },
];

export const moreprojects = [
  {
    name: "ERC20 Token Transfer Contract",
    id: 1,
    description:
      "Manage and transfer ERC-20 tokens with support for multiple tokens and ensuring secure and controlled token transfers.",
    tech: ["Solidity", "Alchemy", "Hardhat", "TypeScript"],
    link: "https://sepolia.etherscan.io/address/0x920bE130B50Dc729e778C8b4DcFE5A94D733AbF6",
    git: "https://github.com/darksuei/Erc20-token-transfer",
  },
  {
    name: "X profile",
    id: 2,
    description: "An X(twitter) profile card list.",
    tech: ["Next JS", "React", "FireBase", "PostgreSQL"],
    link: "https://x.hellofaizan.me/",
    git: "https://github.com/hellofaizan/xprofile",
  },
  {
    name: "Cybtracy",
    id: 3,
    description:
      "The official website for Cybtracy, a non-profit organization that aims to provide digital literacy to children in underserved communities.",
    tech: ["Next JS", "Web pack", "TypeScript", "Framer Motion"],
    link: "https://cybtracy.vercel.app/",
    image: cybtracy,
    git: "https://github.com/Cybtracy/webapp-frontend",
  },
  {
    name: "My Portfolio v1",
    id: 4,
    description: "The first version of my portfolio website.",
    tech: ["TypeScript", "Next JS", "Tailwind CSS"],
    link: "https://suei.space",
    git: "https://github.com/darksuei/suei",
  },
  {
    name: "Studera AI",
    id: 5,
    description: "A personalized exam preparation web application (A2SV Generative Hackathon Solution).",
    tech: ["Angular", "Redis", "Nest JS", "MongoDB"],
    link: "https://t.ly/8bkcA",
    git: "https://github.com/Studera-AI",
  },
  {
    name: "Uchegbu Family Tree",
    id: 6,
    description: "Document and save your family tree for future generations.",
    tech: ["JavaScript", "D3 JS", "Mongo DB", "Node JS"],
    link: "https://uchegbu-family-tree.onrender.com/",
    git: "https://github.com/darksuei/family-tree",
  },
  {
    name: "Shell Scripts",
    id: 7,
    description: "A collection of shell scripts for automating my git workflows.",
    tech: ["Bash Scripting", "Linux Shell"],
    link: "#",
    git: "https://github.com/darksuei/scripts",
  },
];
