import { motion } from "framer-motion";

export default function CodePreview({ code, title = "example.js" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.12 }}
      className="glass-panel overflow-hidden rounded-[28px]"
    >
      <div className=" flex items-center gap-2 border-b border-white/8 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-white/30" />
        <div className="h-3 w-3 rounded-full bg-white/20" />
        <div className="h-3 w-3 rounded-full bg-white/12" />
        <div className="ml-3 text-xs uppercase tracking-[0.24em] text-white/40">
          {title}
        </div>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </motion.div>
  );
}
