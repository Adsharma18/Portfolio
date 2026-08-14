// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';


import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import flaskLogo from './assets/tech_logo/flask.jpg';
import fastapiLogo from './assets/tech_logo/fastapi.jpg';

import mongodbLogo from './assets/tech_logo/mongodb.png';
import sqliteLogo from './assets/tech_logo/sqlite.jpg';
import dynamodbLogo from './assets/tech_logo/dynamo.jpg';

import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.jpg';
import cppLogo from './assets/tech_logo/cpp.png';
import sqlLogo from './assets/tech_logo/mysql.png';

import awsLogo from './assets/tech_logo/aws.jpg';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import linuxLogo from './assets/tech_logo/linux.jpg';
import postmanLogo from './assets/tech_logo/postman.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

import generativeAiLogo from './assets/tech_logo/generativeai.jpg';
import llmLogo from './assets/tech_logo/llm.jpg';


// Experience Section Logo
import oneM1BLogo from './assets/company_logo/1m1b.jpg';
import smart from './assets/company_logo/Smart.png';

// Education Section Logos
import kietlogo from './assets/education_logo/college.png';
import kmpslogo from './assets/education_logo/school.png';

// Project Section Logos
import cryptoplace from './assets/work_logo/cryptoplace.png';
import CareerDebateCoach from './assets/work_logo/CareerDebateCoach.png';
import AuraAdvisor from './assets/work_logo/AuraAdvisor.png';

// -------------------- SKILLS --------------------
// -------------------- SKILLS --------------------
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML5', logo: htmlLogo },
      { name: 'CSS3', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },

  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'Flask', logo: flaskLogo },
      { name: 'FastAPI', logo: fastapiLogo },
      { name: 'REST APIs', logo: fastapiLogo },
      { name: 'API Design', logo: fastapiLogo },
    ],
  },

  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'SQL', logo: sqlLogo },
    ],
  },

  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'SQLite', logo: sqliteLogo },
      { name: 'DynamoDB', logo: dynamodbLogo },
    ],
  },

  {
    title: 'AI & Generative AI',
    skills: [
      { name: 'Generative AI', logo: generativeAiLogo },
      { name: 'LLM Integration', logo: llmLogo },
    ],
  },

  {
    title: 'Cloud & Tools',
    skills: [
      { name: 'AWS', logo: awsLogo },
      { name: 'AWS EC2', logo: awsLogo },
      { name: 'AWS S3', logo: awsLogo },
      { name: 'AWS IAM', logo: awsLogo },
      { name: 'AWS RDS', logo: awsLogo },
      { name: 'AWS SNS', logo: awsLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Linux', logo: linuxLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },
    ],
  },
];

// -------------------- EXPERIENCES --------------------
export const experiences = [
  {
    id: 0,
img: oneM1BLogo,
    role: "AI Engineer intern",
    company: "  1M1B",
    date: "July 2026 - Present",
    desc: "Currently working as an AI Engineer Intern at 1M1B, contributing to the development and exploration of AI-driven solutions with a focus on Large Language Models (LLMs) and other AI/ML models. My work involves experimenting with modern AI technologies, integrating models into practical applications, and understanding how AI systems can be developed and applied to solve real-world problems.",
    skills: [
      "LLMs",
      "Generative AI",
      "JavaScript",
      "React JS",
      "TypeScript",
      "AI Model Integration",
      "Tailwind CSS",
      "Python",
      "Prompt Engineering",
    ],
  },
  {
  id: 1,
  img: smart,
  role: "AWS Capstone",
  company: "SmartBridge",
  date: "January 2026 - February 2026",
  desc: "Developed a scalable full-stack blood donation platform using Python, Flask, and RESTful APIs, deployed on AWS EC2 for cloud infrastructure and production-ready performance. Designed and managed a scalable DynamoDB NoSQL database with 4 tables and implemented IAM access control policies for secure data management. Integrated AWS SNS for real-time notifications and built responsive donor and recipient dashboards using HTML, CSS, JavaScript, and Flask, improving user experience and operational efficiency by 30%.",
  skills: [
    "Python",
    "Flask",
    "REST APIs",
    "AWS EC2",
    "DynamoDB",
    "IAM",
    "AWS SNS",
    "HTML",
    "CSS",
    "JavaScript",
  ],
},
];

