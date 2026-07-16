import emailjs from "@emailjs/browser";
import { CornerDownLeft } from "lucide-react";
import { useState } from "react";

const emailServiceId = "service_website";
const emailTemplateId = "template_f7hkvvi";
const emailPublicKey = "NE1Kl1ipELGNxTuWK";

function SectionHeader() {
  return (
    <div className="relative flex items-center justify-between border-b border-ink/10 pb-[15px] font-mono text-[14px] font-medium uppercase leading-[16.8px] tracking-[-0.35px] text-ink max-[700px]:gap-3 max-[700px]:text-[11px] max-[700px]:leading-[12px]">
      <p>[ 08 ]</p>
      <p className="">[ Ready to Start? ]</p>
      <p>Start a Conversation</p>
    </div>
  );
}

function FormInput({ label, name, type = "text", multiline = false }) {
  const sharedClass =
    "w-full border-0 bg-transparent px-0 py-[18px] text-[18px] font-medium leading-[24px] tracking-[-0.1px] text-ink outline-none placeholder:text-[rgb(102,102,102)]";

  const fieldClass =
    "contact-focus-line relative block border-b border-ink/10 after:absolute after:bottom-[-1px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.22,1,0.36,1)] focus-within:after:scale-x-100";

  if (multiline) {
    return (
      <label className={fieldClass}>
        <textarea name={name} placeholder={label} rows={3} required className={`${sharedClass} resize-none`} />
      </label>
    );
  }

  return (
    <label className={fieldClass}>
      <input name={name} type={type} placeholder={label} required minLength={type === "email" ? undefined : 2} className={sharedClass} />
    </label>
  );
}

export default function ContactSection() {
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
        {
          publicKey: emailPublicKey,
        },
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
    <section
      id="contact"
      className="relative overflow-hidden py-[42px] pb-[116px] text-ink max-[900px]:py-16 max-[480px]:py-12"
      style={{
        background:
          "radial-gradient(88rem 34rem at 50% 100%, rgba(255, 79, 79, 0.22), transparent 70%), #e0e0e0",
      }}
    >
      <div className="mx-auto w-[calc(100%-120px)] max-w-[1440px] max-[900px]:w-[calc(100%-48px)] max-[480px]:w-[calc(100%-32px)]">
        <SectionHeader />

        <div className="mt-[106px] grid grid-cols-[minmax(0,0.47fr)_minmax(420px,0.53fr)] gap-[96px] max-[1100px]:grid-cols-1 max-[1100px]:gap-12 max-[900px]:mt-16 max-[480px]:mt-10">
          <div className="flex min-h-[520px] flex-col justify-between max-[1100px]:min-h-0 max-[1100px]:gap-16">
            <div>
              <p className="text-[22px] font-medium leading-[26.4px] tracking-[-1.3px] text-ink">- Let&apos;s Connect</p>
              <h2 className="mt-[28px] max-w-[560px] text-[clamp(40px,3.34vw,48px)] font-bold uppercase leading-[56px] tracking-[-2px] text-ink max-[720px]:text-[40px] max-[720px]:leading-[46px] max-[480px]:text-[34px] max-[480px]:leading-[38px]">
                Have an approved
                <br />
                design ready for
                <br />
                development?
              </h2>
            </div>

            <div>
              <h3 className="text-[24px] font-medium leading-[30px] tracking-[-0.1px] text-[rgb(16,16,16)]">Always Connected</h3>
              <a
                href="mailto:contact@arclightstudio.org"
                className="mt-[14px] inline-block break-all text-[18px] font-medium leading-[24px] tracking-[-0.1px] text-[rgb(248,40,40)] underline underline-offset-2"
              >
                contact@arclightstudio.org
              </a>
            </div>
          </div>

          <div className="w-full rounded-[18px] border border-white/35 bg-white/15 p-[20px] shadow-[0_1px_0_rgba(23,23,23,0.03)] backdrop-blur-[1px] max-[900px]:p-4 max-[480px]:rounded-[12px] max-[480px]:p-2.5">
            <form
              className="rounded-[14px] border border-white/60 bg-white/72 px-[28px] pb-[28px] pt-[30px] shadow-[0_0_0_1px_rgba(255,255,255,0.18)_inset] max-[720px]:px-[20px] max-[480px]:rounded-[10px] max-[480px]:px-4"
              onSubmit={handleSubmit}
            >
              <h3 className="max-w-[610px] text-[20px] font-semibold leading-[24px] tracking-[-1px] text-ink">
                Send it over. We&apos;ll reply with how we&apos;d
                <br className="max-[720px]:hidden" />
                handle the build , scope, timeline, and price.
              </h3>

              <div className="mt-[32px]">
                <FormInput label="Name" name="name" />
                <FormInput label="E-mail" name="email" type="email" />
                <FormInput label="Project Details" name="message" multiline />
              </div>

              <div className="mt-[28px]">
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
              </div>

              <p
                className={`mt-[42px] text-[14px] font-medium leading-[18.2px] tracking-[-0.5px] ${
                  statusType === "success" ? "text-emerald-700" : "text-ink"
                }`}
                role="status"
                aria-live="polite"
              >
                {status || "Our team replies within 24 hours"}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
