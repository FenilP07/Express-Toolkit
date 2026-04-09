import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Docs() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />

      <main className="container-shell py-14 sm:py-16">
        <div className="max-w-4xl">
          <div className="text-sm uppercase tracking-[0.3em] text-white/40">Documentation</div>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            exnexus docs
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/65">
            Version 1 of the site keeps the docs intentionally focused: installation,
            included utilities, and the basic usage flow for an Express app.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <section className="glass-panel rounded-[28px] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
            <p className="mt-3 text-white/65">
              Add exnexus to your Express project using npm.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-[20px] border border-white/8 bg-black/20 p-5 text-sm leading-7 text-slate-200">
              <code>npm install exnexus</code>
            </pre>
          </section>

          <section className="glass-panel rounded-[28px] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Included utilities</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {[
                ["asyncHandler", "Wrap async route handlers and forward errors automatically."],
                ["ApiError", "Create structured backend errors with status codes and messages."],
                ["ApiResponse", "Send consistent success payloads across your API."],
                ["errorHandler", "Plug in one global error middleware at the end of your app."],
                ["logger", "Use standardized logging utilities for cleaner debugging."],
                ["errors", "Access convenient helpers like notFound, badRequest, and more."],
              ].map(([name, desc]) => (
                <div key={name} className="rounded-[20px] border border-white/8 bg-black/20 p-5">
                  <div className="text-lg font-semibold">{name}</div>
                  <div className="mt-2 text-sm leading-7 text-white/62">{desc}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="glass-panel rounded-[28px] p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">Basic usage</h2>
            <p className="mt-3 text-white/65">
              Import the utilities you need, use them in your routes, and register the global error middleware near the bottom of your server setup.
            </p>
            <pre className="mt-5 overflow-x-auto rounded-[20px] border border-white/8 bg-black/20 p-5 text-sm leading-7 text-slate-200">
              <code>{`import express from "express";
import { asyncHandler, errorHandler } from "exnexus";

const app = express();

app.get(
  "/health",
  asyncHandler(async (req, res) => {
    res.json({ ok: true });
  })
);

app.use(errorHandler);`}</code>
            </pre>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}