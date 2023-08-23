import Link from "next/link";

export default function SinglePostError() {
  return (
    <div className="flex flex-col justify-center items-center mt-40">
      <h2 className="text-red-500 pt-6 text-center text-lg font-black animate-bounce">
        Opps! No Data Found...
      </h2>
      <Link
        className="py-2 px-5 bg-lime-600 text-lg text-white rounded mt-6 animate-pulse"
        href="/blog"
      >
        See another post
      </Link>
    </div>
  );
}
