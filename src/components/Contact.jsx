import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import Socials from "./Socials";
import toast from "react-hot-toast";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
    botField: "", // honeypot
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 🛑 Spam check
    if (form.botField) {
      return; // silently fail
    }

    setLoading(true);

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: `${form.fName} ${form.lName}`,
          from_email: form.email,
          message: form.message,
        },
        publicKey
      )
      .then(() => {
        // setLoading(false);
        toast.success(
          "Thank you for your message. I will get back to you shortly."
        );
        setForm({
          fName: "",
          lName: "",
          email: "",
          message: "",
          botField: "",
        });
      })
      .catch(() => {
        toast.error("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
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

          <Socials showText={false} />
        </div>

        {/* Right side: Contact form */}
        <div className="  bg-transparent p-8 rounded-2xl max-w-[500px] w-full shadowFormCard">
          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-2 w-full"
          >
            {/* Name div input */}
            <div className="flex flex-col md:flex-row gap-3">
              {/* first namee div */}
              <div className="flex flex-col ">
                <label htmlFor="fName" className="">
                  <span className="text-[#631E05] font-medium mb-4">
                    First Name
                  </span>
                </label>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  value={form.fName}
                  onChange={handleChange}
                  placeholder="fullname"
                  required
                  className="bg-transparent  border border-[#631E05] outline-none p-2 placeholder:text-gray-400 placeholder:text-xs text-secondary
              rounded-lg outlined-none font-medium"
                />
              </div>
              {/* last name */}

              <div className="flex flex-col">
                <label htmlFor="lName" className="">
                  <span className="text-[#631E05] font-medium mb-4">
                    Last Name
                  </span>
                </label>
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  value={form.lName}
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
                required
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
                required
                className="border border-[#631E05] placeholder:text-gray-400 placeholder:text-xs rounded-lg p-3 font-medium outline-none"
              ></textarea>
              <input
                type="text"
                name="botField"
                value={form.botField}
                onChange={handleChange}
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />
            </>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#631E05] text-white py-3 px-16 outline-none border-none font-medium shadow-md rounded-xl w-fit m-auto flex items-center gap-2"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
