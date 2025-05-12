import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pghubImg from "@/public/PgHub.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import mysoreImg from "@/public/MysoreProject.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated from Malaviya National Institute of Technology",
    location: "Jaipur, Rajasthan",
    description:
      "I completed my 4 years Bachelor of Technology Course in Computer Science and Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },
  {
    title: "Specialist Programmer",
    location: "Pune, India",
    description:
      "I am currently working as a specialist programmer for the past year. I was trained in Java Springboot and React with Typescript during my 3 months Mysore training. I have been working on Java Springboot and Python applications. I also upskilled in Generative AI during my time here.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Agent Management System",
    description:
      "I worked on this project during Infosys Mysore Training. Agents can manage customers and their associated policy.",
    tags: ["Java", "Springboot", "JWT", "React", "Typescript", "Git", "MySQL"],
    imageUrl: mysoreImg,
  },
  {
    title: "PG Hub",
    description:
      "A PG Management system where users get notifications about PG menu shared by the chefs for the day.",
    tags: ["Java", "Springboot", "JWT", "React-Native", "Typescript", "Tailwind", "PostgreSQL"],
    imageUrl: pghubImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Springboot",
  "Microservices",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "HTML",
  "CSS",
  "Tailwind",
  "C++",
  "MongoDB",
  "AWS",
  "GraphQL",
  "Apollo",
  "MySQL",
  "PostgreSQL",
  "Python",
  "Azure",
  "AI",
  "Machine Learning",
  "Generative AI"
] as const;
