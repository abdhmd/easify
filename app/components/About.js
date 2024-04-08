import Image from "next/image";
import footerLogoLight from "../../public/footer-logo-light.svg";
import footerLogoDark from "../../public/footer-logo-dark.svg";
import { motion } from "framer-motion";
import { titleAnimation, aboutAniamtion } from "../../lib/Animation";
const About = ({ data }) => {
  const { about } = data;
  // ANIMATION ==============================
  const { logoAnimation, imageAnimation, bodyAnimation } = aboutAniamtion;
  const { titleItemAnimation } = titleAnimation;
  return (
    <section id="about">
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={titleItemAnimation}
      >
        {about.title}
      </motion.h2>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 items-center md:items-start gap-4 lg:gap-0">
        <div className="flex flex-col col-span-2 items-center md:items-start text-center md:text-start gap-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={logoAnimation}
            className="w-[180px]"
          >
            <Image
              src={footerLogoLight}
              alt="logo image"
              className="dark:hidden"
              priority
              width={220}
              height={220}
            />
            <Image
              src={footerLogoDark}
              alt="logo image"
              className="hidden dark:flex"
              priority
              width={220}
              height={220}
            />
          </motion.div>
          <div className="flex flex-col gap-3 md:w-4/5">
            {about.body.map((item) => {
              return (
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  variants={bodyAnimation}
                  key={item}
                >
                  {item}
                </motion.p>
              );
            })}
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={imageAnimation}
        >
          <Image
            src={`/${about.image}`}
            alt="about image"
            priority
            width={220}
            height={220}
            className="image-styles"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
