import Link from "next/link";
import React from "react";

const Dashboard = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2 border-gray-200">
        <h1 className="text-2xl font-bold">Navigation</h1>
        <div className="flex flex-col gap-5 mt-10">
          <Link href={"/add-story"}>Add Story</Link>
          <Link href={"/my-profile"}>My Profile</Link>
          <Link href={"/settings"}>Settings</Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default Dashboard;
