import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

export function AccordionItem({ question, answer, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-ink/12">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between gap-6 py-6 text-left text-xl font-semibold text-ink md:text-2xl"
      >
        <span>{question}</span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15">
          <Plus className="h-5 w-5" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 text-base leading-7 text-ink/62">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
