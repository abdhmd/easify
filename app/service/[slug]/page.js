"use client";

import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  heroAnimation,
  titleAnimation,
  servicesAnimation,
} from "../../../lib/Animation";
import { motion } from "framer-motion";

const Service = ({ params }) => {
  const { content } = useContext(DataContext);

  const data = content.services.features;
  const dataFiltred = data.filter((item) => item.slug === params.slug);
  const service = dataFiltred[0];
  const { headline, subtitle, image, contactBtn, featuresBtn } =
    service.contentData.hero;
  const features = service.contentData.description;
  const order = service.contentData.order;

  // ANIMATION ==============================
  const {
    headlineAnimation,
    imageAnimation,
    subtitleAnimation,
    btnAnimation,
    btnItem,
  } = heroAnimation;

  const {
    serviceAnimation,
    serviceItem,
    serviceTitleAnimation,
    serviceDescriptionAnimation,
    iconsAnimation,
    iconItem,
  } = servicesAnimation;
  const { titleItemAnimation } = titleAnimation;

  return (
    <main className="container">
      <section id="home">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 items-center md:items-start justify-between mt-8">
          <div className=" col-span-2 flex flex-col items-center md:items-start text-center md:text-start mt-4 lg:mt-0 gap-4 ">
            <motion.h1
              initial="hidden"
              whileInView="show"
              variants={headlineAnimation}
            >
              {headline}
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="show"
              variants={subtitleAnimation}
              className="md:w-4/5"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={btnAnimation}
              className="flex items-center gap-2 md:mt-2 lg:mt-4 xl:mt-6"
            >
              <Link href={`${params.slug}/#contact`}>
                <motion.button
                  variants={btnItem}
                  className="large-btn bg-primary  "
                >
                  {contactBtn}
                </motion.button>
              </Link>
              <Link href={`${params.slug}/#features`}>
                <motion.button
                  variants={btnItem}
                  className="large-btn bg-secondary dark:text-black  dark:bg-white"
                >
                  {featuresBtn}
                </motion.button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={imageAnimation}
          >
            <Image
              src={`/${image}`}
              alt="hero image"
              priority
              width={220}
              height={220}
              className="image-styles"
            />
          </motion.div>
        </div>
      </section>

      <section id="features">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={titleItemAnimation}
        >
          {features.title}
        </motion.h2>

        <motion.ul
          initial="hidden"
          whileInView="show"
          variants={serviceAnimation}
          className="grid md:grid-cols-2  gap-4 lg:gap-6 "
        >
          {features.distinctive.map((item) => {
            return (
              <motion.li
                variants={serviceItem}
                key={item.title}
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
                  className=""
                >
                  {item.body}
                </motion.p>
              </motion.li>
            );
          })}
        </motion.ul>
      </section>

      <section id="contact">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-theme rounded-[20px] p-6 lg:p-8 ">
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={titleAnimation}
            className="opacity-100  text-center lg:text-start  w-fit lg:p-0"
          >
            {order.title}
          </motion.h2>
          <Link href="/#contact">
            <motion.button
              initial="hidden"
              whileInView="show"
              variants={btnAnimation}
              className="large-btn bg-primary "
            >
              <motion.span variants={btnItem}>{order.contactBtn}</motion.span>
            </motion.button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Service;
