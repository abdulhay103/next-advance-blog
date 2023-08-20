/** @type {import('next').NextConfig} */
const nextConfig = {
  //   basePath: "/abc",
  env: {
    API_KEY: "Hello",
  },
  async headers() {
    return [{ source: "/path*" }];
  },
};

module.exports = nextConfig;
