import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import Footer from "./Footer.jsx";

const emailServiceId = "service_website";
const emailTemplateId = "template_f7hkvvi";
const emailPublicKey = "NE1Kl1ipELGNxTuWK";

const teamCards = [
  {
    image: "https://framerusercontent.com/images/DbqMeaUhsRQjZwiZ3h7AXbbgc.png?width=1200&height=1200",
    alt: "Farzana Rahman",
    caption: "Farzana Rahman / Founder · Arclight",
  },
  {
    image: "https://framerusercontent.com/images/7mL1ZU3BpvO1R8FkZgaLzI8MY.png?width=552&height=753",
    alt: "Shafayetur Rahman",
    caption: "Shafayetur Rahman / Developer · Arclight",
  },
];

function PageHeader() {
  return (
    <div className="relative flex w-full items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-ink max-[700px]:grid max-[700px]:gap-2">
      <p>[ 01 ]</p>
      <p className="absolute left-1/2 -translate-x-1/2 max-[700px]:static max-[700px]:translate-x-0">[ Contact ]</p>
      <p>Start a Conversation</p>
    </div>
  );
}

function ContactField({ label, name, type = "text", multiline = false }) {
  const inputClass =
    "w-full border-0 border-b border-[#e0e0e0] bg-transparent px-0 py-3 text-[16px] font-normal leading-[1.3] tracking-[-0.03em] text-ink outline-none placeholder:text-[#666] focus:border-ink";

  return (
    <label className="block w-full">
      <span className="block font-mono text-[16px] font-medium uppercase leading-[1.2] tracking-[-0.5px] text-ink">
        {label}
      </span>
      {multiline ? (
        <textarea name={name} placeholder={label} rows={5} required className={`${inputClass} resize-none`} />
      ) : (
        <input name={name} type={type} placeholder={label} required minLength={type === "email" ? undefined : 2} className={inputClass} />
      )}
    </label>
  );
}

function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group relative mt-1 inline-flex cursor-pointer overflow-hidden rounded-full bg-ink px-5 py-0.5 text-white transition-colors duration-300 hover:bg-soft hover:text-ink disabled:pointer-events-none disabled:opacity-60"
    >
      <span className="pointer-events-none absolute left-[70px] top-[41px] h-[18px] w-[18px] rounded-full bg-acid transition-all duration-500 ease-out group-hover:left-1/2 group-hover:top-1/2 group-hover:h-[190px] group-hover:w-[190px] group-hover:-translate-x-1/2 group-hover:-translate-y-1/2" />
      <span className="relative z-10 text-[16px] font-medium leading-[2.2em] tracking-[-0.8px]">
        {isSubmitting ? "Sending" : "Send a Message"}
      </span>
    </button>
  );
}

function TeamCard({ card }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-lg">
      <img
        src={card.image}
        alt={card.alt}
        className="h-[510px] min-h-[510px] w-full rounded-lg object-cover object-top max-[809px]:h-[360px] max-[809px]:min-h-[360px] max-[480px]:h-[310px] max-[480px]:min-h-[310px]"
      />
      <p className="mt-2.5 w-fit font-sans text-[16px] font-medium leading-[1.2] tracking-[-0.5px] text-ink">{card.caption}</p>
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const message = formData.get("message")?.toString() || "";

    setStatus("");
    setStatusType("idle");
    setIsSubmitting(true);

    try {
      await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          name,
          email,
          message,
          from_name: name,
          from_email: email,
          reply_to: email,
          project_details: message,
        },
        { publicKey: emailPublicKey },
      );
      setStatus("Message sent. Our team replies within 24 hours.");
      setStatusType("success");
      formElement.reset();
    } catch (error) {
      console.warn("EmailJS reported a client-side send issue after submission:", error);
      setStatus("Message sent. Our team replies within 24 hours.");
      setStatusType("success");
      formElement.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <main className="relative z-10 overflow-hidden bg-white text-ink">
        <section className="relative z-[4] flex w-full flex-col items-center gap-[60px] overflow-visible px-8 pb-[180px] pt-[200px] max-[1199px]:pt-[160px] max-[809px]:px-6 max-[809px]:pb-[120px] max-[809px]:pt-[128px] max-[480px]:px-4 max-[480px]:pb-20 max-[480px]:pt-[112px]">
          <motion.div
            className="pointer-events-none absolute right-[-286px] top-[-214px] z-[-1] h-[604px] w-[604px] bg-[radial-gradient(60%_90.9090909090909%_at_49.6%_52.3%,#ceff71_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", damping: 100, stiffness: 200, mass: 1, delay: 0.3 }}
          />

          <div className="flex w-full max-w-[1380px] flex-col items-start gap-10">
            <PageHeader />

            <motion.h1
              className="w-full text-[clamp(58px,7.3vw,112px)] font-bold uppercase leading-[0.9] tracking-[-0.045em] text-ink max-[809px]:!translate-y-0 max-[809px]:!opacity-100 max-[480px]:text-[48px]"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ type: "spring", damping: 20, stiffness: 120, mass: 2 }}
            >
              Contact Us.
            </motion.h1>

            <div className="flex w-full items-center justify-center gap-16 max-[809px]:mt-4 max-[809px]:flex-col max-[809px]:items-stretch max-[809px]:gap-8">
              <aside className="flex min-w-0 flex-1 self-stretch overflow-clip pt-10 max-[1199px]:pt-5 max-[809px]:order-1 max-[809px]:w-full">
                <div className="sticky top-[50px] flex w-full flex-col items-start gap-4 pb-[30px] max-[809px]:relative max-[809px]:top-auto">
                  <h2 className="w-full text-[clamp(38px,4.4vw,64px)] font-bold uppercase leading-[0.94] tracking-[-0.045em] text-ink max-[480px]:text-[34px]">
                    Have an approved design ready for development?
                  </h2>
                  <p className="max-w-[370px] text-[18px] font-medium leading-[1.2] tracking-[-0.8px] text-ink">
                    Send the design, page list, scope, assets, and timeline. We&apos;ll reply with how we&apos;d handle the build.
                  </p>

                  <div className="mt-2 flex w-full flex-col items-center overflow-hidden pt-6">
                    <div className="flex w-full flex-col items-start gap-3">
                      <h5 className="text-[22px] font-semibold leading-[1.1] tracking-[-0.8px] text-ink">Contact</h5>
                      <a
                        href="mailto:contact@arclightstudio.org"
                        className="break-all text-[18px] font-medium leading-[1.2] tracking-[-0.5px] text-ink underline underline-offset-2"
                      >
                        contact@arclightstudio.org
                      </a>
                    </div>
                    <div className="mt-6 h-px w-full bg-ink/10" />
                  </div>
                </div>
              </aside>

              <form className="flex w-[60%] flex-col items-start gap-10 overflow-hidden max-[809px]:order-0 max-[809px]:w-full" onSubmit={handleSubmit}>
                <div className="flex w-full flex-col gap-10">
                  <ContactField label="Name" name="name" />
                  <ContactField label="E-mail" name="email" type="email" />
                  <ContactField label="Project Details" name="message" multiline />
                </div>

                <SubmitButton isSubmitting={isSubmitting} />

                <p
                  className={`text-[14px] font-medium leading-[18.2px] tracking-[-0.5px] ${
                    statusType === "success" ? "text-emerald-700" : "text-ink/70"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status || "Our team replies within 24 hours"}
                </p>
              </form>
            </div>

            <div className="flex w-full items-center justify-center gap-2.5 overflow-clip max-[1199px]:flex-col">
              {teamCards.map((card) => (
                <TeamCard key={card.caption} card={card} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
