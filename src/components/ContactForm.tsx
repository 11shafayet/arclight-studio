import { Send } from 'lucide-react';

export function ContactForm() {
  return (
    <form className="space-y-8" action="mailto:hello@arclight.com" method="post" encType="text/plain">
      {[
        ['Name', 'Your Name'],
        ['Email', 'Your Email'],
      ].map(([label, placeholder]) => (
        <label key={label} className="block">
          <span className="mb-5 block font-mono text-xs font-bold uppercase text-ink">{label}</span>
          <input
            className="h-12 w-full border-b border-ink/10 bg-transparent text-base outline-none transition placeholder:text-ink/45 focus:border-ink"
            placeholder={placeholder}
            name={label.toLowerCase()}
          />
        </label>
      ))}

      <label className="block">
        <span className="mb-5 block font-mono text-xs font-bold uppercase text-ink">Message</span>
        <textarea
          className="min-h-24 w-full resize-y border-b border-ink/10 bg-transparent text-base outline-none transition placeholder:text-ink/45 focus:border-ink"
          placeholder="Your Message"
          name="message"
        />
      </label>

      <button
        type="submit"
        className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:bg-ink/85"
      >
        <Send size={15} />
        Send a Message
      </button>
    </form>
  );
}
