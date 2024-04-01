import Image from "next/image";
import footerLogoLight from "../../public/footer-logo-light.svg";
import footerLogoDark from "../../public/footer-logo-dark.svg";
import Link from "next/link";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { socialMedia } from "@/lib/data";
const Footer = () => {
  const { content, language } = useContext(DataContext);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="container">
      <div className="flex flex-col lg:flex-row  items-center justify-between gap-6">
        {/* FOOTER LOGO ================== */}
        <Link href={"/"} className="w-[120px] m-0">
          <Image src={footerLogoLight} alt="logo image" className="dark:hidden" priority />
          <Image src={footerLogoDark} alt="logo image" className="hidden dark:flex" priority />
        </Link>
        {/* FOOTER MENU ======================= */}
        <div className="flex items-center ">
          <ul className="flex    flex-col md:flex-row items-center gap-2  ">
            {content.nav.map((data) => {
              return (
                <Link key={data.name} href={data.link}>
                  <li className=" px-3 flex items-center rounded-[20px] uppercase hover:text-primary  duration-300 hover:font-semibold">
                    {data.name}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        {/* SOCIAL MEDIA =========================== */}
        <div>
          <ul className="flex items-center gap-2">
            {socialMedia.map((social) => {
              return (
                <Link href={social.link} key={social.name} target="_">
                  <li
                    style={{ background: social.color }}
                    className="btn text-white w-[50px] hover:scale-95 duration-300"
                  >
                    {social.icon}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center font-medium text-gray-500 gap-1 py-3 md:py-4 lg:py-6">
        <p>{language === "العربية" ? " إيزيفاي" : "easify"}</p>
        <p className="mt-1.5 text-2xl">&copy; </p>
        <p>{currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
