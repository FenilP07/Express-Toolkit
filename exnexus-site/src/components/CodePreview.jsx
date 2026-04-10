import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";

export default function CodePreview({ code, title = "example.js" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass-panel overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.22)]"
    >
      <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-white/30" />
          <div className="h-3 w-3 rounded-full bg-white/20" />
          <div className="h-3 w-3 rounded-full bg-white/12" />
          <div className="ml-3 text-xs uppercase tracking-[0.24em] text-white/40">
            {title}
          </div>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 transition hover:bg-white/10 hover:text-white"
        >
          <Copy className="h-3.5 w-3.5" />
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="bg-black/20">
        <pre className="max-h-[420px] overflow-hidden p-5 text-sm leading-7 text-slate-200">
          <code className="font-mono whitespace-pre">{code}</code>
        </pre>
      </div>
    </motion.div>
  );
}