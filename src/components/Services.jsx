import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";

import { Tilt } from "react-tilt";
import { styles } from "../styles";
import { services_offers } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const services_offers = [
// {
//   title: "10 Paged React Web App",
//   description: "Price vary on how big the project is.",
//   price: "Based on project size"
// },

const ServiceCard = ({ title, description, price, index }) => (
  <Tilt className='xs:w-[500px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
        <p className='text-white text-[20px] font-bold text-center'>{description}</p>
        <h4 className='text-white text-[20px] font-bold text-center'>{price}</h4>
      </div>
    </motion.div>
  </Tilt>
);

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Navigate to the contact section if you want to work with me.
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services_offers.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(Services, "services");
