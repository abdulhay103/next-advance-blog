export default async function getPostList() {
  // Get Post List By Category
  const postList = process.env.POST_LIST;
  const res = await fetch(postList);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
