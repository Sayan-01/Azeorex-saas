import Image from "next/image";
import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-10 bg-gradient-to-t from-[#1c247c] ">
      <div className="w-[88%] mx-auto bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 mb-12 h-[1px]" />

      <div className=" flex flex-col w-full py-1 max-w-7xl sm:px-8 px-5 mx-auto">
        <div>
          {/* top */}
          <div className="flex-col md:flex-row flex gap-20">
            {/* left */}
            <div className="flex flex-col md:w-[45%] w-full">
              <div className="flex items-center justify-between w-full mb-6">
                <Image
                  className="w-32"
                  alt="logo"
                  src="/logo.svg"
                  width={400}
                  height={200}
                />
              </div>
              <p className=" text-white/60">
                Azeorex is a software company which provide many tech solution. Azeorex has a huge collection of premium templates and components. We also create complete mern stack & nextjs website.
              </p>
              <Link href="/connection">
                <h2 className="flex font-semibold text-[16px] items-center gap-3 mt-6">
                  Contact <MdOutlineArrowOutward />
                </h2>
              </Link>
            </div>
            {/* right */}
            <div className="flex gap-4 md:w-[55%] w-full justify-between overflow-scroll box">
              <div>
                <h1 className="font-semibold text-white text-lg mb-6">Pages</h1>
                {[
                  { title: "Home page", link: "/" },
                  { title: "Project page", link: "/project" },
                  { title: "About page", link: "/about" },
                  { title: "Template page", link: "/templates/products" },
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className=" text-white/60 mb-3"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </p>
                ))}
              </div>
              <div>
                <h1 className="font-semibold text-white text-lg mb-6">Company</h1>
                {[
                  { title: "Contact", link: "/connection" },
                  { title: "Security", link: "#" },
                  { title: "Privacy policy", link: "/privecy-policy" },
                  { title: "Terms & condition", link: "/terms-and-condition" },
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className=" text-white/60 mb-3"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </p>
                ))}
              </div>
              <div>
                <h1 className="font-semibold text-white text-lg mb-6">Services</h1>
                {[
                  { title: "Backend solution", link: "/connection/backend-management" },
                  { title: "Full stack project", link: "connection/full-stack-projects" },
                  { title: "Custom design", link: "connection/custom-designs" },
                  { title: "Personal website", link: "connection/personal-website" },
                ].map((item, idx) => (
                  <p
                    key={idx}
                    className=" text-white/60 mb-3"
                  >
                    <Link href={item.link}>{item.title}</Link>
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* bottom */}

          <div className="container flex sm:justify-between justify-center items-center gap-6 py-6 pb-4 px-0 max-sm:flex-col">
            <p className=" caption text-n-4 lg:block">© {new Date().getFullYear()}. All rights</p>
            <div className="flex gap-5 flex-wrap -mr-2">
              {[
                {
                  id: "0",
                  title: "LinkedIn",
                  iconUrl: "/social/linkedin.png",
                  url: "https://www.linkedin.com/in/sayandas-s1",
                },
                {
                  id: "1",
                  title: "Instagram",
                  iconUrl: "/social/instagram.png",
                  url: "https://www.instagram.com/sayan_200462/",
                },
                {
                  id: "2",
                  title: "Github",
                  iconUrl: "/social/github.png",
                  url: "https://github.com/Sayan-01",
                },
                {
                  id: "3",
                  title: "Facebook",
                  iconUrl: "/social/facebook.png",
                  url: "https://www.facebook.com/profile.php?id=100035727935505",
                },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <Image
                    className="w-6 h-6"
                    src={item.iconUrl}
                    width={20}
                    height={20}
                    alt={item.title}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
