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
   * Note: the home page lives at "/home" (app/home/page.tsx) and the "Home"
   * links point there. No page is defined for "/" itself, so deleting this
   * entry would make the root URL 404 — turn it into a rewrite instead if you
   * ever want "/" to render a page again.
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
