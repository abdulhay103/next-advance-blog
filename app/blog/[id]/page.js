import getPostDetails from "@/app/api/getPostDetails.js";
import Image from "next/image";
import React from "react";

const page = async ({ params }) => {
  const id = params.id;
  const post = await getPostDetails(id);
  return (
    <main>
      {post === null ? (
        <h2 className="text-red-500 pt-40 text-center text-lg font-black">
          Opps! No Data Found...
        </h2>
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
        </div>
      )}
    </main>
  );
};

export default page;
