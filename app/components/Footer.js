import Image from "next/image";
import footerLogoLight from "../../public/footer-logo-light.svg";
import footerLogoDark from "../../public/footer-logo-dark.svg";
import Link from "next/link";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { socialMedia } from "@/lib/data";
import { motion } from "framer-motion";
import { footerAnimation } from "../../lib/Animation";

const Footer = () => {
  const { content, language } = useContext(DataContext);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  // ANIMATION ===============================

  const {
    logoFooterAnimation,
    iconFooterAnimation,
    iconsFooterAnimation,
    iconFooterItem,
    menuFooterAnimation,
    menuFooterItem,
    copyAnimation,
  } = footerAnimation;

  return (
    <footer className="container">
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-6">
        {/* FOOTER LOGO ================== */}
        <Link href={"/"} className="w-[120px] m-0">
          <motion.span
            initial="hidden"
            whileInView="show"
            variants={logoFooterAnimation}
          >
            <Image
              src={footerLogoLight}
              alt="logo image"
              className="dark:hidden"
              priority
            />
          </motion.span>
          <motion.span
            initial=" hidden"
            whileInView="show"
            variants={logoFooterAnimation}
          >
            <Image
              src={footerLogoDark}
              alt="logo image"
              className="hidden dark:flex"
              priority
            />
          </motion.span>
        </Link>
        {/* FOOTER MENU ======================= */}
        <div className="flex items-center ">
          <motion.ul
            initial=" hidden"
            whileInView="show"
            variants={menuFooterAnimation}
            className="flex    flex-col md:flex-row items-center gap-2  "
          >
            {content.nav.map((data) => {
              return (
                <Link key={data.name} href={data.link}>
                  <motion.li
                    variants={menuFooterItem}
                    className=" px-3 flex items-center rounded-[20px] uppercase hover:text-primary  duration-300 hover:font-semibold"
                  >
                    {data.name}
                  </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </div>
        {/* SOCIAL MEDIA =========================== */}
        <div>
          <motion.ul
            initial=" hidden"
            whileInView="show"
            variants={iconsFooterAnimation}
            className="flex items-center gap-2"
          >
            {socialMedia.map((social) => {
              return (
                <Link href={social.link} key={social.name} target="_">
                  <motion.li
                    variants={iconFooterItem}
                    style={{ background: social.color }}
                    className="btn text-white w-[50px] hover:scale-95 duration-300"
                  >
                    <motion.span variants={iconFooterAnimation}>
                      {social.icon}
                    </motion.span>
                  </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </div>
      </div>
      <motion.div
        initial=" hidden"
        whileInView="show"
        variants={copyAnimation}
        className="flex items-center justify-center font-medium text-gray-500 gap-1 pt-3 md:pt-4 lg:pt-6"
      >
        <p>{language === "العربية" ? " إيزيفاي" : "easify"}</p>
        <p className="mt-1.5 text-2xl">&copy; </p>
        <p>{currentYear}</p>
      </motion.div>
    </footer>
  );
};

export default Footer;
