import Link from "next/link";
import React from "react";

const NotFound404 = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5 ">
      <h1>404 | Your Content Not Found Boobie</h1>
      <Link href={"/"} className="underline">
        Go To Home
      </Link>
    </div>
  );
};

export default NotFound404;
