/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: { ignoreDuringBuilds: true },
  /**
   * The portfolio page is the landing page: the bare domain ("/") is
   * forwarded to "/portfolio".
   *
   * `permanent: false` serves a temporary 307 so the redirect is never cached
   * by visitors' browsers (and can be reverted at any time). Switch it to
   * `permanent: true` (308) once the site structure is final so search engines
   * consolidate the home URL into /portfolio.
   *
   * Note: app/page.tsx (the home page) is intentionally kept on disk, so
   * removing this entry restores the home page at "/" instantly.
   */
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
