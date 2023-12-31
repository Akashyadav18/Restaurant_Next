import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLink from "./UserLink";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 text-red-500 text-lg font-bold p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase md:h-24 lg:px-10 xl:px-20">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-8 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* LOGO */}
      <div className="text-3xl md:font-bold flex-1 md:text-center">
        <Link href="/">Among us</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-center flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>123 456 78</span>
        </div>
        <UserLink/>
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
