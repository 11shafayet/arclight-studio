const proofStats = [
  {
    value: "40+",
    label: "LIVE PROJECTS",
    className: "delivery-stat-main",
  },
  {
    value: "6+",
    label: "YEARS EXPERIENCE",
    className: "delivery-stat-years",
  },
  {
    value: "NDA-FRIENDLY",
    label: "WHITE-LABEL DELIVERY",
    className: "delivery-stat-nda",
  },
];

export default function DeliveryProof() {
  return (
    <section className="relative overflow-hidden py-[72px] text-ink max-[900px]:py-16 max-[480px]:py-12">
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:grid max-[700px]:gap-2">
          <p>[01]</p>
          <p className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">[ DELIVERY PROOF ]</p>
          <p>© 2026</p>
        </div>

        <div className="delivery-layout relative pt-[64px] max-[900px]:grid max-[900px]:gap-12 max-[900px]:pt-12 max-[480px]:gap-9 max-[480px]:pt-9">
          <div className={proofStats[0].className}>
            <p className="text-[50px] font-semibold leading-none tracking-[-2.2px] text-ink max-[900px]:text-[44px] max-[480px]:text-[38px]">
              {proofStats[0].value}
            </p>
            <p className="mt-[12px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-[rgb(102,102,102)]">
              {proofStats[0].label}
            </p>
          </div>

          <h2 className="delivery-heading max-w-[760px] text-[64px] font-bold uppercase leading-[0.98] tracking-[-2.9px] text-ink max-[1100px]:text-[56px] max-[900px]:text-[44px] max-[480px]:text-[36px] max-[480px]:tracking-[-1.9px]">
            APPROVED DESIGNS
            <br />
            SHIPPED WITHOUT
            <br />
            DEVELOPMENT DRAMA.
          </h2>

          <div className={proofStats[1].className}>
            <p className="text-[50px] font-semibold leading-none tracking-[-2.2px] text-ink max-[900px]:text-[44px] max-[480px]:text-[38px]">
              {proofStats[1].value}
            </p>
            <p className="mt-[12px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-[rgb(102,102,102)]">
              {proofStats[1].label}
            </p>
          </div>

          <div className={proofStats[2].className}>
            <p className="text-[38px] font-semibold uppercase leading-none tracking-[-1.75px] text-ink max-[900px]:text-[34px] max-[480px]:text-[30px]">
              {proofStats[2].value}
            </p>
            <p className="mt-[14px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-[rgb(102,102,102)]">
              {proofStats[2].label}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
