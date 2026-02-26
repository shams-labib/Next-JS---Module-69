"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import NavLink from "./NavLink";

const Headers = () => {
  const pathName = usePathname();
  if (pathName.startsWith("/dashboard")) return <></>;
  return (
    <header className="py-4 px-5 border-b-2 border-gray-200 flex justify-between items-center ">
      <Link href={"/"} className="text-2xl font-bold">
        🔥Dev Story
      </Link>

      <nav className="space-x-6">
        <NavLink href={"/about"}>About</NavLink>
        <NavLink href={"/stories"}>Stories</NavLink>
        <NavLink href={"/login"}>Login</NavLink>
        <NavLink href={"/register"}>Register</NavLink>
        <NavLink href={"/tutorials"}>Tutorials</NavLink>
      </nav>
    </header>
  );
};

export default Headers;
