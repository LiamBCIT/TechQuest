import React from "react";
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { usePathname } from "next/navigation";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link2 from "next/link";
import { BsPersonWorkspace } from "react-icons/bs";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "/home"
  },
  {
    label: "About",
    page: "/about",
  },
  {
    label: "Generator",
    page: "/generator",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  return (
    <header className="w-full mx-auto px-4 sm:px-20 fixed top-0 z-50 mb-40">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link2 href="/home" className="hover:text-teal-600">
              <div className="container flex items-center space-x-2">
                <BsPersonWorkspace />
                <span className="text-2xl font-bold text-white-500">
                  TechQuest
                </span>
              </div>
            </Link2>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 cursor-pointer ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 p-8">
                <Link2
                        className={"block lg:inline-block text-neutral-300  hover:text-neutral-500 dark:text-neutral-100 border-neutral-500"}
                        onClick={() => setNavbar(!navbar)} href={"/home"}>
                    Home
                </Link2>
                <Link2
                        className={"block lg:inline-block text-neutral-300  hover:text-neutral-500 dark:text-neutral-100 border-neutral-500"}
                        onClick={() => setNavbar(!navbar)} href={"/about"}>
                    About
                </Link2>
                <Link2
                        className={"block lg:inline-block text-neutral-300  hover:text-neutral-500 dark:text-neutral-100 border-neutral-500"}
                        onClick={() => setNavbar(!navbar)} href={"/generator"}>
                    Generator
                </Link2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
