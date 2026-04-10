import { motion } from "framer-motion";
import { features } from "../data/features";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
    >
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <motion.div key={feature.title} variants={item} layout>
            <motion.div
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="glass-panel h-full rounded-[24px] p-6 bg-white/[0.03] hover:bg-white/[0.06]"
            >
              <motion.div
                whileHover={{ rotate: 6, scale: 1.1 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10"
              >
                <Icon className="h-5 w-5 text-white" />
              </motion.div>
              <h3 className="text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {feature.description}
              </p>
            </motion.div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
