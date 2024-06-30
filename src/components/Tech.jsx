import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import Ball from "./canvas/Ball";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0 flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies?.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <Ball loading="lazy" icon={technology.icon} />
        </div>
      ))}
    </motion.section>
  );
};

export default Tech;
