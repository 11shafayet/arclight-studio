import { Link, useParams } from "react-router-dom";
import { projects } from "../projectsData.js";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen px-8 pt-36 text-ink">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-2xl font-semibold">Project not found.</p>
          <Link to="/" className="mt-6 inline-block underline">
            Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-8 pb-24 pt-36 text-ink">
      <div className="mx-auto max-w-[1440px]">
        <Link to="/#projects" className="font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink/70">
          Back to projects
        </Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[0.4fr_0.6fr]">
          <div>
            <p className="font-mono text-[14px] font-medium text-ink/60">{project.index}</p>
            <h1 className="mt-4 text-[72px] font-bold uppercase leading-[0.96] tracking-[-3.2px] max-[900px]:text-[48px]">
              {project.title}
            </h1>
          </div>
          <div className="overflow-hidden rounded-[8px] bg-ink">
            <img src={project.image} alt={project.alt} className="h-full min-h-[520px] w-full object-cover object-center" />
          </div>
        </div>
      </div>
    </main>
  );
}
