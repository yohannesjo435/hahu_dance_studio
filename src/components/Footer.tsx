import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1500px] m-auto max-h-[500px] mt-20 p-5 h-[150vh] md:h-[90vh] gap-5 flex-1 flex flex-col">
      <div className="w-full flex flex-col md:flex-row lg:px-7 lg:pl-3 justify-between items-center">
        <h1 className="text-9xl md:text-[200px] font-bold">MORE</h1>
        <ul className="text-[20px] grid gap-2">
          <li>Addis Ababa Ethiopia</li>
          <li>AA</li>
          <li>hahu@gmail.com</li>
          <li>+2519 0111111</li>
        </ul>
      </div>

      <div className="flex-1 flex flex-col-reverse md:flex-row gap-5">
        <div className="text-[14px] lg:text-[18px] px-3 flex flex-1 justify-around">
          <nav className="flex flex-col gap-3">
            <hr className="w-44 md:w-24 lg:w-44 mb-5" />
            {navLinks.map(({ title, href }) => (
              <Link
                key={title}
                href={href}
                className="hover:font-bold hover:ease-in-out"
              >
                {title}
              </Link>
            ))}
          </nav>

          <ul className="flex flex-col gap-3">
            <hr className="w-44 md:w-24 lg:w-44 mb-5" />
            <li>Addis Ababa Ethiopia</li>
            <li>AA</li>
            <li>hahu@gmail.com</li>
            <li>+2519 0111111</li>
          </ul>
        </div>

        <Link
          href={"/#aboutSection"}
          className="p-3 flex flex-1 justify-between rounded-lg text-black bg-white font-mono text-3xl lg:text-[50px] outline-1"
        >
          <h1>AboutUs</h1>

          <div className="h-max my-2 hover:-rotate-45 ease-in-out duration-150">
            <svg
              width="56"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="black"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        <Link
          href={"#faq"}
          className="p-3 flex flex-1 justify-between rounded-lg text-black bg-white font-mono text-3xl lg:text-[50px] outline-1"
        >
          <h1>FAQs</h1>

          <div className="h-max my-2 hover:-rotate-45 ease-in-out duration-150">
            <svg
              width="56"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="black"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </div>
    </footer>
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
    href: "/gallery",
  },
  {
    title: "About us",
    href: "/#aboutSection",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
