import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Graduated from college",
    location: "Salemba, Jakarata",
    description:
      "I graduated with a major in Information Technology. Besides that I also study while working.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2022",
  },
  {
    title: "IT Support Assistant | PT. Vivo Mobile Indonesia",
    location: "PIK, Jakarta",
    description:
      "I worked as a IT Support Assistant for 1 years 9 months. My responsible is troubleshooting hardware and software, and also support the IT Project",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Senior IT Support | PT. Vivo Mobile Indonesia",
    location: "PIK, Jakarta",
    description:
      "I'm now a Senior IT Support with the same company. Besides, I support in the IT issues, I also made several projects. I'm also upskill to the DevOps.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Meeting Room Reservation System",
    description:
      "This is my final project when I studied in university based on problem when i working in company",
    tags: ["PHP", "CSS", "HTML", "Mysql", "Arduino", "C++"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Asset Management System",
    description:
      "I deploy local web application using the opensource program (Snipe-IT) for manage all asset in my company easier",
    tags: ["PHP", "HTML", "CSS", "Mysql", "JS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Helpdesk System",
    description:
      "I deploy local web application use the opensource program to make it easier for users to find tutorials on using the application or to overcome common problems in the application",
    tags: ["PHP", "HTML", "CSS", "Mysql"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Software Troubleshooting",
  "Hardware Torubleshooting",
  "Network Troubleshooting",
  "Cisco Networking",
  "Mikrotik",
  "Office Administration",
  "Linux Administration",
  "Git",
  "Docker",
  "AWS Cloud (Associate)",
  "Alibaba Cloud (Associate)",
  "Asset Management",
  "Network Administration",
  "Computer Maintenance",
  "HTML",
  "PHP",
  "Mysql",
  "Technical Support",
  "Web Development",
] as const;
