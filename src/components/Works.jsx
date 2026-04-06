import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#050505] p-5 rounded-2xl sm:w-[360px] w-full border border-edge-subtle shadow-[0_24px_80px_-40px_rgba(0,0,0,0.9)] hover:border-edge-strong transition-colors"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={`${name} preview`}
            className="w-full h-full object-cover rounded-xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full flex justify-center items-center bg-black/80 border border-edge-subtle hover:border-accent/50 transition-colors"
              aria-label={`View ${name} on GitHub`}
            >
              <img
                src={github}
                alt=""
                className="w-1/2 h-1/2 object-contain"
              />
            </a>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="rounded-full border border-edge-subtle bg-surface px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-white/75"
            >
              {tag.name}
            </span>
          ))}
        </div>
        {live_demo && (
          <a
            href={live_demo}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex rounded-full px-5 py-2 text-[14px] font-semibold text-white bg-gradient-to-r from-white/10 to-accent/25 border border-edge-subtle hover:border-accent/40 transition-colors"
          >
            Live Demo
          </a>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="w-full">
      <motion.div variants={textVariant()} className="w-full">
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] w-full"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories. It reflects my ability to solve complex
          problems, work with different technologies, and manage projects
          effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7 w-full">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
