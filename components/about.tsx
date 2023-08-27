"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Information Technology</span>, I want to expand my
        passion in IT. Previously I was in college while working as{" "} <span className="font-medium">IT support</span> 
        until now. I am interested in learning about{" "} <span className="font-medium">DevOps</span> 
        I enrolled some course and learned{" "}<span className="font-medium">Linux, CI/CD, Git, Docker, Cloud</span>.{" "}
        <span className="italic">My favorite part of DevOps</span> is the
        problem-solving aspect and deploy application. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. 
        . I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a DevOps Engineer.
      </p>

      <p>
        <span className="italic">When I'm not Working</span>, I enjoy playing
        games, watching movies, and sometimes i make content about computer. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. 
      </p>
    </motion.section>
  );
}
