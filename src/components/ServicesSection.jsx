const services = [
  {
    number: "01",
    title: "Figma to WordPress",
    description:
      "Approved designs turned into clean, responsive WordPress websites. Built on ACF or the editor your team already uses, no bloated page builders unless you ask.",
    image: "https://framerusercontent.com/images/TRY82MyKJIKqjlRfvzwa53tHGsM.png?width=1080&height=1350",
    alt: "WordPress website preview on a tilted device",
  },
  {
    number: "02",
    title: "Figma to Framer",
    description:
      "Fast, polished Framer builds for landing pages and marketing sites. Animations and interactions included, ready to publish under your client's domain.",
    image: "https://framerusercontent.com/images/5elveI68HmqTSqyBtfUWp36UOk.png?width=1080&height=1350",
    alt: "Framer website preview on a tablet",
  },
  {
    number: "03",
    title: "Ongoing Site Support",
    description:
      "Updates, fixes, and small builds for sites we've delivered or sites you're stuck maintaining. A dev team on call without the retainer overhead.",
    image: "https://framerusercontent.com/images/rpS3D1oplxIrpp3Mj2sDWNJ0Y.png?width=1080&height=1350",
    alt: "Website support preview on a laptop",
  },
];

function ServiceRow({ service }) {
  return (
    <article className="grid w-full min-h-[190px] grid-cols-[130px_minmax(0,300px)_minmax(0,1fr)] items-center gap-[24px] rounded-[2px] border border-white/50 bg-[#ededed] px-[20px] py-[24px] text-ink shadow-[0_1px_0_rgba(23,23,23,0.04)] max-[1050px]:min-h-[178px] max-[1050px]:grid-cols-[112px_minmax(0,1fr)] max-[1050px]:gap-x-6 max-[1050px]:gap-y-4 max-[1050px]:py-[22px] max-[720px]:min-h-0 max-[720px]:grid-cols-[86px_minmax(0,1fr)] max-[720px]:px-[14px] max-[720px]:py-[16px]">
      <div className="h-[130px] w-[130px] overflow-hidden rounded-[4px] bg-ink/10 max-[1050px]:h-[112px] max-[1050px]:w-[112px] max-[720px]:h-[86px] max-[720px]:w-[86px]">
        <img src={service.image} alt={service.alt} className="h-full w-full object-cover object-center" />
      </div>

      <div className="flex items-start gap-[22px] text-[24px] font-medium leading-[30px] tracking-[-1px] text-ink max-[720px]:gap-4 max-[720px]:text-[18px] max-[720px]:leading-[22px]">
        <span className="min-w-[36px] text-[28px] font-semibold leading-[40px] tracking-[-1px]">{service.number}</span>
        <h3 className="min-w-0">{service.title}</h3>
      </div>

      <p className="max-w-[640px] justify-self-end text-[24px] font-medium leading-[30px] tracking-[-1px] text-ink max-[1050px]:col-start-2 max-[1050px]:justify-self-start max-[720px]:col-span-2 max-[720px]:col-start-1 max-[720px]:text-[17px] max-[720px]:leading-[21px]">
        {service.description}
      </p>
    </article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-visible py-[92px] text-ink max-[900px]:py-16 max-[480px]:py-12">
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:grid max-[700px]:gap-2">
          <p>[03]</p>
          <p className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">[ Services ]</p>
          <p>What We Do</p>
        </div>

        <h2 className="mt-[58px] max-w-[940px] text-[clamp(48px,5.55vw,80px)] font-bold uppercase leading-[0.96] tracking-[-0.055em] text-[rgb(23,23,23)] max-[720px]:mt-10 max-[480px]:text-[40px] max-[480px]:tracking-[-1.9px]">
          Development Support
          <br />
          Where Agencies
          <br />
          Usually Get Stuck.
        </h2>

        <div className="mt-[58px] flex w-full flex-col gap-[22px] max-[720px]:mt-10 max-[720px]:gap-[16px]">
          {services.map((service, index) => (
            <div
              key={service.number}
              className="sticky max-[720px]:static"
              style={{ top: `calc(92px + ${index * 18}px)` }}
            >
              <ServiceRow service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
