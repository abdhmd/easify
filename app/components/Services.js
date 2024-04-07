import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { titleAnimation, servicesAnimation } from "@/lib/animation";
import { setRequestMeta } from "next/dist/server/request-meta";

const Services = ({ data }) => {
  const { language } = useContext(DataContext);
  const { services } = data;
  const { features } = services;

  // ANIMATION ==============================
  const {
    serviceAnimation,
    serviceItem,
    serviceTitleAnimation,
    serviceDescriptionAnimation,
    serviceBtnAnimation,
    iconsAnimation,
    iconItem,
  } = servicesAnimation;
  const { titleItemAnimation } = titleAnimation;

  return (
    <section id="services">
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={titleItemAnimation}
      >
        {services.title}
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="show"
        variants={serviceAnimation}
        className="grid md:grid-cols-2 gap-4 lg:gap-6"
      >
        {features.map((item) => {
          return (
            <motion.li
              variants={serviceItem}
              key={item.slug}
              className="p-6 bg-theme rounded-[20px] flex flex-col gap-2 lg:gap-4"
            >
              <motion.div
                initial="hidden"
                whileInView="show"
                variants={iconsAnimation}
                className="w-[60px] h-[60px] flex justify-center items-center text-white bg-primary rounded-[20px] "
              >
                <motion.span variants={iconItem} className="scale-150">
                  {item.icon}
                </motion.span>
              </motion.div>
              <motion.h3
                initial="hidden"
                whileInView="show"
                variants={serviceTitleAnimation}
              >
                {item.title}
              </motion.h3>
              <motion.p
                initial="hidden"
                whileInView="show"
                variants={serviceDescriptionAnimation}
                className="w-2/3"
              >
                {item.description}
              </motion.p>
              <Link href={`service/${item.slug}`}>
                <motion.button
                  initial="hidden"
                  whileInView="show"
                  variants={serviceBtnAnimation}
                  className="flex gap-2 items-center text-primary hover:scale-95 duration-300 uppercase"
                >
                  <span>{item.button}</span>
                  <BsArrowLeft
                    className={`${
                      language === "العربية" ? " flex" : "hidden"
                    } pt-[4px]`}
                  />
                  <BsArrowRight
                    className={`${
                      language != "العربية" ? " flex" : "hidden"
                    } pt-[2px]`}
                  />
                </motion.button>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Services;
