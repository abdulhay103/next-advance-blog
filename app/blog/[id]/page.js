import getPostDetails from "@/app/api/getPostDetails.js";
import SinglePostError from "@/app/components/SinglePostError";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const post = await getPostDetails(id);
  return (
    <main>
      {post === null ? (
        <SinglePostError />
      ) : (
        <div className=" bg-white p-5">
          <h2 className=" text-lg font-bold py-4">{post.title}</h2>
          <Image
            src={post.img}
            width={500}
            height={500}
            layout="responsive"
            alt="Blog Image"
          />
          <p className="py-4">{post.content}</p>
          <div className=" flex justify-center">
            <Link
              className=" text-orange-600 text-lg font-semibold"
              href="/blog"
            >
              Read Another post
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
