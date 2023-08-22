export default async function getPostDetails(id) {
  // Get Post Details
  const postDetailsENV = process.env.POST_DETAILS;
  const res = await fetch(`${postDetailsENV}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const postDetails = data.postDetails;
  // console.log(postDetails);
  return postDetails;
}
