import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = (props) => {
  const { index, testimonial, name, designation, image, company } = props;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="p-8 rounded-3xl shadow-lg col-span-4 sm:col-span-2 sm:mr-6 xl:col-span-1"
    >
      <p className="text-[#631E05] font-black text-[48px]">"</p>

      <div className="mt-1 text-primary">
        <p className="tracking-wider">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className=" font-medium text-[14px]">
              <span>@</span> {name}
            </p>

            <p className="mt-1 text-[12px]">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px]">
      <div className=" bg-[##FFEEE8] min-h-[300px] rounded-2xl py-5">
        <motion.div variants={textVariant()} className="text-center pt-5">
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Feedbacks</h2>
        </motion.div>
      </div>

      <div className="w-full m-auto -mt-20 pb-14 grid grid-cols-4 px-5 sm:gap-7}">
        {testimonials.map((testiment, index) => {
          return (
            <FeedbackCard
              key={`testimonial-${index}`}
              index={index}
              {...testiment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "feedbacks");
