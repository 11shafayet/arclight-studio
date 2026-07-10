import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative overflow-hidden rounded-lg text-ink"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="aspect-[4/5] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.alt}
            className="h-full w-full object-cover"
            variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-ink backdrop-blur-md">
          <div className="mb-3 flex items-center justify-between text-sm font-semibold text-ink/55">
            <span>{project.index}</span>
            <span>VIEW</span>
          </div>
          <div className="overflow-hidden">
            <motion.div
              className="flex w-max gap-8 whitespace-nowrap text-3xl font-black md:text-5xl"
              variants={{ rest: { x: 0 }, hover: { x: "-50%" } }}
              transition={{ duration: 4, ease: "linear", repeat: Infinity }}
            >
              <span>{project.title}</span>
              <span>{project.title}</span>
              <span>{project.title}</span>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
