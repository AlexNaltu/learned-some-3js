import Link from "next/link";
import React from "react";
import { TiHomeOutline } from "react-icons/ti";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { BiSolidContact } from "react-icons/bi";
import { FaQuestion } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="fixed bottom-0  text-white w-full sm:top-0 sm:w-fit">
      <nav className="flex w-full sm:flex-col bg-slate-500 h-full px-2 justify-between py-6 items-center">
        <h1 className="hidden sm:inline-block text-3xl">A</h1>
        <div className="flex w-full justify-between p-2 gap-4 sm:gap-8 sm:flex-col ">
          <Link href="/">
            <TiHomeOutline size={30} />
          </Link>

          <Link href="/">
            <HiMiniSquare3Stack3D size={30} />
          </Link>

          <Link href="/">
            <BiSolidContact size={30} />
          </Link>

          <Link href="/">
            <FaQuestion size={30} />
          </Link>

          <Link href="/">
            <IoShareSocial size={30} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
