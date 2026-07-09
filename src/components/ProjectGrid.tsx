import { projects } from '../data/site';

export function ProjectGrid() {
  return (
    <div className="grid gap-x-5 gap-y-11 md:grid-cols-2">
      {projects.map((project) => (
        <a key={project.title} href="#contact" className="group block">
          <div className="overflow-hidden rounded-md bg-white shadow-soft">
            <img
              src={project.image}
              alt=""
              className="aspect-[1.18/1] w-full object-cover transition duration-500 group-hover:scale-[1.035]"
            />
          </div>
          <div className="mt-2 flex items-center justify-between text-sm font-bold text-ink">
            <span>{project.title}</span>
            <span>[{project.number}]</span>
          </div>
        </a>
      ))}
    </div>
  );
}
