import { useState } from "react";
import { Plus } from "lucide-react";

const faqImage = "https://framerusercontent.com/images/TRY82MyKJIKqjlRfvzwa53tHGsM.png?width=1080&height=1350";

const faqs = [
  {
    question: "Do you work white-label?",
    answer: "Yes. The work is delivered under your agency's brand, and client-facing communication stays with you.",
  },
  {
    question: "Do you communicate with our clients?",
    answer: "Only if you ask. By default, we stay behind the scenes and work directly with your internal team.",
  },
  {
    question: "What do you need to start?",
    answer: "The approved design, page list, assets, scope notes, timeline, and any required platform or hosting access.",
  },
  {
    question: "Do you build in WordPress or Framer?",
    answer: "Yes. We build responsive WordPress and Framer sites from approved Figma designs.",
  },
  {
    question: "Are revisions included?",
    answer: "One revision round is included after delivery, focused on matching the approved design and expected behavior.",
  },
  {
    question: "Do you offer support after launch?",
    answer: "Yes. We can handle updates, fixes, small improvements, and ongoing site support after launch.",
  },
  {
    question: "Can we start with a small task?",
    answer: "Yes. A small page or focused build task is the best way to test the workflow before a larger project.",
  },
];

function SectionHeader() {
  return (
    <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:gap-3 max-[700px]:text-[12px] max-[700px]:leading-[12px]">
      <p>[07]</p>
      <p className="">[ FAQ ]</p>
      <p>Got Questions?</p>
    </div>
  );
}

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="group w-full cursor-pointer rounded-[10px] bg-white px-[24px] py-[29px] text-left text-ink shadow-[0_1px_0_rgba(23,23,23,0.04)] transition-colors duration-300 hover:bg-white/90 max-[720px]:px-[18px] max-[720px]:py-[22px]"
      aria-expanded={isOpen}
    >
      <div className="flex items-center justify-between gap-6">
        <span className="text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.2] tracking-[-0.9px] text-ink">
          {item.question}
        </span>
        <Plus
          className={`h-[22px] w-[22px] shrink-0 text-ink transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
          strokeWidth={1.8}
        />
      </div>
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[660px] pt-[18px] text-[16px] font-medium leading-[22px] tracking-[-0.45px] text-[rgb(69,69,69)]">
            {item.answer}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative overflow-hidden py-[96px] text-ink max-[900px]:py-16 max-[480px]:py-12">
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <SectionHeader />

        <div className="mt-[72px] grid grid-cols-[minmax(260px,0.43fr)_minmax(0,1fr)] gap-[120px] max-[1100px]:gap-10 max-[900px]:grid-cols-1 max-[900px]:gap-8 max-[480px]:mt-10">
          <div>
            <div className="aspect-[1.5] w-[360px] max-w-full overflow-hidden rounded-[4px] bg-ink/10">
              <img src={faqImage} alt="Website preview" className="h-full w-full object-cover object-center" />
            </div>
          </div>

          <div className="flex flex-col gap-[8px]">
            {faqs.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
