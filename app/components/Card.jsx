import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ post }) => {
  console.log(post);
  return (
    <div className=" bg-gray-50 rounded shadow p-5 border-1 border-gray-600 transition-all hover:scale-105">
      <div className=" w-full">
        <Image
          src={post.img}
          alt="pp"
          width={500}
          height={500}
          layout="responsive"
        />
      </div>
      <div className="pt-5">
        <Link
          className=" hover:text-lime-600 text-lg font-semibold"
          href={`/blog/${post.id}`}
        >
          {post.title}
        </Link>
      </div>
    </div>
  );
};

export default Card;
