import { Link } from "react-router-dom";
import ContactForm from "./ContactForm.jsx";
import PillButton from "./PillButton.jsx";

export default function Footer() {
  return (
    <footer className="text-ink">
      <section className="container-page grid gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-5 text-sm font-bold uppercase text-ink/55">Always Connected</p>
          <h2 className="display max-w-4xl">Have an approved design ready for development?</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Send it over. We'll reply with how we'd handle the build, scope, timeline, and price.
          </p>
          <a href="mailto:hello@arclight.studio" className="mt-8 inline-block text-2xl font-black md:text-4xl">hello@arclight.studio</a>
        </div>
        <div className="rounded-lg border border-ink/12 p-5 text-ink">
          <ContactForm />
          <p className="mt-5 text-sm text-ink/55">Our team replies within 24 hours</p>
        </div>
      </section>
      <section className="container-page border-t border-ink/10 py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase text-ink/50">Lets Talk</p>
            <a href="mailto:hello@arclight.com" className="mt-2 block text-4xl font-black md:text-7xl">hello@arclight.com</a>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm font-semibold sm:grid-cols-4">
            {["Home", "Projects", "Contact", "Work"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : item === "Work" ? "/projects" : `/${item.toLowerCase()}`}>
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-6 border-t border-ink/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-5xl font-black text-ink/10 md:text-8xl">arclight Studio(R)</p>
          <div className="flex flex-wrap gap-5 text-sm font-semibold">
            <a href="https://x.com">X.Com</a>
            <a href="https://instagram.com">Instagram</a>
            <a href="https://linkedin.com">Linkedin</a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase text-ink/45">
          <span>(C)2026 Arclight. All rights reserved.</span>
          <PillButton to="/contact" className="!border-ink/15 !bg-ink !text-paper">Submit Project</PillButton>
        </div>
      </section>
    </footer>
  );
}
