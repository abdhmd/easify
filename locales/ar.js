import { RiGlobalLine } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";
import { MdPhonelink, MdOutlineStreetview } from "react-icons/md";
import { FaPenNib } from "react-icons/fa";
import { IoCreate, IoPeopleSharp } from "react-icons/io5";
import { AiFillControl } from "react-icons/ai";

export const ar = {
  language: "العربية",
  //NAV ======================
  nav: [
    { name: "الرئيسية", link: "/" },
    { name: "خدماتنا", link: "/#services" },
    { name: "من نحن", link: "/#about" },
    { name: "اتصل بنا", link: "/#contact" },
  ],

  //HERO ======================
  hero: {
    headline: "لمتجر إلكتروني متكامل واحترافية التسويق",
    subtitle:
      "للحصول على متجر الكتروني إحترافي و عصري مع خدمة إعلانات ممولة للصفحات التجارية",
    contactBtn: "اتصل الأن",
    servicesBtn: "ألقي نظرة",
    image: "hero-image.png",
  },

  //SERVICES ======================
  services: {
    title: "اكتشف خدماتنا مميزة",

    features: [
      //Website ====================
      {
        icon: <RiGlobalLine />,
        title: "متجر إلكتروني",
        description: "إنشاء متجر إلكتروني احترافي",
        button: "اكتشف المزيد",
        slug: "website",

        //content ======================
        contentData: {
          hero: {
            headline: "خدمة إنشاء  متجر إلكتروني إحترافي",
            subtitle:
              "نوفر لك تصميمًا سهل الاستخدام، ومتوافقًا مع جميع الأجهزة مع ميزات متقدمة لتعزيز تجربة التسوق",
            contactBtn: "أطلب الخدمة",
            featuresBtn: "ميزات الخدمة",
            image: "website-image.png",
          },
          description: {
            title: "ما الذي يميز متاجرنا الإلكترونية",
            distinctive: [
              {
                icon: <TbHandClick />,
                title: "تصميم سهل الاستخدام",
                body: "نهتم بتصميم واجهة سهلة الاستخدام لضمان تجربة تسوق سلسة لعملائك",
              },
              {
                icon: <MdPhonelink />,
                title: "متوافقة مع جميع الأجهزة",
                body: "نضمن أن يظهر متجرك الإلكتروني بشكل مثالي على جميع الأجهزة",
              },
              {
                icon: <FaPenNib />,
                title: "تصميمات جذابة",
                body: "نقدم مجموعة متنوعة من التصميمات الجذابة التي تناسب مختلف أنواع المنتجات والعلامات التجارية",
              },
              {
                icon: <MdOutlineStreetview />,
                title: "مميزات متقدمة",
                body: " نوفر العديد من الميزات المتقدمة لتعزيز تجربة التسوق",
              },
            ],
          },
          order: {
            title: "أحصل على متجرك الإلكتروني الآن",
            contactBtn: "تواصل معنا",
          },
        },
      },

      //Ads ====================
      {
        icon: <TbHandClick />,
        title: "إعلانات ممولة",
        description: "إدارة حملات إعلانية ممولة",
        button: "اكتشف المزيد",
        slug: "ads",

        //content ======================
        contentData: {
          hero: {
            headline: "خدمة الإعلانات الممولة عبر فيسبوك",
            subtitle:
              "نقدم لك خدمة الإعلانات الممولة عبر فيسبوك، والتي تُمكنك من الوصول إلى جمهورك المستهدف بشكل فعال وتحقيق أهدافك التسويقية",
            contactBtn: "أطلب الخدمة",
            featuresBtn: "ميزات الخدمة",
            image: "ads-image.png",
          },
          description: {
            title:
              "ما هي الخدمات التي نقدمها في مجال الإعلانات الممولة عبر فيسبوك؟",
            distinctive: [
              {
                icon: <IoPeopleSharp />,
                title: "استهداف الجمهور",
                body: "نستخدم أدوات متقدمة لتحديد جمهورك المستهدف بدقة و ضمان وصول إعلاناتك إلى الأشخاص المناسبين",
              },
              {
                icon: <IoCreate />,
                title: "إنشاء وتصميم الإعلانات",
                body: "نمتلك فريقًا من المصممين المبدعين الذين سيقومون بإنشاء وتصميم إعلانات جذابة تُلفت انتباه جمهورك المستهدف",
              },
              {
                icon: <AiFillControl />,
                title: "إدارة الحملات الإعلانية",
                body: " نقوم بإدارة حملاتك الإعلانية بشكل كامل، من إنشاء الإعلانات إلى تتبع أدائها وتحسينها بشكل مستمر",
              },
            ],
          },
          order: {
            title: "لمساعدتك على تحقيق أهدافك التسويقية",
            contactBtn: "تواصل معنا",
          },
        },
      },
    ],
  },

  //ABOUT US ======================
  about: {
    title: "من نحن",
    image: "about-image.png",
    body: [
      "موقع متخصص في تقديم خدمات إنشاء المتاجر الإلكترونية وإدارة حملات الإعلانات الممولة.",
      "نسعى إلى مساعدة أصحاب الأعمال في إنشاء متاجر إلكترونية ناجحة وتحقيق أهدافهم التجارية من خلال تقديم خدمات عالية الجودة بأقل تكلفة.",
    ],
  },
};
