import postLists from "@/app/api/getPostList.js";
const page = async () => {
  const posts = await postLists();
  return (
    <div className="">
      <h1 className="py-3 text-lg font-bold">Server side API Rendaring</h1>
      {posts.map((post) => {
        return <h1>{post.title}</h1>;
      })}
    </div>
  );
};

export default page;
