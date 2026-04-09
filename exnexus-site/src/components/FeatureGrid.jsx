import { motion } from "framer-motion";
import { features } from "../data/features";

export default function FeatureGrid() {
  return (
    <div className=" grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <div className="glass-panel h-full rounded-[24px] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold tracking-tight">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {feature.description}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
