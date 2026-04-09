export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <div className="text-sm uppercase tracking-[0.3em] text-white/40">
          {eyebrow}
        </div>
      ) : null}
      {title ? (
        <div className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </div>
      ) : null}
      {description ? (
        <div className="mt-4 text-base leading-8 text-white/65">
          {description}
        </div>
      ) : null}
    </div>
  );
}
