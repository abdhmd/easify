// NAV ANIAMTION ===============================
export const navAnimation = {
  logoAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },

  iconsAnimation: {
    hidden: {
      opacity: 1,
      // rotate: 5,
    },
    show: {
      opacity: 1,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  iconItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },

  menuAnimation: {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.2,
        // when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  menuItem: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  },

  iconAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 180,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },

  langAnimation: {
    hidden: {
      scale: 0,
      borderRaduis: "100%",
      // rotate: 5,
    },
    show: {
      scale: 1,
      borderRaduis: 20,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // staggerDirection: -1,
      },
    },
  },
  langItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },

  slideBoxAnimation: {
    hidden: {
      width: "100%",
    },
    show: {
      width: "0%",
      transition: {
        ease: "linear",
        duration: 0.6,
      },
    },
  },

  slideAnimation: {
    hidden: {
      scale: 0,
      borderRaduis: "100%",
      // rotate: 5,
    },
    show: {
      scale: 1,
      borderRaduis: 20,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // staggerDirection: -1,
      },
    },
  },
  slideItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -2,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
};
//HERO  ANIAMTION ===============================
export const heroAnimation = {
  imageAnimation: {
    hidden: {
      y: "-10%",
      scale: 0,
      // rotate: -5,
    },
    show: {
      y: "0%",
      // rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  headlineAnimation: {
    hidden: {
      y: -100,
      rotate: 5,
      rotate: 50,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
      },
    },
  },
  subtitleAnimation: {
    hidden: {
      y: 100,
      rotate: -5,
      rotate: -50,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
      },
    },
  },

  btnAnimation: {
    hidden: {
      opacity: 0,
      // rotate: 5,
    },
    show: {
      opacity: 1,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // staggerDirection: -1,
      },
    },
  },
  btnItem: {
    hidden: {
      scale: 0,
      // rotate: 5,
    },
    show: {
      scale: 1,
      // rotate: 0,
      transition: {
        duration: 0.4,
      },
    },
  },
};
//SERVICES ANIAMTION ===============================
export const servicesAnimation = {
  serviceTitleAnimation: {
    hidden: {
      y: -60,
      rotate: 5,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.8,
      },
    },
  },
  serviceBtnAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.4,
      },
    },
  },
  serviceDescriptionAnimation: {
    hidden: {
      y: 60,
      rotate: -5,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.4,
      },
    },
  },

  serviceAnimation: {
    hidden: {
      opacity: 0,
      // rotate: 5,
    },
    show: {
      opacity: 1,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // staggerDirection: -1,
      },
    },
  },
  serviceItem: {
    hidden: {
      scale: 0,
      // rotate: 5,
    },
    show: {
      scale: 1,
      // rotate: 0,
      transition: {
        duration: 0.4,
      },
    },
  },

  iconsAnimation: {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 0.8,
      },
    },
  },
  iconItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -30,
    },
    show: {
      scale: 1.5,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
  
};
// ABOUT ANIAMTION ===============================
export const aboutAniamtion = {
  imageAnimation: {
    hidden: {
      y: "-10%",
      scale: 0,
      // rotate: -5,
    },
    show: {
      y: "0%",
      // rotate: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  logoAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  bodyAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
};
//CONTACT ANIAMTION ===============================
export const contactAnimation = {
  iconsAnimation: {
    hidden: {
      opacity: 1,
      // rotate: 5,
    },
    show: {
      opacity: 1,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  iconItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
  iconAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 180,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  contactTitleAnimation: {
    hidden: {
      y: -60,
      rotate: 5,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.8,
      },
    },
  },
  contactDescriptionAnimation: {
    hidden: {
      y: 60,
      rotate: -5,
      scale: 0,
    },
    show: {
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 0.8,
      },
    },
  },

  emailAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 1,
      },
    },
  },

  bodyAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
};
//FOOTER ANIAMTION ===============================
export const footerAnimation = {
  logoAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  iconsAnimation: {
    hidden: {
      opacity: 1,
      // rotate: 5,
    },
    show: {
      opacity: 1,
      // rotate: 0,

      transition: {
        ease: "linear",
        duration: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  },
  iconItem: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: -60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
  },
  iconAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: 180,
    },
    show: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
  menuAnimation: {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.2,
        // when: "beforeChildren",
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  },
  menuItem: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  },
  copyAnimation: {
    hidden: {
      scale: 0,
      opacity: 0,
      y: 60,
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.4,
        delay: 1,
      },
    },
  },
};
//TITLE ANIAMTION ===============================
export const titleAnimation = {
  titleItemAnimation: {
    hidden: {
      // scale: 0,
      opacity: 0,
      y: 80,
    },
    show: {
      // scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10 },
    },
  },
};
