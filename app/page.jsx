import postLists from "@/app/api/getPostList.js";
import Image from "next/image";
import Link from "next/link";
const page = async () => {
  const posts = await postLists();
  return (
    <main className="">
      <section className=" bg-blue-100 py-7">
        <h1 className="p-3 text-lg font-bold text-lime-700 text-center">
          Section-1, Image view.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className=" bg-white rounded shadow p-4 border-1 border-gray-600 transition-all hover:scale-105 ease-in-out hover:skew-y-1"
              >
                <div className=" w-full overflow-hidden">
                  <Image
                    className="rounded"
                    src={post.img}
                    alt="pp"
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" bg-orange-100 my-8">
        <h1 className="p-3 text-lg font-bold text-lime-700 text-center">
          Section-2, Post Titles.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className=" bg-white rounded shadow p-5 border-1 border-gray-600 animate-bounce hover:animate-none transition-all"
              >
                <Link className="py-3" href="#">
                  {post.title}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
      <section className=" bg-green-100 my-8">
        <h1 className="pt-5 text-center text-lg font-bold text-lime-700">
          Section-3, Post Details.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 p-5">
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className=" bg-white rounded shadow p-5 border-1 border-gray-600 hover:skew-y-3 ease-in-out transition-all"
              >
                <Link href="#">{post.short}</Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default page;
