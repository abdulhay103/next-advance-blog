import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className=" bg-gray-50 rounded shadow p-5 border-1 border-gray-600">
      <div className=" w-full">
        <Image
          src={post.img}
          alt="pp"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <Link href="#">{post.title}</Link>
    </div>
  );
};

export default Card;
