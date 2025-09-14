"use client";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";

const varaints = {
  open: {
    width: 380,
    height: 450,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const navAnim = {
  initial: {
    opacity: 0,
  },
  enter: (i: number) => ({
    opacity: 1,
    transition: { delay: 0.3 + i * 0.15 },
  }),
  exit: {
    opacity: 0,
  },
};

const arrowHoverVarints: Variants = {
  initial: { opacity: 0, x: -24 },
  hover: { opacity: 1, x: 0 },
};

const textHoverVariants: Variants = {
  initial: { x: 0 },
  hover: { x: 12 },
};

const Header = () => {
  const [theme, setTheme] = useState("silk");
  const [menuIsActive, setMenuActive] = useState<boolean>(false);
  const [showMenuOnScroll, setShowMenuOnScroll] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "abyss" ? "silk" : "abyss";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowMenuOnScroll(scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="max-w-[1500px] px-[2%] lg:px-[5%] m-auto min-h-16 h-[10vh] flex justify-between items-center">
      <Link href={"/"}>
        <Image
          loading="lazy"
          src="/hahu_logo.png"
          alt="hahu logo"
          width={50}
          height={100}
        />
      </Link>

      <nav className="ml-[5%]">
        <ul className="md:flex hidden md:gap-7 text-[13px] md:text-[15px]">
          {navLinks.map((item: { title: string; href: string }, i: number) => (
            <li key={i}>
              <Link
                className="hover:font-[600] relative after:absolute after:w-0 after:h-[1px] after:bg-yellow-500  hover:after:w-full after:left-0 after:top-[120%] after:transition-all after:duration-300 cursor-pointer tracking-widest"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="toggle border-indigo-600 bg-white checked:border-white border-2 checked:bg-black checked:text-w-800"
        />
        <Link href={"/contact"} className="btn btn-neutral">
          Contact us <MoveUpRight />
        </Link>
        {showMenuOnScroll && (
          <motion.div
            className="fixed z-10 right-5 top-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-[100px] h-[50px]">
              <motion.div
                className="absolute top-[100%] right-0 bg-[#f4f809] rounded-3xl z-10"
                variants={varaints}
                animate={menuIsActive ? "open" : "closed"}
              >
                {menuIsActive && <Nav navLinks={navLinks} />}
              </motion.div>

              <Button
                menuIsActive={menuIsActive}
                setMenuActive={setMenuActive}
              ></Button>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;

export const Button = ({
  menuIsActive,
  setMenuActive,
}: {
  menuIsActive: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div
      onClick={() => setMenuActive(!menuIsActive)}
      className="absolute top-0 right-0 h-[40px] w-[100px] rounded-3xl cursor-pointer overflow-hidden z-20"
    >
      {/* slider for btn */}
      <motion.div
        className="relative h-full w-full duration-75 ease-(0.87, 0, 0.13, 1)"
        animate={{ top: menuIsActive ? "100%" : "0" }}
      >
        <div className="h-full w-full bg-[#f4f809] dark:text-black flex justify-center items-center uppercase">
          <p>Menu</p>
        </div>
        <div className="absolute h-full w-full top-[-100%] bg-black text-white flex justify-center items-center uppercase">
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

export const Nav = ({
  navLinks,
}: {
  navLinks: { title: string; href: string }[];
}) => {
  return (
    <nav>
      <ul className="flex flex-col px-14 justify-around items-start  h-[250px] mt-16 text-[46px]">
        {navLinks.map((item: { title: string; href: string }, i: number) => (
          <motion.li
            className="flex items-center "
            variants={navAnim}
            custom={i}
            initial="initial"
            animate="enter"
            exit="exit"
            key={i}
            whileHover="hover"
          >
            {/* arrow container */}
            <motion.span
              className="absolute left-10 pointer-events-none"
              variants={arrowHoverVarints}
              transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            >
              <RightArrow />
            </motion.span>

            {/* link wrapper */}
            <motion.span
              className="pl-8"
              variants={textHoverVariants}
              transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <Link
                className="text-nowrap hover:font-semi-bold dark:text-black"
                href={item.href}
              >
                {item.title}
              </Link>
            </motion.span>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
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

const RightArrow = () => {
  return (
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
  );
};
