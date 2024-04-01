import Image from "next/image";
import Link from "next/link";

const Hero = ({ data }) => {
  const { hero } = data;
  const { headline, subtitle, contactBtn, servicesBtn, image } = hero;
  return (
    <section id="home">
      <div className="flex flex-col-reverse lg:flex-row items-center md:items-start justify-between mt-8">
        <div className="flex flex-col items-center md:items-start text-center md:text-start mt-4 lg:mt-0 gap-4 ">
          <h1>{headline}</h1>
          <p className="md:w-4/5">{subtitle}</p>
          <div className="flex items-center gap-2 md:mt-2 lg:mt-4 xl:mt-6">
            <Link href="#contact">
              <button className="large-btn bg-primary  ">{contactBtn}</button>
            </Link>
            <Link href="#services">
              <button className="large-btn bg-secondary dark:text-black  dark:bg-white">
                {servicesBtn}
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={`/${image}`}
            alt="hero image"
            priority
            width={220}
            height={220}
            className="image-styles"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
