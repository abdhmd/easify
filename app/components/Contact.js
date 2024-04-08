import { email, socialMedia } from "@/lib/data";
import Link from "next/link";
import { contactAnimation, titleAnimation } from "../../lib/Animation";
import { motion } from "framer-motion";

const Contact = ({ data }) => {
  const { contact } = data;
  // ANIMATION ==============================
  const {
    contactDescriptionAnimation,
    contactTitleAnimation,
    bodyAnimation,
    emailAnimation,
    iconsAnimation,
    iconItem,
    iconAnimation,
  } = contactAnimation;
  const { titleItemAnimation } = titleAnimation;

  return (
    <section id="contact" className="bg-theme rounded-[20px] p-6 lg:p-10  ">
      <motion.h2
        initial="hidden"
        whileInView="show"
        variants={titleItemAnimation}
        className="opacity-100"
      >
        {contact.title}
      </motion.h2>
      <motion.p
        initial="hidden"
        whileInView="show"
        variants={bodyAnimation}
        className="text-center md:text-start w-full md:w-2/3 "
      >
        {contact.body}
      </motion.p>
      <div className="flex flex-col items-center md:items-start mt-6 lg:gap-3">
        <div className=" text-center md:text-start flex flex-col items-center md:items-start gap-2 lg:gap-4">
          <motion.h3
            initial="hidden"
            whileInView="show"
            variants={contactTitleAnimation}
          >
            {contact.social.title}
          </motion.h3>
          <motion.ul
            initial="hidden"
            whileInView="show"
            variants={iconsAnimation}
            className="flex items-center gap-2 "
          >
            {socialMedia.map((social) => {
              return (
                <Link href={social.link} key={social.name} target="_">
                  <motion.li
                    variants={iconItem}
                    style={{ background: social.color }}
                    className="btn text-white w-[50px] hover:scale-95 duration-300"
                  >
                    <motion.span
                      initial="hidden"
                      whileInView="show"
                      variants={iconAnimation}
                    >
                      {social.icon}
                    </motion.span>
                  </motion.li>
                </Link>
              );
            })}
          </motion.ul>
        </div>
        <div className="text-center md:text-start flex flex-col items-center md:items-start  gap-2 lg:gap-4">
          <motion.h3
            initial="hidden"
            whileInView="show"
            variants={contactDescriptionAnimation}
          >
            {contact.email.title}
          </motion.h3>
          <motion.p
            initial="hidden"
            whileInView="show"
            variants={emailAnimation}
            className="uppercase opacity-100"
          >
            {email}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
