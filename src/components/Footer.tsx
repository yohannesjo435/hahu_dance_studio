import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" flex items-end py-[10%] justify-center relative w-full h-96 bg-gray-800 mt-60 rounded-t-4xl">
      <div className="absolute flex flex-col md:flex-row justify-around items-center top-[-30%] left-[50%] -translate-x-1/2 w-[70%] h-[60%] bg-blue-400 rounded-t-2xl">
        <p className="text-3xl">Have a Good Day</p>

        <div className="flex gap-3">
          <button className="px-10 btn btn-neutral">Vist us</button>
          <button className="px-10 btn btn-info">Contact Us</button>
        </div>
      </div>

      <div>
        <nav className=" text-amber-100">
          <p className="md:hidden underline mb-5 ">Links</p>
          <ul className="flex flex-col md:flex-row gap-5 md:gap-7 text-[13px] md:text-[15px]">
            {navLinks.map(
              (item: { title: string; href: string }, i: number) => (
                <li key={i}>
                  <Link
                    className="hover:font-[600] relative after:absolute after:w-0 after:h-[1px] after:bg-yellow-500  hover:after:w-full after:left-0 after:top-[120%] after:transition-all after:duration-300 cursor-pointer tracking-widest"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Footer;

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Gallery",
    href: "/",
  },
  {
    title: "About us",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];
