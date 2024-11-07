import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const scrollThreshold = 0;

      setScrolling(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 ${
        scrolling ? "navGradient" : "bg-transparent"
      } transition-all`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-5">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="my-logo"
            className="w-[200px] h-[40px] object-contain opacity-70"
          />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 px-5">
          {navLinks.map((link) => {
            const { id, title } = link;
            return (
              <li
                key={id}
                className={`${
                  active === title ? "text-[#edf6f9]" : "text-secondary"
                } hover:text-[#edf6f9] text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(title)}
              >
                <a href={`#${id}`}>{title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu-icon"
            className="w-[28px] h-[28px] object-contain cursor-pointer opacity-70"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-end items-start gap-5">
              {navLinks.map(({ id, title }) => {
                return (
                  <li
                    key={id}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(title);
                    }}
                    className={` ${
                      active === title ? "text-[#FFDDD2]" : "text-[#631E05]"
                    } text-[16px] cursor-pointer font-poppins font-medium`}
                  >
                    <a href={`#${id}`}>{title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
