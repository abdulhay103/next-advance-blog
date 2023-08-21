export default async function getPostList() {
  // Get Newest Post
  const postList = process.env.POST_LIST;
  console.log(postList);
  const res = await fetch(postList);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);
  return data;
}
