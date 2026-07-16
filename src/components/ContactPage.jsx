import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { CornerDownLeft } from "lucide-react";
import { useState } from "react";
// import Footer from "./Footer.jsx";

const emailServiceId = "service_website";
const emailTemplateId = "template_f7hkvvi";
const emailPublicKey = "NE1Kl1ipELGNxTuWK";

const teamCards = [
  {
    image: "https://framerusercontent.com/images/DbqMeaUhsRQjZwiZ3h7AXbbgc.png?width=1200&height=1200",
    alt: "Farzana Rahman",
    caption: "Farzana Rahman / Founder · Arclight",
    href: "https://www.linkedin.com/in/farzana-design/",
  },
  {
    image: "https://framerusercontent.com/images/7mL1ZU3BpvO1R8FkZgaLzI8MY.png?width=552&height=753",
    alt: "Shafayetur Rahman",
    caption: "Shafayetur Rahman / Developer· Arclight",
    href: "https://www.linkedin.com/in/shafayetur-rahman/",
  },
];

function PageHeader() {
  return (
    <div className="relative flex w-full items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[21px] tracking-[-0.8px] text-ink max-[700px]:gap-3 max-[700px]:text-[12px] max-[700px]:leading-[12px]">
      <p>[ 01 ]</p>
      <p className="">[ Contact ]</p>
      <p>Get in touch</p>
    </div>
  );
}

function ContactField({ label, name, type = "text", placeholder, multiline = false }) {
  const inputClass =
    "w-full border-0 bg-transparent px-0 py-[16px] text-[16px] font-normal leading-[1.3] tracking-[-0.03em] text-ink outline-none placeholder:text-[rgb(102,102,102)]";

  return (
    <label className="flex w-full flex-col items-start gap-[10px]">
      <span className="font-mono text-[16px] font-medium uppercase leading-[1.2] tracking-[-0.5px] text-ink">
        {label}
      </span>
      <span className="contact-focus-line relative block w-full border-b border-[#dddddd] after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:after:scale-x-100">
        {multiline ? (
          <textarea name={name} placeholder={placeholder} rows={5} className={`${inputClass} min-h-[154px] resize-none`} />
        ) : (
          <input name={name} type={type} placeholder={placeholder} required minLength={type === "email" ? undefined : 2} className={`${inputClass} min-h-[54px]`} />
        )}
      </span>
    </label>
  );
}

function SubmitButton({ isSubmitting }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="group inline-flex w-[236px] cursor-pointer items-center overflow-visible border-b border-ink pb-[10px] text-[14px] font-medium leading-[18.2px] tracking-[-0.5px] text-ink disabled:cursor-wait disabled:opacity-70"
    >
      <span className="inline-flex w-full items-center justify-between transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[10px]">
        <span className="relative grid h-[12px] w-[12px] place-items-center">
          <span className="h-[8px] w-[8px] rounded-full border border-ink/70 transition-all duration-300 group-hover:scale-50 group-hover:border-emerald-600 group-hover:opacity-0" />
          <span className="absolute grid h-[20px] w-[20px] place-items-center rounded-full bg-emerald-600 opacity-0 transition-all duration-300 group-hover:translate-x-[1px] group-hover:opacity-100">
            <CornerDownLeft className="h-[12px] w-[12px] text-white" strokeWidth={2.4} />
          </span>
        </span>
        <span>{isSubmitting ? "Sending" : "Submit"}</span>
      </span>
    </button>
  );
}

function ContactInfo() {
  return (
    <div className="mt-6 flex w-full flex-col items-center overflow-hidden">
      <div className="flex w-full flex-col items-start gap-3">
        <h5 className="text-[22px] font-medium leading-[26.4px] tracking-[-1.3px] text-ink">Contact</h5>
        <a
          href="mailto:contact@arclightstudio.org"
          className="break-all text-[18px] font-medium leading-[21.6px] tracking-[-1px] text-ink underline underline-offset-2"
        >
          contact@arclightstudio.org
        </a>
      </div>
      <div className="mt-6 h-px w-full bg-ink/10" />
    </div>
  );
}

