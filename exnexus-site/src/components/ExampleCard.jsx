export default function ExampleCard({ title, description, code }) {
  return (
    <div className="glass-panel overflow-hidden rounded-[24px]">
      <div className="border-b border-white/8 px-5 py-4">
        <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-white/60">{description}</p>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}