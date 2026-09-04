import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="max-w-2xl">
      <h2 className={styles.sectionHeadText}>About me</h2>

      <div className="mt-6 space-y-4 text-secondary text-[16px] leading-relaxed">
        <p>
          I'm still learning and figuring things out, but I enjoy understanding
          how things work and getting better at them.
        </p>
        <p>
          I'm interested in software, problem solving, and building useful
          things. Most of what I know comes from teaching myself — reading,
          building projects, and learning from mistakes.
        </p>
        <p>
          I work with TypeScript, JavaScript, Python, and Swift depending on
          what the project needs. Nothing fancy — just whatever gets the job
          done.
        </p>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
