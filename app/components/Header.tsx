"use client";

import React from "react";

import { navigation } from "../constants";
import MenuSvg from "./svg/MenuSvg";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HamburgerMenu } from "./design/Header";

const Header = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    setOpenNavigation(false);
  };
  return (
    <div
      className={ `fixed top-0 left-0 w-full z-50   lg:bg-n-8/20  lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8/90 pb-1" : "bg-n-8/10 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src="/logo.png" alt="logo" width={190} height={40} />
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8/90 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-grotesk tracking-widest text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-10`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>
        <a
          href="#signup"
          className="button hidden mr-8 border-2 rounded-full text-sm p-2  transition-colors text-n-1 lg:block hover:shadow-[0_0_10px_white] "
        >
          Sign Up
        </a>
        <div onClick={toggleNavigation} className="ml-auto lg:hidden">
          <MenuSvg openNavigation={openNavigation} />
        </div>
      </div>
    </div>
  );
};

export default Header;
