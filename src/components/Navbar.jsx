import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollTop = () => {
      setScrolled(window.scrollY > 48);
    };

    handleScrollTop();
    window.addEventListener("scroll", handleScrollTop, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  useEffect(() => {
    const sections = navLinks.filter((n) => !n.link);

    const updateActiveSection = () => {
      const y = window.scrollY;
      let current = "";
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (y + 140 >= top) current = id;
      }
      setActive(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-edge-subtle"
          : "bg-transparent border-b border-transparent"
      }`}
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
          <p className="text-white text-[17px] font-bold cursor-pointer tracking-tight">
            William Ferns
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                !nav.link && active === nav.id
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[16px] font-medium cursor-pointer transition-colors`}
              onClick={() => {
                if (!nav.link) setActive(nav.id);
              }}
            >
              {nav.link ? (
                <a href={nav.link} target="_blank" rel="noopener noreferrer">
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

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
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] z-10 rounded-xl border border-edge-subtle backdrop-blur-md`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    !nav.link && active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    if (!nav.link) setActive(nav.id);
                  }}
                >
                  {nav.link ? (
                    <a href={nav.link} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
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
