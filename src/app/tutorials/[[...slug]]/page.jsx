import Title from "@/Components/Title";
import React from "react";

const TutorialPage = async ({ params }) => {
  //   const {  } = await params;

  const { slug } = await params;
  const [technology, topic, , page_no, subject] = slug || [];

  return (
    <div>
      <Title>{technology} Tutorials</Title>
      <h2>{topic}</h2>
      <div className="flex justify-between">
        <h3 className="font-bold">{subject}</h3>
        <h2 className="font-bold">Page No : {page_no}</h2>
      </div>
      This is Tutorials Page
    </div>
  );
};

export default TutorialPage;
