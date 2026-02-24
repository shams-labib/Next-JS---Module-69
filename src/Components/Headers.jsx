import Link from "next/link";
import React from "react";

const Headers = () => {
  return (
    <header className="py-4 px-5 border-b-2 border-gray-200 flex justify-between items-center ">
      <Link href={"/"} className="text-2xl font-bold">
        🔥Dev Story
      </Link>

      <nav className="space-x-6">
        <Link href={"/about"}>About</Link>
        <Link href={"/stories"}>Stories</Link>
        <Link href={"/login"}>Login</Link>
        <Link href={"/register"}>Register</Link>
        <Link href={"/tutorials"}>Tutorials</Link>
      </nav>
    </header>
  );
};

export default Headers;