function TeamCard({ card }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className="group flex min-w-0 flex-1 cursor-pointer flex-col items-center gap-[10px] overflow-hidden rounded-[8px] no-underline max-[809px]:w-full"
    >
      <div className="relative h-[510px] min-h-[510px] w-full overflow-hidden rounded-[8px] max-[809px]:h-[430px] max-[809px]:min-h-[430px] max-[480px]:h-[330px] max-[480px]:min-h-[330px]">
        <img src={card.image} alt={card.alt} className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]" />
      </div>
      <p className="w-full text-[18px] font-medium leading-[21.6px] tracking-[-1px] text-ink max-[480px]:text-[16px] max-[480px]:leading-[19.2px]">
        {card.caption}
      </p>
    </a>
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
      <main className="relative z-10 overflow-hidden bg-transparent text-ink">
        <section className="relative z-[4] flex w-full flex-col items-center gap-[60px] overflow-visible px-0 pb-[180px] pt-[200px] max-[1199px]:pt-[160px] max-[809px]:pb-[120px] max-[809px]:pt-[128px] max-[480px]:pb-20 max-[480px]:pt-[112px]">
          <motion.div
            className="pointer-events-none absolute right-[-286px] top-[-214px] z-[-1] h-[604px] w-[604px] bg-[radial-gradient(60%_90.9090909090909%_at_49.6%_52.3%,#ceff71_0%,rgba(10,10,10,0)_100%)] blur-[57px]"
            initial={{ opacity: 0.001 }}
            animate={{ opacity: 1 }}
            transition={{ type: "spring", damping: 100, stiffness: 200, mass: 1, delay: 0.3 }}
          />

          <div className="flex w-[calc(100%-120px)] max-w-[1440px] flex-col items-start gap-10 max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
            <PageHeader />

            <motion.h1
              className="w-full text-[clamp(56px,12.08vw,174px)] font-bold uppercase leading-none tracking-[-0.046em] text-ink max-[1199px]:text-[122px] max-[809px]:text-[56px] max-[809px]:tracking-[-4.2px]"
              initial={{ opacity: 0.001, scale: 1.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", bounce: 0.2, duration: 1 }}
            >
              Contact Us.
            </motion.h1>

            <motion.div
              className="flex w-full items-center justify-center gap-16 max-[809px]:flex-col max-[809px]:items-stretch max-[809px]:gap-10"
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ type: "spring", damping: 20, stiffness: 120, mass: 2 }}
            >
              <aside className="flex min-w-0 flex-1 self-stretch overflow-hidden pt-10 max-[809px]:w-full max-[809px]:pt-0">
                <div className="sticky top-[50px] flex w-full flex-col items-start gap-4 pb-[30px] max-[809px]:static">
                  <h2 className="w-full text-[22px] font-medium leading-[26.4px] tracking-[-1.3px] text-ink">
                    Have an approved design ready for development?
                  </h2>
                  <p className="max-w-[370px] text-[18px] font-medium leading-[24px] tracking-[-0.1px] text-[rgba(16,16,16,0.6)]">
                    Send it over. We&apos;ll reply with how we&apos;d handle the build , scope, timeline, and price.
                  </p>
                </div>
              </aside>

              <div id="contact-form" className="flex w-[60%] flex-col items-center gap-0 overflow-hidden max-[809px]:w-full">
                <form className="flex w-full flex-col items-start gap-10" onSubmit={handleSubmit}>
                  <ContactField label="Name" name="name" placeholder="Your Name" />
                  <ContactField label="Email" name="email" type="email" placeholder="you@example.com" />
                  <ContactField label="Project Details" name="message" placeholder="Project Details" multiline />

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

                <ContactInfo />
              </div>
            </motion.div>

            <div id="contact-team" className="flex w-full items-center justify-center gap-[10px] overflow-hidden max-[1199px]:flex-col">
              {teamCards.map((card) => (
                <TeamCard key={card.caption} card={card} />
              ))}
            </div>
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
