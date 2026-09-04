import GitHubCalendar from "react-github-calendar";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const CALENDLY = "https://calendly.com/vimscientist69/30min";
const EMAIL = "mailto:vimscientist69@gmail.com";

const githubContributionTheme = {
  light: ["#0a0a0a", "#1a1414", "#2a2020", "#3d2e2a", "#5c433c"],
  dark: ["#0a0a0a", "#1a1414", "#2a2020", "#3d2e2a", "#5c433c"],
};

const Contact = () => {
  return (
    <div className="max-w-2xl">
      <h2 className={styles.sectionHeadText}>Contact</h2>
      <p className="mt-3 text-secondary text-[15px]">
        Open to part-time remote work. Feel free to reach out.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href={CALENDLY}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex justify-center rounded-lg px-6 py-2.5 text-[14px] font-medium text-white bg-accent hover:bg-accent-muted transition-colors"
        >
          Book a call
        </a>
        <a
          href={EMAIL}
          className="inline-flex justify-center rounded-lg px-6 py-2.5 text-[14px] font-medium text-white border border-edge-subtle hover:border-edge-strong transition-colors"
        >
          Email me
        </a>
      </div>

      <div className="mt-12 github-calendar-wrap w-full overflow-hidden">
        <GitHubCalendar
          username="vimscientist69"
          colorScheme="dark"
          labels={{
            totalCount: `{{count}} contributions in the last year`,
          }}
          theme={githubContributionTheme}
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
