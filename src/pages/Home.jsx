import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowDownRight } from "lucide-react";
import SectionTag from "../components/SectionTag.jsx";
import RevealOnScroll, { reveal, stagger } from "../components/RevealOnScroll.jsx";
import PillButton from "../components/PillButton.jsx";
import Marquee from "../components/Marquee.jsx";
import Counter from "../components/Counter.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { AccordionItem } from "../components/Accordion.jsx";
import ContactForm from "../components/ContactForm.jsx";
import { clients, confirmedProjects } from "../data.js";

const services = [
  {
    number: "01",
    title: "Figma to WordPress",
    copy: "Approved designs turned into clean, responsive WordPress websites. Built on ACF or the editor your team already uses, no bloated page builders unless you ask.",
    image: "https://framerusercontent.com/images/Ji59S5HRdPuDCP52J2ZL4VLsc.png?width=1080&height=1350",
  },
  {
    number: "02",
    title: "Figma to Framer",
    copy: "Fast, polished Framer builds for landing pages and marketing sites. Animations and interactions included, ready to publish under your client's domain.",
    image: "https://framerusercontent.com/images/OWdbov1TE4Pa6DW8ymYk1tdVPk.png?width=1080&height=1350",
  },
  {
    number: "03",
    title: "Ongoing Site Support",
    copy: "Updates, fixes, and small builds for sites we've delivered or sites you're stuck maintaining. A dev team on call without the retainer overhead.",
    image: "https://framerusercontent.com/images/56SSO7llUi7gvuYrl3MnrgGsuQ.png?width=1080&height=1350",
  },
];

const steps = [
  ["Send the approved design", "Share the Figma file, page list, scope, assets, and timeline."],
  ["We review the project", "We check the design, structure, responsive needs, and possible technical issues before writing a line of code."],
  ["Development starts", "We build the site in WordPress or Framer, with desktop, tablet, and mobile handled from the start."],
  ["QA before delivery", "We test layouts, spacing, forms, links, SEO basics, and functionality before you ever see the build."],
  ["White-label handoff", "You receive a clean build under your agency's brand, ready to present to your client. One revision round included."],
];

const faqs = [
  ["Do you work white-label?", "Yes. We stay behind the scenes, follow your process, and deliver under your agency's brand."],
  ["Do you communicate with our clients?", "Only if you ask us to. Most projects run directly through your team so the client relationship stays with you."],
  ["What do you need to start?", "A final Figma file, page list, assets, preferred platform, timeline, and any notes about forms or integrations."],
  ["Do you build in WordPress or Framer?", "Both. WordPress works well for editable content and larger sites; Framer is strong for fast marketing pages and polished motion."],
  ["Are revisions included?", "One focused revision round is included after QA. Larger scope changes are estimated before we proceed."],
  ["Do you offer support after launch?", "Yes. We can handle small fixes, updates, and new sections after the initial handoff."],
  ["Can we start with a small task?", "Yes. A single test page is the preferred way to check fit before sending a larger project."],
];

function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pt-28">
      <motion.div variants={stagger} initial="hidden" animate="show" className="container-page relative z-10 pb-14 md:pb-24">
        <motion.div variants={reveal} className="mb-14 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-ink/14 px-4 py-2 text-xs font-bold uppercase text-ink/75">White-label WordPress & Framer development</span>
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/14 px-4 py-2 text-xs font-bold uppercase text-ink/75">
            <span className="h-2 w-2 rounded-full bg-acid" /> Working Worldwide
          </span>
        </motion.div>
        <motion.h1 variants={reveal} className="headline max-w-full md:whitespace-nowrap">
          WE BUILD. YOU TAKE THE CREDIT.
        </motion.h1>
        <motion.div variants={reveal} className="mt-10">
          <PillButton to="/contact" dark dot>Send a Test Project</PillButton>
        </motion.div>
      </motion.div>
    </section>
  );
}

