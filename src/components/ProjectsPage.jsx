import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FaqSection from "./FaqSection.jsx";
// import Footer from "./Footer.jsx";
import { projects } from "../projectsData.js";

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { type: "spring", damping: 20, stiffness: 120, mass: 2 },
};

function CaseProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block w-full cursor-pointer no-underline">
      <div className="relative h-[560px] w-full overflow-hidden rounded-[10px] bg-ink max-[809px]:h-[340px] max-[480px]:h-[280px]">
        <img
          src={project.image}
          alt={project.alt}
          className="absolute inset-x-0 top-[-60px] h-[calc(100%+120px)] w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05] max-[480px]:top-0 max-[480px]:h-full"
        />
        <span className="absolute right-5 top-5 h-5 w-5 border-r-2 border-t-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-5 top-5 h-5 w-5 -rotate-90 border-r-2 border-t-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-5 right-5 h-5 w-5 rotate-90 border-r-2 border-t-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute bottom-5 left-5 h-5 w-5 rotate-180 border-r-2 border-t-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="mt-[14px] flex h-[25px] items-start justify-between gap-5 overflow-hidden text-[22px] font-medium leading-[1.2] tracking-[-1.3px] text-ink max-[480px]:text-[18px] max-[480px]:tracking-[-0.8px]">
        <span className="relative grid h-[25px] min-w-0 overflow-hidden whitespace-nowrap">
          <span className="transition-transform duration-500 ease-out group-hover:-translate-y-full">{project.title}</span>
          <span className="absolute left-0 top-full transition-transform duration-500 ease-out group-hover:-translate-y-full">{project.title}</span>
        </span>
        <span className="shrink-0">{project.index}</span>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <main className="relative overflow-hidden bg-[#ededed] px-0 py-0 text-ink">
        <section id="projects" className="relative z-10 px-8 pb-[120px] pt-[200px] max-[1199px]:pt-[180px] max-[809px]:px-6 max-[809px]:pb-20 max-[809px]:pt-[136px] max-[480px]:px-4 max-[480px]:pt-[120px]">
          <motion.div
            className="absolute left-[-427px] top-[-152px] z-[-1] h-[640px] w-[634px] bg-[radial-gradient(60%_90.9090909090909%_at_49.6%_52.3%,#59bbd5_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
            initial={{ opacity: 0.001, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 100, stiffness: 200, mass: 1, delay: 0.3 }}
          />

          <div className="mx-auto grid w-full max-w-[1380px] gap-10 max-[809px]:gap-14">
            <motion.div {...reveal} className="grid grid-cols-7 gap-6 overflow-hidden mix-blend-difference max-[809px]:flex max-[809px]:flex-col max-[809px]:items-start max-[809px]:overflow-visible max-[809px]:!translate-y-0 max-[809px]:!opacity-100">
              <p className="col-span-2 font-mono text-[14px] font-medium uppercase leading-[1.5] tracking-[-0.8px] text-ink">
                [ Case Studies ]
              </p>
              <div className="col-span-5 grid gap-[15px] overflow-hidden">
                <h1 className="text-[84px] font-bold uppercase leading-[86px] tracking-[-2.1px] text-ink max-[1199px]:text-[78px] max-[1199px]:leading-[80px] max-[809px]:text-[52px] max-[809px]:leading-[56px] max-[809px]:tracking-[-2.2px] max-[480px]:text-[44px] max-[480px]:leading-[48px]">
                  Selected
                  <br />
                  projects
                </h1>
                <div className="max-w-[720px] text-[18px] font-medium leading-[1.2] tracking-[-1px] text-ink max-[480px]:text-[16px]">
                  <p>Real work for real clients who needed more than pretty pictures.</p>
                  <p>Explore how we&apos;ve helped brands launch, scale, and transform through strategic design.</p>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 max-[1199px]:grid-cols-1">
              {projects.map((project) => (
                <CaseProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <FaqSection />
      {/* <Footer /> */}
    </>
  );
}
