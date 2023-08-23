export default async function getNewestPosts() {
  // Get Newest Post
  const newestPostData = process.env.NEWEST_POSTS;
  const res = await fetch(newestPostData);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
