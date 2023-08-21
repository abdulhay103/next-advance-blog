import Image from "next/image";
import React from "react";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className=" bg-gray-50 rounded shadow p-5">
      <div className=" w-full">
        <Image src={post.img} alt="pp" width={500} height={500} />
      </div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Card;
