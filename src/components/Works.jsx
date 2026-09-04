import { github } from "../assets";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className="border border-edge-subtle rounded-lg p-4 hover:border-edge-strong transition-colors">
      <div className="flex items-start gap-4">
        <img
          src={image}
          alt={`${name} preview`}
          className="w-12 h-12 rounded-md object-cover shrink-0"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-white text-[16px] font-medium">{name}</h3>
            <a
              href={source_code_link}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-50 hover:opacity-100 transition-opacity"
              aria-label={`View ${name} on GitHub`}
            >
              <img src={github} alt="" className="w-4 h-4" />
            </a>
          </div>
          <p className="mt-1 text-secondary text-[14px] leading-relaxed">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={`${name}-${tag}`}
                className="text-[12px] text-secondary/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <div className="max-w-2xl">
      <h2 className={styles.sectionHeadText}>Projects</h2>
      <p className="mt-3 text-secondary text-[15px]">
        Things I've built while learning. Most are personal or side projects.
      </p>

      <div className="mt-10 flex flex-col gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "projects");
