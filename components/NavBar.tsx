import Image from "next/image";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  return (
    <nav className="flex flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/icons/Convixa.png"
          alt="Convixa Logo"
          width={40}
          height={40}
          className="max-sm:size-10"
        />
        <p className="text-[26px] font-extrabold ml-2 text-white max-sm:hidden">
          Convixa
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Cler User */}
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default NavBar;
