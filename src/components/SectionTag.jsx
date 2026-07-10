export default function SectionTag({ number, left, right }) {
  return (
    <div className="mb-10 flex w-full items-center justify-between gap-4 text-xs font-semibold uppercase tracking-normal text-current/70 sm:text-sm">
      <span>[{number}] {left}</span>
      <span className="text-right opacity-55">{right}</span>
    </div>
  );
}
