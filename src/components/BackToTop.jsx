import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.matchMedia("(max-width: 700px)").matches ? 160 : 480;
      setIsVisible(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener("resize", handleScroll);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-[0_14px_34px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:bg-black max-[700px]:bottom-4 max-[700px]:right-4 max-[700px]:h-9 max-[700px]:w-9 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ArrowUp className="h-5 w-5 max-[700px]:h-[15px] max-[700px]:w-[15px]" strokeWidth={2.4} />
    </button>
  );
}
