import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer.jsx";
import { projects } from "../projectsData.js";

const reveal = {
  initial: { opacity: 0, y: 48 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.35 },
  transition: { type: "spring", damping: 20, stiffness: 120, mass: 2 },
};

function ProjectButton({ href }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative inline-flex h-9 cursor-pointer items-center overflow-visible rounded-full text-[16px] font-medium leading-none tracking-[-0.8px]"
    >
      <span className="absolute left-0 top-1/2 z-10 grid h-8 w-8 -translate-y-1/2 place-items-center overflow-hidden rounded-full bg-white text-ink transition-colors duration-500 group-hover:bg-acid">
        <motion.span variants={{ rest: { rotate: 0 }, hover: { rotate: 45 } }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          <Plus className="h-[14px] w-[14px]" strokeWidth={2.2} />
        </motion.span>
      </span>
      <span className="relative overflow-hidden rounded-full bg-ink py-[10px] pl-11 pr-4 text-white">
        <motion.span
          className="absolute h-[190px] w-[190px] rounded-full bg-white"
          variants={{
            rest: { left: 70, top: 41, scale: 0.095 },
            hover: { left: -16, top: -101, scale: 1 },
          }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        />
        <span className="relative z-10 grid h-[18px] overflow-hidden leading-[18px]">
          <motion.span variants={{ rest: { y: 0, color: "#ffffff" }, hover: { y: "-100%", color: "#171717" } }} transition={{ duration: 0.45, ease: [0.82, 0.08, 0.29, 1] }}>
            Live Website
          </motion.span>
          <motion.span className="absolute left-0 top-full text-ink" variants={{ rest: { y: 0 }, hover: { y: "-100%" } }} transition={{ duration: 0.45, ease: [0.82, 0.08, 0.29, 1] }}>
            Live Website
          </motion.span>
        </span>
      </span>
      <span className="absolute -right-[11px] -top-[27px] z-20 grid h-[14px] w-[14px] place-items-center text-ink">
        <motion.span variants={{ rest: { rotate: 30, opacity: 0 }, hover: { rotate: 0, opacity: 1 } }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
          <ArrowUpRight className="h-[14px] w-[14px]" strokeWidth={2.2} />
        </motion.span>
      </span>
    </motion.a>
  );
}

function MetaRow({ label, value }) {
  if (!value) return null;

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between gap-6 font-mono text-[14px] font-medium uppercase leading-[1.5] tracking-[-0.8px]">
        <span className="text-[#666]">{label}</span>
        <span className="max-w-[62%] text-right text-ink">{value}</span>
      </div>
      <div className="h-px w-full bg-[#dddddd]" />
    </div>
  );
}

function DetailImage({ image, index }) {
  return (
    <div className="overflow-hidden rounded-[10px] bg-ink">
      <motion.img
        src={image.src}
        alt={image.alt}
        className="h-auto w-full origin-center rounded-[10px] object-cover"
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.44, 0, 0.56, 1], delay: index * 0.03 }}
      />
    </div>
  );
}

function HeaderBar({ rollNo = "[02]", title = "[ More Projects ]", right = "Related" }) {
  return (
    <div className="flex w-full flex-col gap-3 font-mono text-[14px] font-medium uppercase leading-[1.5] tracking-[-0.8px] text-ink">
      <div className="relative flex items-center justify-between">
        <span>{rollNo}</span>
        <span className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">{title}</span>
        <span>{right}</span>
      </div>
      <div className="h-px w-full bg-ink/10" />
    </div>
  );
}

