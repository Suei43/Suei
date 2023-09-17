import cloudwave from "@/assets/cloudwave.png";
import cybtracy from "@/assets/cybtracy.png";
import raphaelly from "@/assets/raphaelly.png";

export const experience = [
  {
    id: 1,
    company: "Oluadepe Farms Ltd.",
    title: "QA Tester Intern",
    range: "Jun 2023 - Present",
    url: "",
    btn: 1,
    description: [
      "Component Unit and E2E testing on an existing code base, ensured efficient code quality and maintainability.",
      "Promoted Test Driven Development (TDD) and wrote clear documentation for the code base and test cases.",
    ],
  },
  {
    id: 2,
    company: "Circle-Dodge Systems",
    title: "Back-end Developer",
    range: "Feb 2023 - Aug 2023",
    url: "https://circle-dodge.com",
    btn: 2,
    description: [
      "Worked in collaboration with a team to build and maintain the backend for a robust restaurant management system.",
      "Implemented SOLID development principles to ensure code quality and maintainability.",
    ],
  },
  {
    id: 3,
    company: "Cybtracy",
    title: "Volunteer",
    range: "Jul 2023 - Present",
    url: "https://circle-dodge.com",
    btn: 3,
    description: [
      "Led a small team to build the official website of the organization",
      "Worked on the social media and marketing team to promote the organization's mission and vision of promoting digital literacy among kids in underserved communities.",
    ],
  },
  {
    id: 4,
    company: "",
    title: "A2SV Hackathon Semi-finalist",
    range: "Sep 2023",
    url: "",
    btn: 4,
    description: [
      "Led a team of 4 to develop a web application that aids students in exam preparation using Generative AI.",
      "Pitched the idea to a panel of judges and investors",
    ],
  },
  {
    id: 5,
    company: "Google Developers Student Community",
    title: "GDSC Core Team Member",
    range: "Aug 2023",
    url: "",
    btn: 5,
    description: [
      "Actively engaging the student community by hosting events and talk sessions",
    ],
  },
  {
    id: 6,
    company: "alx_africa",
    title: "Software Engineering Trainee",
    range: "Jun 2023",
    url: "",
    btn: 6,
    description: [
      "Learnt the fundamentals of software development including low level programming, data structures and algorithms, and object oriented programming.",
      "Worked in teams to complete projects using Agile methodologies.",
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
      "An image classification API made using tensorflow mobile-net model for image recognition.",
    tech: ["TypeScript", "Fastify", "TypeORM", "Tensorflow JS", "Mongo DB"],
    link: "https://image-vision-api.onrender.com/",
    image: "",
    git: "https://github.com/darksuei/imagevision",
  },
  {
    name: "Cybtracy",
    id: 3,
    description:
      "The official website for Cybtracy, a non-profit organization that aims to provide digital literacy to children in underserved communities.",
    tech: ["Next JS", "Web pack", "TypeScript", "Framer Motion"],
    link: "https://cybtracy.com/",
    image: cybtracy,
    git: "https://github.com/Cybtracy/webapp-frontend",
  },
  {
    name: "Raphaelly Editorials Services",
    id: 4,
    description:
      "The official website for an editorial organization focused on project research and marketing consultancy.",
    tech: ["JavaScript", "Tailwind CSS", "Django", "PostgreSQL", "AWS S3"],
    link: "https://raphaellyeditorial.netlify.app/",
    image: raphaelly,
    git: "https://github.com/darksuei/raphaellyeditorials",
  },
];

export const moreprojects = [
  {
    name: "Uchegbu Family Tree",
    id: 1,
    description: "Edit and explore your family tree.",
    tech: ["JavaScript", "D3 JS", "Mongo DB", "Node JS"],
    link: "https://uchegbu-family-tree.onrender.com/",
    git: "https://github.com/darksuei/family-tree",
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
    name: "Studera AI",
    id: 3,
    description: "A personalized exam preparation platform",
    tech: ["Angular", "Redis", "Nest JS", "MongoDB"],
    link: "https://studera.onrender.com",
    git: "https://github.com/darksuei/studera-AI",
  },
  {
    name: "My Portfolio v1",
    id: 4,
    description: "First version of my portfolio website",
    tech: ["TypeScript", "Next JS", "Tailwind CSS"],
    link: "https://suei.space",
    git: "https://github.com/darksuei/suei",
  },
  {
    name: "Shell Scripts",
    id: 5,
    description: "A collection of shell scripts for automating git workflows",
    tech: ["Bash Scripting", "Linux Shell"],
    link: "#",
    git: "https://github.com/darksuei/scripts",
  },
];
