import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import PillButton from "./PillButton.jsx";

export default function ContactForm({ extended = false }) {
  const [sent, setSent] = useState(false);

  function submit(event) {
    event.preventDefault();
    const payload = Object.fromEntries(new FormData(event.currentTarget));
    console.log("Contact form payload", payload);
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input name="name" required placeholder="Name" className="rounded-lg border border-ink/12 bg-transparent px-5 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/45" />
        <input name="email" required type="email" placeholder="Email" className="rounded-lg border border-ink/12 bg-transparent px-5 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/45" />
      </div>
      {extended && (
        <div className="grid gap-4 md:grid-cols-2">
          <select name="projectType" className="rounded-lg border border-ink/12 bg-transparent px-5 py-4 text-ink outline-none transition focus:border-ink/45">
            <option>WordPress build</option>
            <option>Framer build</option>
            <option>Ongoing support</option>
          </select>
          <select name="budget" className="rounded-lg border border-ink/12 bg-transparent px-5 py-4 text-ink outline-none transition focus:border-ink/45">
            <option>$300 - $1,000</option>
            <option>$1,000 - $3,000</option>
            <option>$3,000+</option>
          </select>
        </div>
      )}
      <textarea name="message" required placeholder="Message" rows="6" className="w-full rounded-lg border border-ink/12 bg-transparent px-5 py-4 text-ink outline-none transition placeholder:text-ink/35 focus:border-ink/45" />
      <div className="flex flex-wrap items-center gap-4">
        <PillButton dark>Submit</PillButton>
        <AnimatePresence>
          {sent && (
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-sm font-semibold text-ink">
              Message received. We will reply within 24 hours.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
