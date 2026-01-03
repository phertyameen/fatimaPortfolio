import { SectionWrapper } from "../hoc";
import { socialss } from "../constants";

const Smedia = ({ icon, url, index }) => (
  <span className="bg-[#FFDDD2] h-9 w-9 flex justify-center items-center rounded-full">
    <a href={url} target="_blank">
      <img
        src={icon}
        alt={`social-icon-${index}`}
        loading="lazy"
        className="w-5 h-5 object-contain"
      />
    </a>
  </span>
);

const Socials = ({ showText }) => {
  return (
    <section className="text-[#631E05] h-10 w-full p-10 mt-5 flex flex-col gap-3 justify-center items-center">
      <div className=" flex gap-4 justify-center items-center">
        {socialss.map((social, index) => (
          <Smedia {...social} key={`social-icon-${index}`} index={index} />
        ))}
      </div>
      {/* Conditionally render text if is true */}
      {showText && (
        <p className="tracking-wide font-medium text-center">
          FATIMA AMINU @ your service
        </p>
      )}
    </section>
  );
};

export default SectionWrapper(Socials);
