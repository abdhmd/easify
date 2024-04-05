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
<<<<<<< HEAD
      transition: { type: "spring", stiffness: 100, damping: 10 },
=======
      transition: { type: "spring", stiffness: 50, damping: 10 },
>>>>>>> e07b5c6 (easify v 1.0.4)
    },
  },
  headlineAnimation: {
    hidden: {
      y: -100,
<<<<<<< HEAD
      rotate: 5,
=======
      rotate: 50,
      scale: 0,
>>>>>>> e07b5c6 (easify v 1.0.4)
    },
    show: {
      y: 0,
      rotate: 0,
<<<<<<< HEAD
=======
      scale: 1,
>>>>>>> e07b5c6 (easify v 1.0.4)
      transition: {
        ease: "linear",
        duration: 0.4,
      },
    },
  },
  subtitleAnimation: {
    hidden: {
      y: 100,
<<<<<<< HEAD
      rotate: -5,
=======
      rotate: -50,
      scale: 0,
>>>>>>> e07b5c6 (easify v 1.0.4)
    },
    show: {
      y: 0,
      rotate: 0,
<<<<<<< HEAD
=======
      scale: 1,

>>>>>>> e07b5c6 (easify v 1.0.4)
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
<<<<<<< HEAD
=======

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
        duration: 0.4,
        when: "beforeChildren",
        staggerChildren: 0.2,
        // staggerDirection: -1,
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
        duration: 0.4,
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
};
>>>>>>> e07b5c6 (easify v 1.0.4)
