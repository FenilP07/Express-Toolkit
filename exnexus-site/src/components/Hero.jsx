import { motion } from "framer-motion";
import { ArrowRight, Code2, GitBranch } from "lucide-react";
import { Link } from "react-router";

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-4xl py-20 px-6"
    >
      {/* Badge */}
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-sm font-medium text-indigo-300">
        <Code2 className="h-4 w-4" />
        Build cleaner Express backends faster
      </div>

      {/* Heading */}
      <h1 className="text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-white">
        The utility belt for{" "}
        <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
          modern Express apps.
        </span>
      </h1>

      {/* Paragraph */}
      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
        exnexus gives your backend a cleaner foundation with standardized
        errors, predictable responses, async wrappers, and production-ready
        structure so you can spend more time building features and less time
        rewriting boilerplate.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#install"
          className="inline-flex items-center rounded-full bg-white px-8 py-3.5 font-bold !text-black transition hover:bg-zinc-200"
        >
          Install Package
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          <GitBranch className="mr-2 h-4 w-4" />
          View GitHub
        </a>

        <Link
          to="/docs"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-semibold text-white transition hover:bg-white/10"
        >
          Read Docs
        </Link>
      </div>

      {/* Tags */}
      <div className="mt-14 flex flex-wrap gap-3">
        {[
          "ESM ready",
          "Node 18+",
          "Express focused",
          "Production friendly",
        ].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/5 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white/40"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.section>
  );
}
