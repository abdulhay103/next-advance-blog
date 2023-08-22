import postLists from "@/app/api/getPostList.js";
import Card from "./components/Card";
import Image from "next/image";
import Link from "next/link";
const page = async () => {
  const posts = await postLists();
  return (
    <main className="">
      <section className=" bg-white">
        <h1 className="p-3 text-lg font-bold text-lime-700 text-center">
          Section-1, Image view.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {posts.map((post) => {
            return (
              <div className=" bg-white rounded shadow p-5 border-1 border-gray-600">
                <div className=" w-full">
                  <Image
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
              <div className=" bg-white rounded shadow p-5 border-1 border-gray-600">
                <Link href="#">{post.title}</Link>
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
              <div className=" bg-white rounded shadow p-5 border-1 border-gray-600">
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