function RelatedCard({ project }) {
  return (
    <Link to={`/projects/${project.slug}`} className="group block cursor-pointer">
      <div className="relative h-[520px] overflow-hidden rounded-[10px] bg-ink max-[900px]:h-[340px] max-[480px]:h-[280px]">
        <img
          src={project.image}
          alt={project.alt}
          className="absolute inset-0 h-[calc(100%+120px)] w-full -translate-y-[60px] object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.05] max-[480px]:h-full max-[480px]:translate-y-0"
        />
        {["right-5 top-5", "left-5 top-5 -rotate-90", "bottom-5 right-5 rotate-90", "bottom-5 left-5 rotate-180"].map((position) => (
          <span key={position} className={`absolute h-5 w-5 border-r-2 border-t-2 border-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${position}`} />
        ))}
      </div>
      <div className="mt-[14px] flex h-[25px] items-start justify-between gap-5 overflow-hidden text-[22px] font-medium leading-[1.2] tracking-[-1.3px] text-ink max-[480px]:text-[18px] max-[480px]:tracking-[-0.8px]">
        <span className="relative grid h-[25px] min-w-0 overflow-hidden whitespace-nowrap">
          <span className="transition-transform duration-500 ease-out group-hover:-translate-y-full">{project.title}</span>
          <span className="absolute left-0 top-full transition-transform duration-500 ease-out group-hover:-translate-y-full">{project.title}</span>
        </span>
        <span>{project.index}</span>
      </div>
    </Link>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen px-6 pt-40 text-ink">
        <div className="mx-auto max-w-[1380px]">
          <p className="text-[38px] font-semibold uppercase leading-[44px] tracking-[-1px]">Project not found.</p>
          <Link to="/#projects" className="mt-6 inline-block font-mono text-[14px] font-medium uppercase tracking-[-0.8px] underline">
            Back to projects
          </Link>
        </div>
      </main>
    );
  }

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);

  return (
    <>
      <main className="relative overflow-hidden bg-paper px-5 pb-[140px] pt-[300px] text-ink max-[1199px]:pt-[260px] max-[809px]:px-0 max-[809px]:pb-20 max-[809px]:pt-[160px] max-[480px]:pt-[132px]">
        <section className="relative z-10 px-8 pb-[120px] max-[809px]:px-6 max-[809px]:pb-20 max-[480px]:px-4">
          <div className="mx-auto flex w-full max-w-[1380px] items-start justify-center gap-[50px] max-[1199px]:flex-col">
            <aside className="sticky top-[130px] w-[calc(45%-25px)] overflow-hidden py-[30px] max-[1199px]:static max-[1199px]:w-full max-[1199px]:py-0">
              <motion.div {...reveal} className="flex flex-col items-end gap-[60px] overflow-hidden max-[1199px]:items-start max-[809px]:!translate-y-0 max-[809px]:!opacity-100 max-[480px]:gap-9">
                <div className="grid w-full gap-5">
                  <h1 className="max-w-full break-words text-[84px] font-bold uppercase leading-[86px] tracking-[-2.1px] text-ink max-[1199px]:text-[78px] max-[1199px]:leading-[80px] max-[809px]:text-[52px] max-[809px]:leading-[56px] max-[809px]:tracking-[-2.2px] max-[480px]:text-[40px] max-[480px]:leading-[43px]">
                    {project.title}
                  </h1>
                  <p className="whitespace-pre-line text-[22px] font-medium leading-[1.2] tracking-[-1.3px] text-ink max-[480px]:text-[18px] max-[480px]:tracking-[-0.8px]">
                    {project.description}
                  </p>
                  {project.website && <ProjectButton href={project.website} />}
                </div>

                <div className="grid w-full gap-4">
                  <MetaRow label="Year" value={project.year} />
                  <MetaRow label="Industry" value={project.industry} />
                  <MetaRow label="Category" value={project.platform} />
                </div>
              </motion.div>
            </aside>

            <div className="grid w-[55%] gap-4 border-l border-[#dddddd] pl-6 max-[1199px]:w-full max-[1199px]:border-l-0 max-[1199px]:pl-0">
              {(project.detailImages?.length ? project.detailImages : [{ src: project.image, alt: project.alt }]).map((image, index) => (
                <DetailImage key={`${image.src}-${index}`} image={image} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative z-10 px-8 pb-[160px] pt-[100px] max-[809px]:px-6 max-[809px]:py-20 max-[480px]:px-4">
          <div className="mx-auto grid w-full max-w-[1380px] gap-10">
            <div className="grid gap-12">
              <HeaderBar />
              <motion.h2
                {...reveal}
                className="text-[94px] font-bold uppercase leading-[94px] tracking-[-3px] text-ink mix-blend-difference max-[1199px]:text-[90px] max-[809px]:text-[52px] max-[809px]:leading-[52px] max-[480px]:text-[42px] max-[480px]:leading-[42px]"
              >
                More
                <br />
                Projects
              </motion.h2>
            </div>
            <div className="grid grid-cols-2 gap-5 max-[900px]:grid-cols-1">
              {related.map((item) => (
                <RelatedCard key={item.slug} project={item} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
