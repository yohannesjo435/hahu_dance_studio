"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useEffect } from "react";

const varaints = {
  open: {
    width: 380,
    height: 450,
  },
  closed: {
    width: 100,
    height: 40,
  },
};

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [menuIsActive, setMenuActive] = useState<boolean>(false);
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "abyss" ? "light" : "abyss";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <header className="min-h-16 h-[10vh] flex justify-between items-center mx-[5%] shadow-2xl rounded-2xl">
      <div className="w-max">
        <Image
          className=""
          src="/haha_logo.png"
          alt="hahu logo"
          width={100}
          height={100}
        />
      </div>

      <nav>
        <ul className="flex gap-14 text-[13px]">
          <li>
            <Link href={"/"}>HOME</Link>
          </li>
          <li>
            <Link href={"/"}>ABOUT</Link>
          </li>
          <li>
            <Link href={"/"}>GALLERY</Link>
          </li>
          <li>
            <Link href={"/"}>FAQ</Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-5">
        <input
          type="checkbox"
          onChange={toggleTheme}
          className="mr-12 toggle border-indigo-600 bg-white checked:border-white border-2 checked:bg-black checked:text-w-800"
        />
        {/* <button className="btn btn-neutral">
          Contact us <MoveUpRight />
        </button> */}

        <div className="fixed z-10 right-2 top-3">
          <div className="relative">
            <motion.div
              className="absolute top-[100%] right-0 bg-[#0185f3] w-[380px] h-[450px] rounded-3xl z-10"
              variants={varaints}
              animate={menuIsActive ? "open" : "closed"}
            ></motion.div>
            <Button
              menuIsActive={menuIsActive}
              setMenuActive={setMenuActive}
            ></Button>
          </div>
        </div>
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
        <div className="h-full w-full bg-[#0185f3] flex justify-center items-center uppercase">
          <p>Menu</p>
        </div>
        <div className="absolute h-full w-full top-[-100%] bg-black text-white flex justify-center items-center uppercase">
          <p>Close</p>
        </div>
      </motion.div>
    </div>
  );
};

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
