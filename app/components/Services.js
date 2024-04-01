import Link from "next/link";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
const Services = ({ data }) => {
  const { language } = useContext(DataContext);

  const { services } = data;
  const { features } = services;
  return (
    <section>
      <h2>{services.title}</h2>

      <ul className="grid md:grid-cols-2 gap-4 lg:gap-6">
        {features.map((item) => {
          return (
            <li key={item.slug} className="p-6 shadow-md border rounded-[20px] flex flex-col gap-2 lg:gap-4">
              <div className="w-[60px] h-[60px] flex justify-center items-center text-white bg-primary rounded-[20px] ">
                <span className="scale-150">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="w-2/3">{item.description}</p>
              <Link href={`service/${item.slug}`}>
                <button className="flex gap-2 items-center text-primary hover:scale-95 duration-300 uppercase">
                  <span>{item.button}</span>
                  <BsArrowLeft
                    className={`${
                      language === "العربية" ? " flex" : "hidden"
                    } pt-[4px]`}
                  />
                  <BsArrowRight
                    className={`${
                      language != "العربية" ? " flex" : "hidden"
                    } pt-[2px]`}
                  />
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Services;
