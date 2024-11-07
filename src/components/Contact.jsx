import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Socials from "./Socials";

// template_tx9jom8
// service_xk6rp5y - Google service ID
// QNGhWkxNr3KBAQCmb - Public API Key

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    Fname: "",
    Lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_f5msrnx",
        "template_gmccdxh",
        {
          from_name: form.Fname,
          to_name: "Fatima",
          from_email: form.email,
          to_email: "aminubabafatima8@gmail.com",
          message: form.message,
        },
        "0F6KQii6jqiVxm97U"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you for your message. I will get back to you shortly.");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        }
      );
  };

  return (
    <div className="w-full mx-auto lg:mt-12">
      <p className="text-lg text-secondary text-center font-semibold mt-2 shadow-text">
        Contact Me
      </p>
      {/* contact details and form  */}
      <div className="flex items-center flex-col-reverse md:flex-row justify-center gap-12">
        {/* Left side: Get in touch */}
        <div className=" bg-[#FFDDD2] flex flex-col justify-between h-96  py-4">
          <div className="py-3 text-primary">
            <h1 className="font-bold text-center  ">Get in Touch</h1>
            <p className="text-sm  max-w-[55%] mx-auto py-3 ">
              Impressed with what you see and would like to get in touch?
            </p>
          </div>

          <Socials showText={true} />
        </div>

        {/* Right side: Contact form */}
        <div className="  bg-transparent p-8 rounded-2xl max-w-[500px] w-full shadowFormCard">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-2 w-full"
          >
            {/* Name div input */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* first namee div */}
              <div className="flex flex-col ">
                <label htmlFor="Fname" className="">
                  <span className="text-[#631E05] font-medium mb-4">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  name="Fname"
                  id="Fname"
                  value={form.Fname}
                  onChange={handleChange}
                  placeholder="fullname"
                  className="bg-transparent  border border-[#631E05] outline-none p-2 placeholder:text-gray-400 placeholder:text-xs text-secondary
              rounded-lg outlined-none font-medium"
                />
              </div>
              {/* last name */}

              <div className="flex flex-col">
                <label htmlFor="Lname" className="">
                  <span className="text-[#631E05] font-medium mb-4">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  name="Lname"
                  id="Lname"
                  value={form.Lname}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="bg-transparent border border-[#631E05] outline-none p-2 placeholder:text-gray-400 placeholder:text-xs text-secondary
              rounded-lg outlined-none font-medium"
                />
              </div>
            </div>
            <>
              <label htmlFor="email" className="">
                <span className="text-[#631E05]  font-medium">Email</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="border border-[#631E05] outline-none p-2 text-[#f0f0f0]
              rounded-lg placeholder:text-gray-400 placeholder:text-xs font-medium"
              />
            </>

            <>
              <label htmlFor="message" className="">
                <span className="mb-4 font-medium text-[#631E05]">
                  Your Message
                </span>
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="8"
                value={form.message}
                onChange={handleChange}
                placeholder="I am all ears..."
                className="border border-[#631E05] placeholder:text-gray-400 placeholder:text-xs rounded-lg p-3 font-medium outline-none"
              ></textarea>
            </>

            <button
              type="submit"
              className="bg-[#631E05] text-white py-3 px-16 outline-none border-none font-medium shadow-md rounded-xl w-fit m-auto"
            >
              {loading ? "Submitting...." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
