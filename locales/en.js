import { RiGlobalLine } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";
import { MdPhonelink, MdOutlineStreetview } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { IoCreate, IoPeopleSharp } from "react-icons/io5";
import { AiFillControl } from "react-icons/ai";

export const en = {
  language: "english",

  //NAV ======================
  nav: [
    { name: "home", link: "/" },
    { name: "services", link: "/#services" },
    { name: "about  ", link: "/#about" },
    { name: "contact ", link: "/#contact" },
  ],

  //NAV ======================
  hero: {
    headline: "For an integrated ecommerce store and professional marketing",
    subtitle:
      "To get a professional and modern e-commerce store with a sponsored ads service for commercial pages",
    contactBtn: "contact us",
    servicesBtn: "take a look",
    image: "hero-image.png",
  },

  //SERVICES ======================
  services: {
    title: "Discover our unique services",

    features: [
      //Website ====================
      {
        icon: <RiGlobalLine />,
        title: "ecommerce website",
        description: "Creating a professional online store",
        button: "see more",
        slug: "website",

        //content ======================
        contentData: {
          hero: {
            headline: "Professional online store creation service",
            subtitle:
              "We provide you with an easy-to-use design, compatible with all devices, along with advanced features to enhance the shopping experience",
            contactBtn: "Order now",
            featuresBtn: "features",
            image: "website-image.png",
          },
          description: {
            title: "What distinguishes our online stores?",
            distinctive: [
              {
                icon: <TbHandClick />,
                title: "Accessible design",
                body: "We focus on designing a user-friendly interface to ensure a smooth shopping experience for your customers",
              },
              {
                icon: <MdPhonelink />,
                title: "Compatible with all devices.",
                body: "We ensure that your online store appears perfectly on all devices",
              },
              {
                icon: <FaPenNib />,
                title: "Attractive Designs",
                body: "We offer a variety of attractive designs that suit different types of products and brands",
              },
              {
                icon: <MdOutlineStreetview />,
                title: "Advanced Features",
                body: "We provide numerous advanced features to enhance the shopping experience",
              },
            ],
          },
          order: {
            title: "Get Your Online Store Now",
            contactBtn: "contact us",
          },
        },
      },
      //Ads ====================
      {
        icon: <TbHandClick />,
        title: "Sponsored Ads",
        description: "Managing Sponsored Advertising Campaigns",
        button: "see more",
        slug: "ads",

        //content ======================
        contentData: {
          hero: {
            headline: "Facebook Sponsored Ads Service",
            subtitle:
              "We provide you with Facebook sponsored ads service, enabling you to effectively reach your targeted audience and achieve your marketing goals",

            contactBtn: "order now",
            featuresBtn: "features",
            image: "ads-image.png",
          },
          description: {
            title:
              "What services do we offer in the field of Facebook sponsored advertisements?",

            distinctive: [
              {
                icon: <IoPeopleSharp />,
                title: "Audience Targeting",
                body: "We use advanced tools to accurately identify your targeted audience and ensure your ads reach the right people",
              },
              {
                icon: <IoCreate />,
                title: "Ad Creation and Design",
                body: "We have a team of creative designers who will create and design attractive ads that capture the attention of your targeted audience",
              },
              {
                icon: <AiFillControl />,
                title: "Advertising Campaign Management",
                body: "We fully manage your advertising campaigns, from creating ads to tracking and continuously optimizing their performance",
              },
            ],
          },
          order: {
            title: "To Help You Achieve Your Marketing Goals",
            contactBtn: "contact us",
          },
        },
      },
    ],
  },

  //ABOUT US ======================
  about: {
    title: "abou us",
    image: "about-image.png",
    body: [
      "A specialized website in providing services for creating ecommerce stores and managing funded advertising campaigns.",
      "We strive to assist business owners in creating successful online stores and achieving their business goals by providing high-quality services at the lowest cost.",
    ],
  },
};
