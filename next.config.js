/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEWEST_POSTS: "https://basic-blog.teamrabbil.com/api/post-newest",
    POST_LIST: "https://basic-blog.teamrabbil.com/api/post-list/1",
    POST_DETAILS: "https://basic-blog.teamrabbil.com/api/post-details",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roar.media",
      },
    ],
  },
  distDir: "build",
};

module.exports = nextConfig;
