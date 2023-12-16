"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../public/images/logo.svg";
import menuIcon from "../public/images/icon-menu.svg";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className=" bg-white fixed left-0 right-0 top-0 z-10 lg:relative">
      <div className="px-6 py-10 flex justify-between items-center mx-auto lg:px-10 lg:py-[55px] xl:px-[165px] xl:max-w-[1440px]">
        <a href="/" className="cursor-pointer">
          <Image src={logo} alt="Shortly logo" className="w-[120px] h-full object-contain object-center" />
        </a>

        <Image src={menuIcon} alt="open menu" className="w-6 h-full cursor-pointer object-contain object-center lg:hidden" onClick={() => setOpen(!open)} />
        {/* overlay */}
        <div className={`${!open ? "hidden" : "fixed"} top-[96px] bottom-0 left-0 right-0 bg-transparent lg:hidden`} onClick={() => setOpen(!open)} />

        <nav
          className={`${
            open ? "absolute" : "hidden"
          } bg-darkViolet top-[96px] text-white text-[18px] font-bold left-6 right-6 w-auto mx-auto px-6 py-10 rounded-[10px] text-center divide-y-[1px] divide-grey/25 menu slide-in lg:relative lg:flex lg:bg-white lg:text-grey lg:text-[15px] lg:justify-between lg:items-center lg:divide-y-0 lg:top-0 lg:left-0 lg:right-0 lg:w-full lg:px-0 lg:py-0 lg:text-left`}
        >
          <ul className="pb-[30px] space-y-[30px] lg:flex lg:items-center lg:space-y-0 lg:pb-0 lg:ml-[45px] lg:space-x-[30px]">
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Resources</a>
            </li>
          </ul>
          <div className="pt-[30px] flex flex-col justify-start items-center space-y-[30px] lg:flex-row lg:justify-center lg:pt-0 lg:space-y-0 lg:space-x-[37px]">
            <a href="/">Login</a>
            <button className="cta w-full">Sign Up</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
