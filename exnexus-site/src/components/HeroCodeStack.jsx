import { motion } from "framer-motion";
import { useState } from "react";
import { heroSnippets } from "../data/examples";

function MiniCodeCard({
  title,
  code,
  className = "",
  delay = 0,
  isDim = false,
  isStackHovered = false,
  hoverOffset = { x: 0, y: 0, scale: 1, rotate: 0 },
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{
        opacity: isStackHovered ? 1 : isDim ? 0.72 : 1,
        x: isStackHovered ? hoverOffset.x : 0,
        y: isStackHovered ? hoverOffset.y : [0, -6, 0],
        scale: isStackHovered ? hoverOffset.scale : 1,
        rotate: hoverOffset.rotate,
        filter: isStackHovered
          ? isDim
            ? "brightness(1.08)"
            : "brightness(1.16)"
          : isDim
          ? "brightness(0.88)"
          : "brightness(1)",
      }}
      transition={{
        opacity: { duration: 0.28, delay },
        x: { type: "spring", stiffness: 120, damping: 18 },
        y: isStackHovered
          ? { type: "spring", stiffness: 120, damping: 18 }
          : {
              duration: 5 + delay * 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
        scale: { type: "spring", stiffness: 140, damping: 16 },
        rotate: { type: "spring", stiffness: 120, damping: 18 },
        filter: { duration: 0.25 },
      }}
      whileHover={{
        scale: hoverOffset.scale + 0.03,
        zIndex: 40,
        filter: "brightness(1.2)",
      }}
      className={[
        "absolute overflow-hidden rounded-[24px] border border-white/10",
        "bg-[#0b1220]",
        "shadow-[0_24px_60px_rgba(0,0,0,0.35)]",
        className,
      ].join(" ")}
    >
      <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-white/30" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
          <div className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <div className="ml-3 text-[10px] uppercase tracking-[0.24em] text-white/35">
            {title}
          </div>
        </div>
      </div>

      <pre className="overflow-hidden p-4 text-[12px] leading-6 text-slate-200">
        <code className="block whitespace-pre-wrap break-words font-mono">
          {code}
        </code>
      </pre>
    </motion.div>
  );
}

export default function HeroCodeStack() {
  const [isStackHovered, setIsStackHovered] = useState(false);

  return (
    <div
      className="relative mx-auto hidden h-[460px] w-full max-w-[620px] lg:block"
      onMouseEnter={() => setIsStackHovered(true)}
      onMouseLeave={() => setIsStackHovered(false)}
    >
      <MiniCodeCard
        title={heroSnippets[0].title}
        code={heroSnippets[0].code}
        isDim
        isStackHovered={isStackHovered}
        delay={0.05}
        hoverOffset={{ x: -18, y: -14, scale: 1.02, rotate: -12 }}
        className="left-2 top-14 w-[280px] rotate-[-10deg]"
      />

      <MiniCodeCard
        title={heroSnippets[1].title}
        code={heroSnippets[1].code}
        isDim
        isStackHovered={isStackHovered}
        delay={0.12}
        hoverOffset={{ x: 18, y: -16, scale: 1.02, rotate: 11 }}
        className="right-2 top-6 w-[290px] rotate-[9deg]"
      />

      <MiniCodeCard
        title={heroSnippets[3].title}
        code={heroSnippets[3].code}
        isDim
        isStackHovered={isStackHovered}
        delay={0.18}
        hoverOffset={{ x: -14, y: 16, scale: 1.015, rotate: -8 }}
        className="bottom-6 left-8 w-[250px] rotate-[-6deg]"
      />

      <MiniCodeCard
        title={heroSnippets[2].title}
        code={heroSnippets[2].code}
        isStackHovered={isStackHovered}
        delay={0.24}
        hoverOffset={{ x: 0, y: -10, scale: 1.05, rotate: 1 }}
        className="left-1/2 top-24 z-20 w-[360px] -translate-x-1/2 rotate-[1deg]"
      />
    </div>
  );
}