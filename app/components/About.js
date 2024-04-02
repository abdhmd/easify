import Image from "next/image";
import footerLogoLight from "../../public/footer-logo-light.svg";
import footerLogoDark from "../../public/footer-logo-dark.svg";
const About = ({ data }) => {
  const { about } = data;
  return (
    <section id="about">
      <h2>{about.title}</h2>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 items-center md:items-start gap-4 lg:gap-0">
        <div className="flex flex-col col-span-2 items-center md:items-start text-center md:text-start gap-6">
          <div className="w-[180px]">
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
          </div>
          <div className="flex flex-col gap-3 md:w-4/5">
            {about.body.map((item) => {
              return <p key={item}>{item}</p>;
            })}
          </div>
        </div>
        <Image
          src={`/${about.image}`}
          alt="about image"
          priority
          width={220}
          height={220}
          className="image-styles"
        />
      </div>
    </section>
  );
};

export default About;
