import React from "react";
import getNewestPosts from "@/app/api/getNewestPosts.js";
import Card from "../components/Card";

const page = async () => {
  const data = await getNewestPosts();
  return (
    <main className="">
      <h1 className=" text-center py-5 text-lg text-lime-700 font-bold">
        All Newest post avaialable here.
      </h1>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {data.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </main>
  );
};

export default page;
