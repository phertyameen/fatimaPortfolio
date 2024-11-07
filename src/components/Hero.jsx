import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="w-full mx-auto opacity-90 mt-20 pb-20">
      <div className={`${styles.paddingX} flex flex-col md:flex-row items-center w-full justify-around py-3 gap-10 md:gap-0`}>
        {/* Breif about &  Time Line div */}
        <div className="flex gap-4 px-2">
          {/* Timeline div */}
          <div className="flex flex-col md:justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-primary" />
            <div className="w-1 sm:h-80 h-40 violet-gradient text" />
          </div>
          {/* Breif About */}
          <div className="lg:text-[60px] text-primary">
            <h1 className="lg:leading-[80px] lg:text-[40px] sm:text-[35px] xs:text-[30px] text-[25px] mt-2 font-bold whitespace-nowrap">Hi, I'm Fatima Aminu</h1>
            <p className="font-medium lg:leading-[40px] sm:text-[30px] xs:text-[20px] text-[18px] max-w-[500px]">
              A dynamic frontend web developer driven by an unwavering passion
              for crafting exceptional user experiences.
            </p>
            {/* hero resume and contact me button */}
            <div className="flex gap-2 sm:gap-16 mt-8 sm:mt-14">
              <button className={`${styles.btnStyle}`}>Download CV</button>
              <button className={`${styles.btnStyle}`}>Contact Me</button>
            </div>
          </div>
        </div>
        {/* Hero image */}
        <div className="w-[305px] h-[305px] bg-hero-pattern-gradient bg-cover bg-center rounded-full">
          <img src="" alt="" />
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Hero;
