type SectionKickerProps = {
  index: string;
  label: string;
  meta?: string;
};

export function SectionKicker({ index, label, meta }: SectionKickerProps) {
  return (
    <div className="grid grid-cols-[70px_1fr_auto] items-center gap-4 border-b border-ink/10 pb-4 font-mono text-[11px] font-bold uppercase text-ink/80">
      <span>[{index}]</span>
      <span className="text-center">// {label}</span>
      <span className="hidden text-right sm:block">{meta}</span>
    </div>
  );
}
