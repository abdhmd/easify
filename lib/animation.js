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
    },
  },
  headlineAnimation: {
    hidden: {
      y: -100,
      rotate: 5,
    },
    show: {
      y: 0,
      rotate: 0,
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
    },
    show: {
      y: 0,
      rotate: 0,
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
