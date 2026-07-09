import { motion } from 'framer-motion';
import { ArrowUpRight, Check, Plus } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ProjectGrid } from './components/ProjectGrid';
import { SectionKicker } from './components/SectionKicker';
import { faqs, processSteps } from './data/site';

function App() {
  return (
    <div id="home" className="min-h-screen overflow-hidden bg-paper text-ink">
      <Header />
      <main>
        <HeroSection />

        <section id="projects" className="px-5 py-20 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="02" label="Selected Development" meta="Work" />
            <div className="mt-14 grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
              <div className="lg:sticky lg:top-24 lg:self-start">
                <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] font-black uppercase leading-[0.85]">
                  Projects
                  <br />
                  (27)
                </h2>
                <p className="mt-8 max-w-xs text-sm font-bold leading-tight text-ink/70">
                  A few live websites I have helped build across different industries.
                </p>
              </div>
              <ProjectGrid />
            </div>
          </div>
        </section>

        <section className="px-5 py-28 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="03" label="Approach" meta="Why it works" />
            <div className="mt-14 grid gap-9 lg:grid-cols-[.8fr_1.2fr]">
              <h2 className="font-display text-[clamp(2.7rem,6.2vw,6.8rem)] font-black uppercase leading-[0.86] text-ink/55">
                Where agencies usually get stuck.
              </h2>
              <div className="grid gap-4">
                {['Overbooked production team', 'Project handoff gaps', 'Changing CMS requests'].map((item, index) => (
                  <div key={item} className="grid grid-cols-[44px_1fr] gap-5 border-b border-ink/10 py-5">
                    <span className="font-mono text-xs font-bold text-ink/35">0{index + 1}</span>
                    <div>
                      <h3 className="font-bold">{item}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/55">
                        We keep the build process focused, scoped, and practical so the final site is easy to ship.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink/5 px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="04" label="Start" meta="One page" />
            <div className="mx-auto mt-16 max-w-4xl bg-white p-8 text-center shadow-soft sm:p-14">
              <p className="font-mono text-xs font-bold uppercase text-ink/45">Minimum project</p>
              <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,5rem)] font-black uppercase leading-none">
                Start with one page.
              </h2>
              <a
                href="#contact"
                className="mt-9 inline-flex h-8 items-center gap-1.5 rounded-full bg-ink px-3 text-[11px] font-bold text-white"
              >
                <ArrowUpRight size={14} />
                Send Us Your Project
              </a>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="05" label="Our Process" meta="How we work" />
            <div className="mt-14 grid gap-10 lg:grid-cols-[.65fr_1.35fr]">
              <div>
                <h2 className="font-display text-[clamp(3rem,7vw,7.5rem)] font-black uppercase leading-[0.85]">
                  Our
                  <br />
                  Process
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {processSteps.map((step, index) => (
                  <article key={step.title} className="min-h-48 bg-white p-5 shadow-soft">
                    <span className="font-mono text-xs font-bold text-ink/35">0{index + 1}</span>
                    <h3 className="mt-9 font-bold leading-tight">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="06" label="Experience" meta="Client words" />
            <div className="mt-14 grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
              <div className="grid gap-5 sm:grid-cols-[.75fr_1fr]">
                <img src="/images/person-one.svg" alt="" className="h-full min-h-80 w-full rounded-md object-cover" />
                <div className="bg-white p-7 shadow-soft">
                  <h2 className="font-display text-4xl font-black uppercase leading-none">Strategic partner, clear thinking, dependable delivery.</h2>
                  <p className="mt-10 text-sm leading-relaxed text-ink/60">
                    Arclight created a calm delivery process from the first call. The final site matched the design,
                    performed well, and launched on schedule.
                  </p>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Metric number="14+" label="Live Projects" />
                <Metric number="98%" label="Highly Recommended" />
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="07" label="FAQ" meta="Got questions?" />
            <div className="mt-14 grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
              <img src="/images/project-dashboard.svg" alt="" className="max-h-48 w-full rounded-md object-cover lg:max-w-sm" />
              <div className="divide-y divide-ink/10 bg-white shadow-soft">
                {faqs.map((faq) => (
                  <button key={faq} className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-sm font-bold">
                    {faq}
                    <Plus size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-[1440px]">
            <SectionKicker index="08" label="Contact" meta="Get in touch" />
            <h2 className="mt-14 font-display text-[clamp(4rem,14vw,14rem)] font-black uppercase leading-[0.82]">
              Contact Us.
            </h2>
            <div className="mt-14 grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
              <div>
                <h3 className="text-2xl font-bold leading-tight">Have an approved design ready for development?</h3>
                <p className="mt-5 max-w-md text-lg leading-snug text-ink/60">
                  Send it over. We'll reply with how we'd handle the build, scope, timeline, and price.
                </p>
              </div>
              <div>
                <ContactForm />
                <div className="mt-11 border-b border-ink/10 pb-6">
                  <h3 className="text-2xl font-bold">Contact</h3>
                  <a href="mailto:hey@arclight.studio.com" className="mt-3 inline-block text-lg font-bold underline">
                    hey@ARCLIGHT.studio.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2">
              <TeamCard image="/images/person-one.svg" label="Farzana Rahman / Founder - Arclight" />
              <TeamCard image="/images/person-two.svg" label="Shafayetur Rahman / Developer - Arclight" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

const heroReveal = {
  hidden: { opacity: 1, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 220, damping: 42, mass: 1, delay },
  }),
};

const heroClients = [
  'zeitgeistandco',
  'mgexecutivecoach',
  'clickodigital',
  'innovazione-futura.ag',
  'hank-hirth.de',
];

function HeroSection() {
  const marqueeItems = [...heroClients, ...heroClients, ...heroClients, ...heroClients];

  return (
    <section className="relative min-h-[862px] overflow-hidden px-6 pb-14 pt-[60px] sm:px-8">
      <div className="hero-ruler" />
      <div className="site-glow site-glow-lime" />
      <div className="site-glow site-glow-cyan" />

      <div className="relative mx-auto max-w-[1440px]">
        <motion.div
          className="grid gap-[10px] font-geist text-lg font-medium leading-[21.6px] text-ink lg:grid-cols-[676px_676px]"
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <p>WHITE-LABEL WORDPRESS &amp; FRAMER DEVELOPMENT</p>
          <p>Working Worldwide</p>
        </motion.div>

        <motion.div
          className="mt-0"
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          custom={0.45}
        >
          <h1 className="inline-block origin-left scale-x-[0.622] whitespace-nowrap font-geist text-[clamp(5rem,8.94vw,128.7px)] font-bold uppercase leading-[1.088] tracking-normal text-ink">
            WE BUILD. YOU TAKE THE CREDIT.
          </h1>
        </motion.div>

        <div className="mt-[14px] grid grid-cols-[1fr_455px] items-start gap-5">
          <motion.a
            href="#contact"
            className="group inline-flex h-[35px] w-fit items-center rounded-full bg-ink pr-4 font-geist text-base font-medium leading-[35.2px] text-white"
            variants={heroReveal}
            initial="hidden"
            animate="visible"
            custom={0.6}
            whileHover={{ scale: 1.04, backgroundColor: '#ffffff', color: '#171717' }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mr-2 grid size-[35px] place-items-center rounded-full border-2 border-ink bg-white text-ink">
              <PlusIcon />
            </span>
            [ Send a Test Project ]
          </motion.a>

          <motion.div
            variants={heroReveal}
            initial="hidden"
            animate="visible"
            custom={0.72}
          >
            <p className="inline-block origin-left scale-x-[0.8] whitespace-nowrap font-geist text-[40px] font-bold uppercase leading-[46px] text-ink">
              FOR BRANDING STUDIOS
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-[79px] grid grid-cols-[minmax(0,993px)_1fr] items-start gap-5"
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          custom={0.86}
        >
          <h5 className="max-w-[993px] font-geist text-[22px] font-medium leading-[26.4px] text-ink">
            We build your client sites under your brand. You keep the relationship, the credit, and the margin.
          </h5>
          <div className="mt-[19px] flex justify-end gap-[13px] font-geist text-xs font-medium leading-[14.4px] text-[#393939]">
            <span>6+ Years Experience</span>
            <span>Wordpress</span>
            <span>Framer</span>
            <span>NDA Friendly</span>
          </div>
        </motion.div>

        <motion.div
          className="mt-[213px] flex items-center overflow-visible font-geist text-[22px] font-medium leading-[26.4px]"
          variants={heroReveal}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          <h5 className="mr-8 shrink-0 text-ink">/Worked with</h5>
          <div className="relative min-w-0 flex-1 overflow-hidden">
            <motion.div
              className="flex w-max gap-8"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 120, ease: 'linear', repeat: Infinity }}
            >
              {marqueeItems.map((client, index) => (
                <a key={`${client}-${index}`} href="#projects" className="text-[#91918d]">
                  {client}
                </a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 3.5V12.5M3.5 8H12.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Stat({ number, label, className = '' }: { number: string; label: string; className?: string }) {
  return (
    <div className={className}>
      <p className="font-display text-4xl font-black uppercase">{number}</p>
      <p className="mt-1 font-mono text-[10px] font-bold uppercase text-ink/45">{label}</p>
    </div>
  );
}

function Metric({ number, label }: { number: string; label: string }) {
  return (
    <div className="bg-white p-7 shadow-soft">
      <Check size={18} />
      <p className="mt-12 font-display text-4xl font-black">{number}</p>
      <p className="mt-1 text-sm font-bold text-ink/55">{label}</p>
    </div>
  );
}

function TeamCard({ image, label }: { image: string; label: string }) {
  return (
    <figure>
      <img src={image} alt="" className="aspect-[1.34/1] w-full rounded-md object-cover" />
      <figcaption className="mt-3 text-center text-base font-bold">{label}</figcaption>
    </figure>
  );
}

export default App;
