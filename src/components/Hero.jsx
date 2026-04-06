import { motion } from "framer-motion";

import { styles } from "../styles";
import pfp from "../assets/professional-headshot-smile.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center">
      <div
        className={`max-w-7xl ${styles.paddingX} flex flex-row items-center gap-6 md:gap-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_14px_rgba(224,99,74,0.55)]" />
          <div className="w-px sm:h-72 h-36 bg-gradient-to-b from-accent via-accent/40 to-transparent" />
        </div>

        <div className="min-w-0 flex-1">
          <h1
            className={`${styles.heroHeadText} text-white mt-2 sm:mt-0 sm:ml-2`}
          >
            Hi, I'm <span className="text-accent">William!</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build backend systems, APIs{" "}
            <br className="sm:block hidden" />
            and automation pipelines.
          </p>
        </div>

        <div className="hidden md:block shrink-0 p-1 rounded-full bg-gradient-to-br from-accent/50 via-white/10 to-transparent">
          <img
            src={pfp}
            alt="William Ferns"
            className="w-[260px] h-[260px] lg:w-[300px] lg:h-[300px] rounded-full object-cover ring-2 ring-black"
          />
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-[32px] h-[58px] rounded-3xl border-2 border-edge-subtle flex justify-center items-start p-2 hover:border-accent/40 transition-colors">
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2.5 h-2.5 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
