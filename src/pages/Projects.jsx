import SectionTag from "../components/SectionTag.jsx";
import RevealOnScroll, { reveal } from "../components/RevealOnScroll.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { allProjects } from "../data.js";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section className="section-pad min-h-screen pt-36">
      <RevealOnScroll className="container-page">
        <SectionTag number="02" left="Works" right="// Creative Development" />
        <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
          <motion.h1 variants={reveal} className="display">Projects (27)</motion.h1>
          <motion.p variants={reveal} className="text-lg leading-8 text-ink/62">From concept to code, we transform ambitious ideas into refined, interactive digital realities. Every case study reflects clean handoff, responsive delivery, and quiet execution.</motion.p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </RevealOnScroll>
    </section>
  );
}
