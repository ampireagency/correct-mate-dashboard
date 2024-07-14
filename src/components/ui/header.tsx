"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathname = usePathname();

  const path =
    pathname === "/login" || pathname === "/signup" || pathname === "/";

  return (
    <>
      {path && (
        <header>
          <nav className="border-b border-gray-200 bg-white px-4 py-2.5 lg:px-8 flex justify-between">
            <div className=" flex max-w-screen-xl items-center justify-between">
              <Link
                href="/"
                className="flex w-full items-center text-lg font-bold"
              >
                Correct Mate
              </Link>
            </div>
            <div className="capitalize flex gap-5 font-bold ">
              <Link href="/login">login</Link>
              <Link href="/signup">signup</Link>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
