import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Trigger when 60% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const link = navLinks.find((nav) => nav.id === id);
          if (link) setActive(link.title);
        }
      });
    }, options);

    // Observe each section
    navLinks.forEach((nav) => {
      const section = document.getElementById(nav.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-[90%] max-w-7xl mx-auto flex items-center justify-between py-5 fixed top-4 left-0 right-0 z-20 ${
        scrolled
          ? "bg-black backdrop-blur-md shadow-md border border-white"
          : "bg-transparent"
      } rounded-3xl transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kartikeya Duvvuri &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[18px] font-medium cursor-pointer group transition`}
              onClick={() => setActive(nav.title)}
            >
          <a
            href={`#${nav.id}`}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              active === nav.title
                ? "text-white font-bold ring-2 ring-white"
                : "text-secondary"
            } group-hover:bg-white group-hover:border group-hover:border-white/30 group-hover:text-black`}
          >
            {nav.title}
          </a>
            </li>
          ))}
        </ul>

        <div className="hidden sm:flex gap-4 ml-6">
          <a href="https://github.com/kduvvuri1" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white hover:text-secondary text-[20px]" />
          </a>
          <a href="https://linkedin.com/in/kduvvuri" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white hover:text-secondary text-[20px]" />
          </a>
          <a href="https://instagram.com/kartikeyaduvvuri" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-secondary text-[20px]" />
          </a>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