// -------------------- EDUCATION --------------------
export const education = [
  {
    id: 0,
    img: kietlogo,
    school: "KIET Group of Institutions, MuradNagar",
    date: "October 2023 - Present",
    grade: "8.7 CGPA",
    desc: "Pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence) from AKTU University. Studied Data Structures, Algorithms, OOP, DBMS, Web Development, and Software Engineering. Participated in workshops and technical events to enhance practical skills.",
    degree: "Bachelor of Technical Education",
  },
  {
    id: 1,
    img: kmpslogo,
    school: "KumKum Modi Public School, Baghpat",
    date: "Apr 2021 - March 2022",
    grade: "94.8%",
    desc: "Completed class 12 under CBSE Board, studied Physics, Chemistry, Mathematics, and Biology.",
    degree: "CBSE (XII) - PCMB",
  },
  {
    id: 2,
    img: kmpslogo,
    school: "KumKum Modi Public School, Baghpat",
    date: "Apr 2019 - March 2020",
    grade: "92%",
    desc: "Completed class 10 under CBSE Board, studied Science with Computer Applications.",
    degree: "CBSE (X) - Science with Computer Application",
  },
];

// -------------------- PROJECTS --------------------
export const projects = [
  {
    id: 0,
    title: "CryptoQuiver",
    description:
      "A powerful and user-friendly React.js application. Developed a cryptocurrency tracker with real-time API integration and responsive UI. Implemented live price updates, portfolio management, interactive charts, and robust error handling. Supported historical price fetching for the last 10 days per cryptocurrency.",
    image: cryptoplace,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Adsharma18/Cryptocurrencytracker",
    webapp: "https://cryptoquiver.netlify.app/",
  },
  {
    id: 1,
    title: "AI Aura Advisor ",
    description:
      "Aura Advisor is an AI-powered investment advisory platform designed to provide personalized financial guidance through conversational AI. Built with React.js, FastAPI, Python, PostgreSQL/SQLite, Groq LLM, REST APIs, and AWS, the application combines conversational intelligence with sentiment analysis and risk profiling to deliver personalized investment recommendations. It includes secure authentication, portfolio management, AI-powered chat, investment planning, portfolio tracking, real-time financial insights, and educational financial guidance",
    image: AuraAdvisor,
    tags: ["React.js", "FastAPI", "Python","SQLite","REST APIs"],
    github: "https://github.com/Adsharma18/Emotional-AI-Investment-Advisor",
    webapp: "https://github.com/Adsharma18/Emotional-AI-Investment-Advisor", // replace with actual live URL
  },
  {
    id: 2,
    title: "AI Career Debate Coach",
    description:
      "AI Career Debate Coach is an AI-powered career guidance platform designed to provide personalized recommendations and structured analytical feedback through conversational AI. Built using Python, FastAPI, Groq LLM, REST APIs, SQLite, and JavaScript, the platform uses a reasoning and counterargument engine to generate contextual responses and support users in evaluating career decisions. It includes scalable backend APIs, asynchronous request handling, and modular decision-support workflows, with the backend architecture designed to improve maintainability and scalability. The application achieved a reported 30% improvement in response efficiency under concurrent user requests while providing more consistent and interactive analytical guidance.",
    image: CareerDebateCoach,
    tags:["React.js", "FastAPI", "Python","SQLite","REST APIs","Javascript"],
    github: "https://github.com/Adsharma18/AiCareerCoachClean",
    webapp: "https://ai-career-coach-clean.vercel.app/", // replace with actual live URL
  }

];
