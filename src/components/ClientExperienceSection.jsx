const testimonialImage = "https://framerusercontent.com/images/II9C8mbhqV90A3fE8pyPChpgk.png?width=660&height=639";
const avatarImage = "https://framerusercontent.com/images/kMWUaYeEU6aurNKSS8LvmKlqYUM.png?width=1024&height=683";

function SectionHeader() {
  return (
    <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:gap-3 max-[700px]:text-[12px] max-[700px]:leading-[12px]">
      <p>[06]</p>
      <p className="">[ Testimonial ]</p>
      <p>Our Value</p>
    </div>
  );
}

function StatCard() {
  return (
    <article className="flex h-full min-h-0 flex-col justify-start rounded-[10px] bg-white px-[28px] pb-[28px] pt-[28px] text-ink shadow-[0_1px_0_rgba(23,23,23,0.04)] max-[1100px]:min-h-[120px] max-[480px]:px-5 max-[480px]:py-5">
      <div className="mt-[2px] text-[clamp(40px,4.2vw,56px)] font-semibold leading-[0.92] tracking-[-0.06em] text-ink">40+</div>
      <div className="mt-[12px] font-mono text-[12px] font-medium uppercase leading-[14.4px] tracking-[-0.35px] text-[rgb(102,102,102)]">
        Live Projects
      </div>
    </article>
  );
}

function QuoteCard() {
  return (
    <article className="flex h-full min-h-0 flex-col justify-between rounded-[10px] bg-white px-[28px] pb-[28px] pt-[28px] text-ink shadow-[0_1px_0_rgba(23,23,23,0.04)] max-[1100px]:min-h-[260px] max-[480px]:px-5 max-[480px]:py-5">
      <div>
        <div className="text-[54px] font-semibold leading-none tracking-[-0.08em] text-ink/10">“”</div>
        <h3 className="mt-[20px] max-w-[285px] text-[clamp(22px,1.55vw,24px)] font-medium leading-[1.12] tracking-[-0.9px] text-ink">
          She does great work.
          <br />
          Highly recommended
        </h3>
      </div>

      <div className="mt-[18px] flex items-center gap-[12px]">
        <div className="h-[30px] w-[30px] overflow-hidden rounded-full bg-ink/10">
          <img src={avatarImage} alt="Jeane Bope" className="h-full w-full object-cover object-center" />
        </div>
        <div>
          <p className="text-[15px] font-medium leading-[18px] tracking-[-0.3px] text-ink">Jeane Bope</p>
          <p className="text-[13px] font-medium leading-[16px] tracking-[-0.25px] text-[rgb(69,69,69)]">
            Founder / Creative Director at Bope Design
          </p>
        </div>
      </div>
    </article>
  );
}

function TestimonialCard() {
  return (
    <article className="flex h-full min-h-[640px] flex-col rounded-[10px] bg-white px-[28px] pb-[28px] pt-[28px] text-ink shadow-[0_1px_0_rgba(23,23,23,0.04)] max-[1100px]:min-h-[440px] max-[480px]:min-h-[380px] max-[480px]:px-5 max-[480px]:py-5">
      <h3 className="max-w-[320px] text-[clamp(18px,1.45vw,20px)] font-semibold uppercase leading-[1.16] tracking-[-0.04em] text-ink">
        Strategic partner. Clear thinking. Dependable delivery.
      </h3>

      <div className="flex flex-1 items-center">
        <p className="max-w-[390px] text-[clamp(15px,1.15vw,18px)] font-medium leading-[1.2] tracking-[-0.55px] text-[rgb(102,102,102)]">
          Farzana offers a rare strategic partnership. Her work blends authentic brand voice, precise messaging, and
          emotional appeal. She is someone you can trust for strategic thinking, clarity of outcomes, and dependable
          delivery.
        </p>
      </div>

      <div>
        <p className="text-[15px] font-medium leading-[18px] tracking-[-0.3px] text-ink">Maria Gusakova</p>
        <p className="mt-[2px] text-[13px] font-medium leading-[16px] tracking-[-0.25px] text-[rgb(69,69,69)]">
          CEO Advisor &amp; Executive Coach | Ex-McKinsey Partner
        </p>
      </div>
    </article>
  );
}

function ImageCard() {
  return (
    <article className="relative h-full min-h-[640px] overflow-hidden rounded-[10px] bg-[#dedbd6] shadow-[0_1px_0_rgba(23,23,23,0.04)] max-[1100px]:h-[520px] max-[1100px]:min-h-0 max-[480px]:h-[380px]">
      <img src={testimonialImage} alt="Farzana portrait" className="h-full w-full object-cover object-center" />
    </article>
  );
}

export default function ClientExperienceSection() {
  return (
    <section id="testimonial" className="relative overflow-hidden py-[96px] text-ink max-[900px]:py-16 max-[480px]:py-12">
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <SectionHeader />

        <div className="mt-[54px] grid grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] gap-8 max-[1100px]:grid-cols-1">
          <h2 className="text-[clamp(52px,6.52vw,94px)] font-bold uppercase leading-[0.96] tracking-[-0.06em] text-[rgb(23,23,23)] max-[480px]:text-[44px]">
            Client
            <br />
            Experience
          </h2>

          <div className="max-w-[400px] justify-self-end pt-[46px] text-[clamp(18px,1.53vw,22px)] font-medium leading-[1.2] tracking-[-0.9px] text-[rgb(23,23,23)] max-[1100px]:w-full max-[1100px]:max-w-[520px] max-[1100px]:justify-self-start max-[1100px]:pt-0 max-[480px]:text-[18px]">
            A direct note from a client on strategic thinking, clarity, and dependable delivery.
          </div>
        </div>

        <div className="mt-[34px] grid grid-cols-[minmax(0,0.98fr)_minmax(0,1fr)_minmax(280px,0.84fr)] gap-[8px] max-[1100px]:grid-cols-1">
          <div className="max-[1100px]:order-1">
            <ImageCard />
          </div>

          <div className="max-[1100px]:order-2">
            <TestimonialCard />
          </div>

          <div className="grid h-full min-h-[640px] grid-rows-[132px_minmax(0,1fr)] gap-[8px] max-[1100px]:order-3 max-[1100px]:flex max-[1100px]:min-h-0 max-[1100px]:flex-col">
            <StatCard />
            <QuoteCard />
          </div>
        </div>
      </div>
    </section>
  );
}
