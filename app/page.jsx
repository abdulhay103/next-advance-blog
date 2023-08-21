import postLists from "@/app/api/getPostList.js";
import Card from "./components/Card";
const page = async () => {
  const posts = await postLists();
  return (
    <div className="">
      <h1 className="py-3 text-lg font-bold">Server side API Rendaring</h1>
      <div className="grid grid-cols-2 gap-5">
        {posts.map((post) => {
          return <Card key={post.id} post={post} />;
        })}
      </div>
    </div>
  );
};

export default page;
