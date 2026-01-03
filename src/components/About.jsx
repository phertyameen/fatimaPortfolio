import React from "react";
// import Tilt from "react-tilt";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-full h-full w-full m-auto my-5 lg:my-10">
      <div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full h-full green-pink-gradient rounded-[20px] shadow-2xl border border-e29578"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="rounded-[20px] h-full max-h-[200px] py-8 px-2 flex justify-between items-center flex-col"
        >
          <img src={icon} alt={title} className="w-auto h-1/2 rounded-lg" />

          <h3 className="text-[#031116] text-[18px] w-[80%] overflow-hidden whitespace-nowrap text-ellipsis font-medium text-center">
            {title}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const TechnologyCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] h-max w-full m-auto my-5 lg:my-10">
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
          className="rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
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
        <p className={`${styles.sectionSubText} pt-8 shadow-text`}>About Me</p>
        <div className="sm:px-16 py-12 px-6 mt-4 text-secondary max-w-full leading-[30px]">
          <p>
            My name is Fatima Aminu, but my friends call me Fatee. I am an
            exceptional backend developer with strong proficiency in frontend
            development. I use integration layer (typeORM) to comminicate with
            databases (postgres and mssql). I excel at building scalable
            full-stack applications, specialising in CSS (vanilla, Tailwind,
            shadcn etc.), JavaScript (React, Next.js, Node.js), and TypeScript
            (NestJS), while following security best practices. Beyond Web2
            development, I also write smart contracts in Solidity and I am
            currently expanding my expertise through security research in
            Solidity. As part of my learning process, I actively contribute to
            open-source projects across both Web2 and Web3. I am always open to
            learning cutting-edge technologies such as AI, as well as modern
            tools that keep me competitive in today’s tech market.
          </p>

          <p>
            My unique background in Biochemistry has given me a fresh
            perspective, allowing me to approach frontend development with a
            keen eye for detail and a strong interest in health-related
            products. I have successfully applied my technical knowledge
            alongside soft skills such as communication and critical thinking to
            Health, Safety, and Environmental-related tasks, demonstrating my
            versatility across disciplines.
          </p>

          <p>
            As an active community member, I regularly volunteer my time to
            share my tech-related skills and advocate for continuous learning
            and growth. I am committed to excellence in every project I
            undertake and eager to contribute my expertise to innovative
            solutions that push the boundaries of user experience.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <p className={`${styles.sectionSubText} shadow-text`}>Services</p>
        <div className="grid h-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-10 bg-[#FFFDFDFA]">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>

      {/*  */}
      <div className="mt-20 px-5 relative overflow-hidden bg-[#FFFDFDFA]">
        <p className={`${styles.sectionSubText} shadow-text`}>Tech Stacks</p>
        <div className="scroll-container bg-[#FFFDFDFA]">
          {technologies.map((techStack, index) => (
            <TechnologyCard
              key={techStack.title}
              index={index}
              {...techStack}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default SectionWrapper(About, "about");
