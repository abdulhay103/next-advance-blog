export default async function getPostList() {
  // Get Newest Post
  const postList = process.env.NEWEST_POSTS;
  const res = await fetch(postList);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
