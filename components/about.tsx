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
          <p>
  After graduating with a Bachelor of Technology degree in{" "}
  <span className="italic">computer science and engineering</span>, I began my professional journey as a{" "}
  <span className="italic">Specialist Programmer at Infosys</span>, where I’ve been working for the past year.{" "}
  During this time, I’ve gained hands-on experience in{" "}
  <span className="italic">full-stack development</span> and sharpened my problem-solving skills using technologies like{" "}
  <span className="italic">Java, Spring Boot, Python, React with TypeScript, and SQL</span>.{" "}
  I'm particularly drawn to emerging technologies, especially{" "}
  <span className="italic">artificial intelligence, machine learning, and generative AI</span>.
  <br /><br />
  <span className="italic">What I enjoy most about programming</span> is the challenge of solving complex problems and creating thoughtful, efficient solutions. 
  I'm always striving to grow—currently diving into game development as a side passion. 
  My core stack includes{" "}
  <span className="italic">Java, Spring Boot, Microservices, React, TypeScript, and SQL</span>.{" "}
  I'm also comfortable with Python and generative AI tools. I'm currently seeking a{" "}
  <span className="italic">full-time position</span> as a software developer where I can make an impact and keep learning.
<br /><br />
  Outside of work, I enjoy spending time{" "}
  <span className="italic">playing video games, writing, watching series, and going on treks</span>.{" "}
  I’m a curious learner with a deepening interest in{" "}
  <span className="italic">history, storytelling, and interactive design</span>, which often inspires how I think about user experience and creativity in tech.
</p>
    </motion.section>
  );
}
