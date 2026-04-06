import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const HIRE_EMAIL = "mailto:vimscientist69@gmail.com";
const CALENDLY = "https://calendly.com/vimscientist69/30min";

const HireMe = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          I&apos;m always ready for new challenges
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Hire Me! 👋
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.08, 1)}
        className="mt-8 text-center text-secondary text-[17px] max-w-2xl mx-auto leading-[30px]"
      >
        Open to part-time remote work. Send a message or book a short intro
        call—whichever fits you best.
      </motion.p>

      <motion.div
        variants={fadeIn("up", "spring", 0.12, 0.9)}
        className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center"
      >
        <a
          href={HIRE_EMAIL}
          className="inline-flex justify-center rounded-xl px-8 py-3.5 text-[15px] font-semibold text-white bg-accent hover:bg-accent-muted transition-colors shadow-[0_8px_32px_-8px_rgba(224,99,74,0.45)]"
        >
          Email me
        </a>
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-xl px-8 py-3.5 text-[15px] font-semibold text-white border border-edge-subtle bg-surface hover:bg-surface-raised hover:border-edge-strong transition-colors"
        >
          Schedule a call
        </a>
      </motion.div>
    </>
  );
};

export default SectionWrapper(HireMe, "hire");
