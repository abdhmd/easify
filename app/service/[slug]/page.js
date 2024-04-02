"use client";

import { DataContext } from "@/context/DataContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
const Service = ({ params }) => {
  const { content } = useContext(DataContext);

  const data = content.services.features;
  const dataFiltred = data.filter((item) => item.slug === params.slug);
  const service = dataFiltred[0];
  const { headline, subtitle, image, contactBtn, featuresBtn } =
    service.contentData.hero;
  const features = service.contentData.description;
  const order = service.contentData.order;

  return (
    <main className="container">
      <section id="home">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-3 items-center md:items-start justify-between mt-8">
          <div className=" col-span-2 flex flex-col items-center md:items-start text-center md:text-start mt-4 lg:mt-0 gap-4 ">
            <h1>{headline}</h1>
            <p className="md:w-4/5">{subtitle}</p>
            <div className="flex items-center gap-2 md:mt-2 lg:mt-4 xl:mt-6">
              <Link href={`${params.slug}/#contact`}>
                <button className="large-btn bg-primary  ">{contactBtn}</button>
              </Link>
              <Link href={`${params.slug}/#features`}>
                <button className="large-btn bg-secondary dark:text-black  dark:bg-white">
                  {featuresBtn}
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

      <section id="features">
        <h2>{features.title}</h2>

        <ul className="grid md:grid-cols-2  gap-4 lg:gap-6 ">
          {features.distinctive.map((item) => {
            return (
              <li
                key={item.title}
                className="p-6 shadow-md border rounded-[20px] flex flex-col gap-2 lg:gap-4"
              >
                <div className="w-[60px] h-[60px] flex justify-center items-center text-white bg-primary rounded-[20px] ">
                  <span className="scale-150">{item.icon}</span>
                </div>
                <h3>{item.title}</h3>
                <p className="">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section id="contact">
        <div className="flex flex-col lg:flex-row items-center justify-between bg-primary rounded-[20px] p-6 lg:p-8 ">
          <h2 className="opacity-100  text-center lg:text-start text-white w-fit lg:p-0">
            {order.title}
          </h2>
          <Link href="/#contact">
            <button className="large-btn bg-white !text-black ">
              {order.contactBtn}
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Service;
