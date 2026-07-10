import { Link, useParams } from "react-router-dom";
import { allProjects } from "../data.js";
import PillButton from "../components/PillButton.jsx";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = allProjects.find((item) => item.slug === slug);

  return (
    <section className="section-pad min-h-screen pt-36">
      <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_0.6fr]">
        <div>
          <p className="mb-5 font-mono text-ink/45">{project?.index || "[ -- ]"}</p>
          <h1 className="display">{project?.title || "Project"}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/62">Case study details are coming soon. The landing and projects grid demonstrate the static clone interactions and layout.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PillButton to="/projects" dark>Back to Projects</PillButton>
            <Link to="/contact" className="inline-flex items-center rounded-full border border-ink/15 px-5 py-3 text-sm font-semibold">Start Similar Build</Link>
          </div>
        </div>
        {project && <img src={project.image} alt={project.alt} className="rounded-lg object-cover" />}
      </div>
    </section>
  );
}
