import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen my-10">
      <div className="col-span-3 border-r-2 border-gray-200">
        <Link href={"/"} className="text-2xl font-bold ">
          🔥Dev Story
        </Link>
        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/my-profile"}
          >
            My Profile
          </Link>
          <Link
            className="py-2 px-4 bg-gray-600 w-full"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default Dashboard;
