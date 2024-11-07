import { styles } from "../styles";
import { github, preview } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    // <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.25)}>
    <div className="green-pink-gradient text-secondary p-5 rounded-2xl sm:w-[360px] w-full m-auto">
      {/*<Tilt
      //   options={{
      //     max: 45,
      //     scale: 1,
      //     speed: 450,
      //   }}
      //   className="bg-[#938989] text-[#202020] p-5 rounded-2xl sm:w-[360px] w-full"
      // >*/}
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
          loading="lazy"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
          <div
            onClick={() => window.open(demo_link, "_blank")}
            className="bg-[#83c5be] w-10 h-10 rounded-full flex justify-center item-center cursor-pointer"
          >
            <img
              src={preview}
              alt="preview-logo"
              className="w-1/2 h-1/2 object-contain mt-[10px]"
            />
          </div>

          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center item-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain mt-[10px]"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3
          className="font-bold text-[24px] cursor-pointer"
          onClick={() => window.open(demo_link, "_blank")}
        >
          {name}
        </h3>
        <p className="mt-2 text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[13px] text-[#006d77]`}>
            #{tag.name}
          </p>
        ))}
      </div>
      {/* </Tilt> 
    // </motion.div>*/}
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <h2 className={`${styles.sectionSubText} text-center shadow-text`}>
          Projects
        </h2>
      </div>

      <div className="w-full flex max-w-4xl m-auto">
        <div className="mt-3 text-secondary text-[17px] leading-[30px] m-auto px-5">
          The following projects showcase my skills and experience through
          real-world examples of my works. Each project is briefly described
          with links to their respective code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </div>
      </div>

      <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-7 px-5">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
