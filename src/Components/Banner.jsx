"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const router = useRouter();
  const handleBtn = () => {
    const password = prompt("Enter your password");
    if (password == "1234") {
      router.push("/dashboard");
    }
  };

  return (
    <div className="text-center bg-linear-60 from-sky-100 to-sky-300 text-black p-10 space-y-5">
      <h1 className="text-4xl font-bold">Banner page is cocking</h1>
      <button
        onClick={handleBtn}
        className="px-4 py-3 bg-sky-400 rounded-2xl text-white hover:bg-black duration-300 cursor-pointer border-2 border-gray-300"
      >
        Share-Story
      </button>
    </div>
  );
};

export default Banner;
