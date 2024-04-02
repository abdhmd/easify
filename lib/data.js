const { ar } = require("@/locales/ar");
const { en } = require("@/locales/en");

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export const languages = ["العربية", "english"];

export const socialMedia = [
  // FACEBOOK =========================
  {
    name: "facebook",
    link: "https://www.facebook.com/profile.php?id=61557460472618",
    color: "#316FF6",
    icon: <FaFacebookF className="text-xl" />,
  },

  // INSTAGRAM =========================
  {
    name: "instagram",
    link: "https://www.instagram.com/easifydz",
    color: "#833AB4",
    icon: <FaInstagram className="text-xl" />,
  },

  // TIKTOK =========================
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@easifydz",
    color: "#121212",
    icon: <FaTiktok className="text-xl" />,
  },
];
export const email = "easifydz@gmail.com";

export const data = [];

data.push(ar, en);
