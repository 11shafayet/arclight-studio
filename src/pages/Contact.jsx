import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm.jsx";
import RevealOnScroll, { reveal } from "../components/RevealOnScroll.jsx";
import SectionTag from "../components/SectionTag.jsx";

export default function Contact() {
  return (
    <section className="section-pad min-h-screen pt-36">
      <RevealOnScroll className="container-page">
        <SectionTag number="08" left="[ Ready to Start? ]" right="(Start a Conversation)" />
        <div className="grid gap-10 lg:grid-cols-[0.9fr_0.7fr]">
          <motion.div variants={reveal}>
            <p className="mb-4 text-sm font-black uppercase text-ink/45">- Let's Connect</p>
            <h1 className="display">Have an approved design ready for development?</h1>
            <p className="mt-8 text-lg leading-8 text-ink/62">Always Connected - hello@arclight.studio</p>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/62">Send it over. We'll reply with how we'd handle the build, scope, timeline, and price.</p>
            <p className="mt-8 text-sm font-bold uppercase text-ink/45">Our team replies within 24 hours</p>
          </motion.div>
          <motion.div variants={reveal} className="rounded-lg border border-ink/12 p-5">
            <ContactForm extended />
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
