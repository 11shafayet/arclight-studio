import { motion } from "framer-motion";

const clients = [
  { label: "hank-hirth.de", href: "https://www.hank-hirth.de/" },
  { label: "zeitgeistandco", href: "https://zeitgeistandco.com/" },
  { label: "mgexecutivecoach", href: "https://mgexecutivecoach.com/" },
  { label: "clickodigital", href: "https://clickodigital.com/" },
  { label: "innovazione-futura.ag", href: "https://innovazione-futura.ag/" },
];

const marqueeItems = [...clients, ...clients, ...clients];

export default function WorkedWith() {
  return (
    <section id="worked-with" className="relative overflow-hidden text-ink">
      <div className="relative z-10 mx-auto grid min-h-[220px] w-[calc(100%-120px)] max-w-[1440px] grid-cols-[190px_minmax(0,1fr)] items-center gap-16 max-[900px]:min-h-0 max-[900px]:w-[calc(100%-48px)] max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[900px]:py-14 max-[480px]:w-[calc(100%-32px)] max-[480px]:py-10">
        <p className="whitespace-nowrap text-[24px] font-semibold leading-[28.8px] tracking-[-1.15px] text-ink max-[900px]:text-[20px]">
          /Worked with
        </p>

        <div className="worked-marquee-mask relative min-w-0 overflow-hidden">
          <motion.div
            className="flex w-max items-center gap-[48px] pr-[48px] max-[480px]:gap-[32px] max-[480px]:pr-[32px]"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 22,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((client, index) => (
              <a
                key={`${client.label}-${index}`}
                href={client.href}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 whitespace-nowrap text-[24px] font-medium leading-[28.8px] tracking-[-1.15px] text-[rgba(23,23,23,0.32)] transition-colors duration-300 hover:text-ink max-[900px]:text-[20px]"
              >
                {client.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
