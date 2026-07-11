import { ArrowUpRight, CodeXml, MonitorSmartphone, ShieldCheck, Workflow } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Send the approved design",
    description: "Share the Figma file, page list, scope, assets, and timeline.",
    icon: ArrowUpRight,
    active: 1,
  },
  {
    step: "Step 2",
    title: "We review the project",
    description: "We check the design, structure, responsive needs, and possible technical issues before writing a line of code.",
    icon: Workflow,
    active: 2,
  },
  {
    step: "Step 3",
    title: "Development starts",
    description: "We build the site in WordPress or Framer desktop, tablet, and mobile handled from the start.",
    icon: CodeXml,
    active: 3,
  },
  {
    step: "Step 4",
    title: "QA before delivery",
    description: "We check layouts, spacing, forms, links, and functionality before you ever see the build.",
    icon: MonitorSmartphone,
    active: 4,
  },
  {
    step: "Step 5",
    title: "White-label handoff",
    description: "You receive a clean build under your agency's brand, ready to present to your client. One revision round included.",
    icon: ShieldCheck,
    active: 5,
  },
];

function StepCard({ item, index }) {
  const Icon = item.icon;
  const dots = [1, 2, 3, 4, 5];

  return (
    <article className="relative flex min-h-[270px] flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_1px_0_rgba(23,23,23,0.04)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[10px] bg-[repeating-linear-gradient(90deg,rgba(23,23,23,0.16)_0_1px,transparent_1px_6px)] opacity-100" />

      <div className="flex flex-1 flex-col px-[18px] pb-[18px] pt-[30px]">
        <div className="mb-[48px] flex items-center justify-between">
          <div className="flex items-center gap-[3px]">
            {dots.map((dot) => (
              <span
                key={dot}
                className={`h-[6px] w-[6px] rounded-full ${dot === item.active ? "bg-ink" : "bg-ink/18"}`}
              />
            ))}
          </div>
          <span className="font-mono text-[14px] font-medium leading-[16.8px] tracking-[-0.35px] text-[rgb(57,57,57)]">
            {item.step}
          </span>
        </div>

        <Icon className="h-[18px] w-[18px] text-ink" strokeWidth={1.8} />
        <h3 className="mt-[16px] max-w-[210px] text-[24px] font-semibold leading-[28px] tracking-[-0.9px] text-ink">
          {item.title}
        </h3>
        <p className="mt-[12px] max-w-[228px] text-[16px] font-medium leading-[22px] tracking-[-0.55px] text-[rgb(69,69,69)]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="relative overflow-hidden py-[100px] text-ink max-[900px]:py-16">
      <div
        className="pointer-events-none absolute left-[-420px] top-[-150px] h-[640px] w-[640px] rounded-full blur-[57px]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(255, 79, 79, 0.45) 0%, rgba(255, 79, 79, 0) 70%)",
        }}
      />
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)]">
        <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:grid max-[700px]:gap-2">
          <p>[05]</p>
          <p className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">[ Simple process ]</p>
          <p>[ Clean Handoff ]</p>
        </div>

        <div className="mt-[38px] grid grid-cols-[minmax(0,0.58fr)_minmax(260px,0.42fr)] items-start gap-8 max-[900px]:grid-cols-1">
          <h2 className="text-[clamp(72px,6.52vw,94px)] font-bold uppercase leading-[0.92] tracking-[-0.06em] text-ink">
            Our
            <br />
            Process
          </h2>
          <p className="max-w-[320px] justify-self-end pt-[62px] text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.2] tracking-[-0.9px] text-ink max-[900px]:justify-self-start max-[900px]:pt-0">
            Built for teams that need reliable development support.
          </p>
        </div>

        <div className="mt-[42px] grid grid-cols-5 gap-[8px] max-[1200px]:grid-cols-2 max-[760px]:grid-cols-1">
          {steps.map((item, index) => (
            <StepCard key={item.step} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