function BrandingStripe() {
  return (
    <section className="text-ink">
      <RevealOnScroll className="container-page grid gap-8 py-12 lg:grid-cols-[0.35fr_1fr]">
        <motion.p variants={reveal} className="text-sm font-black uppercase text-ink/55">For Branding Studios</motion.p>
        <motion.div variants={reveal}>
          <h2 className="max-w-5xl text-3xl font-black leading-tight md:text-6xl">We build your client sites under your brand. You keep the relationship, the credit, and the margin.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {["6+ Years Experience", "WordPress", "Framer", "NDA Friendly"].map((item) => (
              <span key={item} className="rounded-full border border-ink/12 px-4 py-2 text-sm font-bold">{item}</span>
            ))}
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}

function DeliveryProof() {
  return (
    <section className="section-pad">
      <RevealOnScroll className="container-page">
        <SectionTag number="01" left="[ Delivery Proof ]" right="// White-label build support" />
        <div className="grid gap-5 md:grid-cols-2">
          {[["40", "Live Projects"], ["6", "Years Experience"]].map(([target, label]) => (
            <motion.div key={label} variants={reveal} className="rounded-lg border border-ink/12 p-8">
              <Counter target={Number(target)} className="text-7xl font-black md:text-9xl" />
              <p className="mt-3 text-xl font-semibold text-ink/65">{label}</p>
            </motion.div>
          ))}
        </div>
        <motion.h2 variants={reveal} className="display mt-16 max-w-6xl text-center md:mx-auto">APPROVED DESIGNS SHIPPED WITHOUT DEVELOPMENT DRAMA.</motion.h2>
        <motion.div variants={reveal} className="mt-8 flex justify-center gap-3">
          <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-black text-ink">NDA-FRIENDLY</span>
          <span className="rounded-full border border-ink/15 px-4 py-2 text-xs font-black text-ink">WHITE-LABEL DELIVERY</span>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}

function Works({ full = false }) {
  const projects = full ? confirmedProjects : confirmedProjects;
  return (
    <section className="section-pad text-ink">
      <RevealOnScroll className="container-page">
        <SectionTag number="02" left="Works" right="// Creative Development" />
        <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
          <motion.h2 variants={reveal} className="display">Projects (27)</motion.h2>
          <motion.p variants={reveal} className="text-lg leading-8 text-ink/62">From concept to code, we transform ambitious ideas into refined, interactive digital realities. Every case study reflects clean handoff, responsive delivery, and quiet execution.</motion.p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </RevealOnScroll>
    </section>
  );
}

function ServiceRow({ service, reverse }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-28, 28]);
  return (
    <motion.div ref={ref} variants={reveal} className={`grid gap-8 border-t border-ink/12 py-10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="overflow-hidden rounded-lg">
        <motion.img style={{ y }} src={service.image} alt="" className="h-full min-h-[360px] w-full object-cover" />
      </div>
      <div className="flex flex-col justify-center">
        <p className="mb-8 font-mono text-ink/45">[{service.number}]</p>
        <h3 className="text-4xl font-black md:text-7xl">{service.title}</h3>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/62">{service.copy}</p>
      </div>
    </motion.div>
  );
}

function Services() {
  return (
    <section className="section-pad">
      <RevealOnScroll className="container-page">
        <SectionTag number="03" left="Vision to Victory(TM)" right="// Services" />
        <motion.h2 variants={reveal} className="display max-w-6xl">Development support where agencies usually get stuck.</motion.h2>
        <motion.p variants={reveal} className="mt-4 text-xl font-black uppercase text-acid">We turn vision into victory</motion.p>
        <div className="mt-12">
          {services.map((service, index) => <ServiceRow key={service.title} service={service} reverse={index % 2 === 1} />)}
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Pricing() {
  return (
    <section className="section-pad text-ink">
      <RevealOnScroll className="container-page">
        <SectionTag number="04" left="Pricing" right="// Start Small" />
        <div className="grid gap-8 lg:grid-cols-[0.8fr_0.6fr]">
          <motion.h2 variants={reveal} className="display">Start with one page.</motion.h2>
          <motion.div variants={reveal} className="rounded-lg border border-ink/12 p-8 text-ink">
            <p className="text-lg font-semibold text-ink/55">Test page starts from</p>
            <p className="mt-2 text-7xl font-black">$300</p>
            <p className="mt-6 leading-7 text-ink/65">Includes a full responsive build of one approved design, desktop, tablet, and mobile, with QA and white-label handoff.</p>
            <div className="mt-8"><PillButton to="/contact" dark>Send a Test Project</PillButton></div>
            <p className="mt-5 text-sm text-ink/45">No retainer. No commitment. If the build isn't up to standard, don't pay.</p>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Process() {
  return (
    <section className="section-pad">
      <RevealOnScroll className="container-page">
        <SectionTag number="05" left="[ Simple process ]" right="[ Clean Handoff ]" />
        <motion.h2 variants={reveal} className="display">Our Process</motion.h2>
        <motion.p variants={reveal} className="mt-4 text-xl text-ink/62">Built for teams that need reliable development support.</motion.p>
        <div className="relative mt-14">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 1.2 }} className="absolute left-4 top-0 hidden h-full w-px origin-top bg-ink/22 md:block" />
          <div className="grid gap-4">
            {steps.map(([title, copy], index) => (
              <motion.div key={title} variants={reveal} className="grid gap-4 rounded-lg border border-ink/12 p-6 md:grid-cols-[80px_0.45fr_1fr] md:border-0">
                <span className="font-mono text-ink/45">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="leading-7 text-ink/62">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section-pad text-ink">
      <RevealOnScroll className="container-page">
        <SectionTag number="06" left="Client Experience" right="// Testimonial" />
        <motion.h2 variants={reveal} className="display">Client Experience</motion.h2>
        <motion.p variants={reveal} className="mt-4 max-w-3xl text-lg leading-8 text-ink/62">A direct note from a client on strategic thinking, clarity, and dependable delivery.</motion.p>
        <div className="mt-12 grid gap-5 lg:grid-cols-[1fr_0.35fr]">
          <motion.div variants={reveal} className="rounded-lg border border-ink/12 p-8 text-ink md:p-12">
            <p className="text-sm font-black uppercase text-acid">Strategic partner. Clear thinking. Dependable delivery.</p>
            <blockquote className="mt-8 text-3xl font-black leading-tight md:text-6xl">Farzana offers a rare strategic partnership. Her work blends authentic brand voice, precise messaging, and emotional appeal.</blockquote>
            <p className="mt-8 text-ink/60">Maria Gusakova - CEO Advisor & Executive Coach | Ex-McKinsey Partner</p>
          </motion.div>
          <motion.div variants={reveal} className="grid gap-5">
            <div className="rounded-lg border border-ink/12 p-6"><Counter target={40} className="text-6xl font-black" /><p className="mt-2 font-semibold text-ink/55">Live Projects</p></div>
            <div className="rounded-lg border border-ink/12 p-6"><p className="text-2xl font-black">She does great work. Highly recommended</p><p className="mt-6 text-ink/55">Jeane Bope, Founder / Creative Director at Bope Design</p></div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-pad">
      <RevealOnScroll className="container-page">
        <SectionTag number="07" left="Got Questions?" right="// FAQ" />
        <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr]">
          <motion.div variants={reveal} className="overflow-hidden rounded-lg">
            <img src="https://framerusercontent.com/images/YiXbrsEktaIQ0NPFj8Hsbk8zXM.png?width=1080&height=1350" alt="" className="h-full min-h-[420px] w-full object-cover" />
          </motion.div>
          <motion.div variants={reveal}>
            {faqs.map(([question, answer], index) => <AccordionItem key={question} question={question} answer={answer} defaultOpen={index === 0} />)}
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-pad text-ink" id="contact">
      <RevealOnScroll className="container-page">
        <SectionTag number="08" left="[ Ready to Start? ]" right="(Start a Conversation)" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <motion.div variants={reveal}>
            <p className="mb-4 text-sm font-black uppercase text-ink/45">- Let's Connect</p>
            <h2 className="display">Have an approved design ready for development?</h2>
            <p className="mt-8 text-lg leading-8 text-ink/62">Always Connected - hello@arclight.studio</p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/62">Send it over. We'll reply with how we'd handle the build, scope, timeline, and price.</p>
          </motion.div>
          <motion.div variants={reveal} className="rounded-lg border border-ink/12 p-5">
            <ContactForm />
            <p className="mt-5 text-sm text-ink/45">Our team replies within 24 hours</p>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <BrandingStripe />
      <section id="worked-with" className="py-12">
        <div className="container-page mb-6 flex items-center gap-3 text-sm font-bold text-ink/55"><ArrowDownRight className="h-4 w-4" /> /Worked with</div>
        <Marquee items={clients} />
      </section>
      <DeliveryProof />
      <Works />
      <Services />
      <Pricing />
      <Process />
      <Testimonial />
      <FAQ />
      <FinalCTA />
    </>
  );
}
