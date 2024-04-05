"use client";

import { useState, useEffect, useContext } from "react";
import { DataContext } from "@/context/DataContext";
import { toggleDarkMode } from "./ToggleDarkMode";
import Image from "next/image";
import logo from "../../public/logo.svg"; // Assuming your component is one level below public
import { IoIosMoon, IoMdMenu } from "react-icons/io";
import { IoClose, IoLanguageOutline, IoSunny } from "react-icons/io5";
import { languages } from "@/lib/data";
import Link from "next/link";
import { motion } from "framer-motion";
import { navAnimation } from "@/lib/animation";
const Nav = () => {
  const [menuShow, setMenuShow] = useState(false);
  // ANIMATION ====================================
  const {
    logoAnimation,
    iconsAnimation,
    iconItem,
    langAnimation,
    langItem,
    modeAnimation,
  } = navAnimation;

  // CHANGE LANGUAGE  =============================
  const [isShow, setIsShow] = useState(false);
  const { language, setLanguage, content } = useContext(DataContext);

  useEffect(() => {
    const storedTogglelanguage = localStorage.getItem("toggleLanguage");
    if (storedTogglelanguage != null) {
      setLanguage(storedTogglelanguage);
    } else {
      setLanguage(languages[0]);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem("toggleLanguage", newLanguage);
  };

  //   DARK MODE ==========================

  const [modeIcon, setModeIcon] = useState(true);
  useEffect(() => {
    const isDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <>
      <nav className="container  nav-dimensions flex justify-between items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={logoAnimation}
          // viewport={{ once: true }}
        >
          <Link href={"/"}>
            <Image src={logo} alt="logo image" priority className="w-[60px]" />
          </Link>
        </motion.div>

        <div className="flex-1 flex justify-end md:justify-between items-center ">
          {/* MENU LARGE SCREEN ================================= */}

          <div className="hidden md:flex items-center px-6">
            <ul className="flex items-center  flex-row gap-2 ">
              {content.nav.map((data) => {
                return (
                  <Link key={data.name} href={data.link}>
                    <li
                      onClick={() => {
                        setMenuShow(!menuShow);
                      }}
                      className="h-[60px] px-3 flex items-center rounded-[20px] uppercase hover:text-primary  duration-300 hover:font-semibold"
                    >
                      {data.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* MENU SMALL SCREEN ================================= */}
          <div
            className={`${
              language === "العربية"
                ? menuShow
                  ? "left-0"
                  : "left-[-100%]"
                : menuShow
                ? "right-0"
                : "-right-[100%]"
            } 
              
              
              container md:hidden fixed  w-full min-h-screen bg-theme  top-0  z-[99999999999] px-2 transition-all duration-300`}
          >
            <button
              onClick={() => {
                setMenuShow(!menuShow);
              }}
              className="btn icon mt-3"
            >
              <IoClose className="text-xl" />
            </button>

            <ul className="flex flex-col gap-6 mt-16">
              {content.nav.map((data) => {
                return (
                  <Link key={data.name} href={data.link}>
                    <li
                      onClick={() => {
                        setMenuShow(!menuShow);
                      }}
                      className="  flex items-center rounded-[20px] uppercase hover:text-primary  duration-300 hover:font-semibold"
                    >
                      {data.name}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
          {/* NAV ICONS =================================== */}
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={iconsAnimation}
            className="flex gap-2 "
          >
            {/* MENU BUTTON ================================= */}
            <motion.button
              variants={iconItem}
              onClick={() => {
                setMenuShow(!menuShow);
              }}
              className="btn icon md:hidden"
            >
              <IoMdMenu className="text-xl" />
            </motion.button>

            {/* MODE BUTTON ================================= */}
            <motion.button
              variants={iconItem}
              onClick={() => {
                setModeIcon(!modeIcon);
                toggleDarkMode();
              }}
              className="btn icon"
            >
              <IoIosMoon className="text-xl scale-100  w-full dark:w-0 dark:scale-0 dark:-rotate-180 duration-500" />
              <IoSunny className="text-xl dark:scale-100 dark:w-full w-0 scale-0 rotate-180 dark:rotate-0 duration-500" />
            </motion.button>

            {/* LANGUAGE BUTTON motion.================================= */}
            <motion.button variants={iconItem} className="relative uppercase">
              <div
                onClick={() => {
                  setIsShow(!isShow);
                }}
                className="btn icon"
              >
                <IoLanguageOutline className="text-xl" />
              </div>

              <motion.ul
                layout
                initial="hidden"
                whileInView="show"
                variants={langAnimation}
                className={` ${language === "العربية" ? "left-0" : "right-0"} ${
                  isShow ? "flex" : "hidden"
                }
                z-[999]
              absolute mt-2  bg-theme rounded-[20px]  flex flex-col overflow-hidden
              `}
              >
                {languages.map((lang) => {
                  return (
                    <motion.li
                      variants={langItem}
                      onClick={() => {
                        changeLanguage(lang);
                        setIsShow(!isShow);
                      }}
                      className="flex justify-center items-center h-[60px] px-6 hover:font-semibold hover:bg-primary hover:text-white"
                      key={lang}
                    >
                      {lang}
                    </motion.li>
                  );
                })}
              </motion.ul>
            </motion.button>
          </motion.div>
        </div>
      </nav>

      {/* CHANGE DIRECTION OF PAGE  */}
      <style jsx global>{`
        body {
          direction: ${language === "العربية" ? "rtl" : "ltr"};
        }
      `}</style>
    </>
  );
};

export default Nav;
