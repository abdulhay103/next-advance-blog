import React from "react";
import getNewestPosts from "@/app/api/getNewestPosts.js";

const page = async () => {
  const data = await getNewestPosts();
  return (
    <div>
      <h1>Blog page</h1>
      {data.map((post) => {
        return <h1 key={post.id}>{post.title}</h1>;
      })}
    </div>
  );
};

export default page;
