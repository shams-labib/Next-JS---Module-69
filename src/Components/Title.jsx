import React from "react";

const Title = ({ children }) => {
  return (
    <div className="bg-linear-60 from-sky-100 to-sky-400 p-5 text-black">
      <h1 className="text-4xl text-blue-400">{children}</h1>
    </div>
  );
};

export default Title;
