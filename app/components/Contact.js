import { email, socialMedia } from "@/lib/data";
import Link from "next/link";

const Contact = ({ data }) => {
  const { contact } = data;
  return (
    <section id="contact" className="bg-theme rounded-[20px] p-6 lg:p-10  ">
      <h2 className="opacity-100">{contact.title}</h2>
      <p className="text-center md:text-start w-full md:w-2/3 ">
        {contact.body}
      </p>
      <div className="flex flex-col items-center md:items-start mt-6 lg:gap-3">
        <div className=" text-center md:text-start flex flex-col items-center md:items-start gap-2 lg:gap-4">
          <h3>{contact.social.title}</h3>
          <ul className="flex items-center gap-2 ">
            {socialMedia.map((social) => {
              return (
                <Link href={social.link} key={social.name} target="_">
                  <li
                    style={{ background: social.color }}
                    className="btn text-white w-[50px] hover:scale-95 duration-300"
                  >
                    {social.icon}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div className="text-center md:text-start flex flex-col items-center md:items-start  gap-2 lg:gap-4">
          <h3>{contact.email.title}</h3>
          <p className="uppercase opacity-100">{email}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
