export default function InstallBlock() {
  return (
    <section
      id="install"
      className="glass-panel rounded-[30px] px-8 py-10 text-center sm:px-10"
    >
      <div className="mx-auto max-w-2xl">
        <div className="text-sm uppercase tracking-[0.3em] text-white/40">
          Get started
        </div>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Ship your Express backend with a stronger foundation.
        </h2>
        <p className="mt-4 text-base leading-8 text-white/63">
          Install exnexus, plug in the middleware, and give your API a cleaner core.
        </p>

        <div className="mt-8 rounded-[24px] border border-white/8 bg-black/20 p-4 sm:p-5">
          <pre className="overflow-x-auto text-left text-sm leading-7 text-slate-200 sm:text-base">
            <code>npm install exnexus</code>
          </pre>
        </div>
      </div>
    </section>
  );
}