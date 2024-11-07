import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full m-auto my-10 lg:my-20">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-2xl border border-e29578"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-44 h-50 object-contain" />

          <h3 className="text-[#edf6f9] text-[18px] font-medium text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  return (
    <div className="text-center py-10 sm:py-16 mx-auto">
      <div className="bg-[#FFDDD2]">
        <div>
          <p className={`${styles.sectionSubText} pt-8 shadow-text`}>About Me</p>
        </div>
        <div className="sm:px-16 py-12 px-6 mt-4 text-secondary max-w-full leading-[30px]">
          <p>
            My name is Fatima Aminu Baba. My friends call me Fati. I am an
            exceptional front-end Developer with a foundation in IT support, I
            have honed my skills to excel in HTML, CSS, JavaScript, and SEO
            concepts, and I am currently expanding my expertise with the React
            framework. My proficiency extends beyond coding; I am adept at
            designing intuitive and aesthetically pleasing UI/UX interfaces as
            well as a knowledge on how backend operates.
          </p>
          <p>
            My unique background in Biochemistry has given me a fresh perspective,
            enabling me to approach frontend development with a keen eye for
            detail and a focus on health-related products. I have successfully
            applied my technical knowledge and soft skills (including, but not
            limited to communication and critical thinking) to tasks related to
            Health, Safety, and Environmental practices, demonstrating my
            versatility.
          </p>
          <p>
            As an active community member, I eagerly volunteer my time to advocate
            for and share my tech-related skills, fostering a culture of
            continuous learning and growth. I am dedicated to achieving excellence
            in every project I undertake, and I am excited to contribute my
            expertise to innovative frontend projects that push the boundaries of
            user experience.
          </p>
        </div>
      </div>

      <div className="mt-20">
      <p className={`${styles.sectionSubText} shadow-text`}>Services</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-center gap-10 bg-[#FFFDFDFA]">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
