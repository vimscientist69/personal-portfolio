import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="border-t border-edge-subtle py-8 first:pt-0 first:border-t-0">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="text-white text-[18px] font-medium">
            {experience.title}
          </h3>
          <p className="text-secondary text-[15px] mt-0.5">
            {experience.company_name}
          </p>
        </div>
        <span className="text-secondary/70 text-[14px] shrink-0">
          {experience.date}
        </span>
      </div>

      <ul className="space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-secondary text-[15px] leading-relaxed pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-secondary/50"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="max-w-2xl">
      <h2 className={styles.sectionHeadText}>Experience</h2>
      <p className="mt-3 text-secondary text-[15px]">
        A few things I've worked on. Nothing too impressive — just real
        projects where I learned along the way.
      </p>

      <div className="mt-10">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`experience-${index}`}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
