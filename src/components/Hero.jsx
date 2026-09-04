import { styles } from "../styles";
import pfp from "../assets/professional-headshot-smile.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex justify-center items-center">
      <div
        className={`max-w-3xl ${styles.paddingX} flex flex-col sm:flex-row items-center gap-8 sm:gap-12`}
      >
        <img
          src={pfp}
          alt="William Ferns"
          className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] rounded-md object-cover shrink-0"
        />

        <div className="text-center sm:text-left">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-accent">William</span>
          </h1>
          <p className={`${styles.heroSubText} mt-3`}>
            19 years old, teaching myself computer science and working towards
            becoming a software developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
