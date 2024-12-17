import { Separator } from "@/components/ui/separator";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="pt-1 bg-gradient-to-t from-[#1c247c] ">
      <div className="w-[88%] mx-auto bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 mb-12 h-[1px]" />
      <Separator className="relative z-10 top-5 my-10" />

      <div className=" flex flex-col w-full py-1 max-w-7xl sm:px-8 px-5 mx-auto">
        <div>
          {/* top */}
          <div className="flex-col md:flex-row flex gap-20">
            {/* left */}
            <div className="flex flex-col md:w-[45%] w-full">
              <div className="font-bold text-xl w-full mb-6">Sayan.</div>
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
                  iconUrl: <LinkedInLogoIcon color="white" />,
                  url: "https://www.linkedin.com/in/sayandas-s1",
                },
                {
                  id: "1",
                  title: "Instagram",
                  iconUrl: <InstagramLogoIcon />,
                  url: "https://www.instagram.com/sayan_200462/",
                },
                {
                  id: "2",
                  title: "Github",
                  iconUrl: <GitHubLogoIcon />,
                  url: "https://github.com/Sayan-01",
                },
              ].map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  {item.iconUrl}
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
