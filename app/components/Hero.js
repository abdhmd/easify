import { heroAnimation } from "@/lib/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const Hero = ({ data }) => {
  const { hero } = data;
  const { headline, subtitle, contactBtn, servicesBtn, image } = hero;
  const {
    headlineAnimation,
    imageAnimation,
    subtitleAnimation,
    btnAnimation,
    btnItem,
  } = heroAnimation;
  return (
    <section id="home">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 items-center md:items-start justify-between mt-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 lg:mt-0 gap-4  col-span-2">
          <motion.h1
            initial="hidden"
            whileInView="show"
            variants={headlineAnimation}
            // viewport={{ once: true }}
          >
            {headline}
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={subtitleAnimation}
            // viewport={{ once: true }}
            className="md:w-4/5"
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={btnAnimation}
            // viewport={{ once: true }}

            className="flex items-center gap-2 md:mt-2 lg:mt-4 xl:mt-6"
          >
            <Link href="#contact">
              <motion.button
                variants={btnItem}
                className="large-btn bg-primary  "
              >
                {contactBtn}
              </motion.button>
            </Link>
            <Link href="#services">
              <motion.button
                variants={btnItem}
                className="large-btn bg-secondary dark:text-black  dark:bg-white"
              >
                {servicesBtn}
              </motion.button>
            </Link>
          </motion.div>
          {/* just a comment  */}
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={imageAnimation}
          // viewport={{ once: true }}
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
  );
};

export default Hero;
