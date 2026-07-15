import { Link } from "react-router-dom";
import { projects } from "../projectsData.js";

function ProjectCard({ project, offset = false }) {
  return (
    <Link to={`/projects/${project.slug}`} className={`group block ${offset ? "lg:mt-[64px]" : ""}`}>
      <div className="relative aspect-[1.31] overflow-hidden rounded-[8px] bg-ink">
        <img
          src={project.image}
          alt={project.alt}
          className="absolute left-0 right-0 top-[-118px] h-[calc(100%+140px)] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.045] max-[760px]:top-0 max-[760px]:h-full"
        />
      </div>
      <div className="mt-[12px] flex items-start justify-between gap-5 text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.2] tracking-[-0.9px] text-ink">
        <span>{project.title}</span>
        <span>{project.index}</span>
      </div>
    </Link>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-[92px] text-ink max-[900px]:py-16 max-[480px]:py-12">
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:grid max-[700px]:gap-2">
          <p>[02]</p>
          <p className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">[ Development ]</p>
          <p>Works</p>
        </div>

        <div className="mt-[54px] grid grid-cols-[minmax(0,0.62fr)_minmax(280px,0.38fr)] gap-10 max-[900px]:grid-cols-1">
          <h2 className="text-[clamp(48px,6.53vw,94px)] font-bold uppercase leading-[1] tracking-[-0.045em] text-[rgb(23,23,23)] max-[480px]:text-[42px]">
            Projects
            <br />
            (27)
          </h2>
          <p className="max-w-[390px] justify-self-end pt-[50px] text-left text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.2] tracking-[-0.9px] text-[rgb(23,23,23)] max-[900px]:justify-self-start max-[900px]:pt-0 max-[480px]:text-[18px]">
            A few live websites we have helped build
            <br />
            across different industries.
          </p>
        </div>

        <div className="mt-[70px] grid grid-cols-2 gap-x-[16px] gap-y-[60px] max-[760px]:grid-cols-1 max-[760px]:gap-y-10 max-[480px]:mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} offset={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
