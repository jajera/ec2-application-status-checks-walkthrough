import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeVintage from "starlight-theme-vintage";
import { starlightBasePath } from "starlight-base-path";

export default defineConfig({
  site: "https://jajera.github.io",
  base: "/ec2-application-status-checks-walkthrough/",
  integrations: [
    starlight({
      title: "EC2 Application Status Checks",
      favicon: "/favicon.svg",
      description:
        "CLI walkthrough for Amazon EC2 application status checks — in-VPC HTTP probes, Auto Scaling replacement, pricing, and quotas.",
      plugins: [starlightThemeVintage(), starlightBasePath()],
      routeMiddleware: "./src/routeData.ts",
      customCss: ["./src/styles/splash-overrides.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jajera/ec2-application-status-checks-walkthrough",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/jajera/ec2-application-status-checks-walkthrough/edit/main/",
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Concepts",
          items: [
            {
              label: "What are application status checks?",
              slug: "concepts/what-are-application-status-checks",
            },
          ],
        },
        {
          label: "Architecture",
          items: [
            {
              label: "Probe path",
              slug: "architecture/probe-path",
            },
          ],
        },
        {
          label: "Deploy and Operate",
          items: [
            { slug: "deploy-and-operate/prerequisites" },
            { slug: "deploy-and-operate/vpc-and-ec2" },
            { slug: "deploy-and-operate/create-check" },
            { slug: "deploy-and-operate/associate" },
            { slug: "deploy-and-operate/verify" },
            { slug: "deploy-and-operate/auto-scaling" },
            { slug: "deploy-and-operate/maintenance" },
            { slug: "deploy-and-operate/teardown" },
          ],
        },
        {
          label: "Reference",
          items: [
            { slug: "reference/pricing" },
            { slug: "reference/quotas" },
            { slug: "reference/comparison" },
            { slug: "reference/troubleshooting" },
            { slug: "reference/external-links" },
          ],
        },
      ],
    }),
  ],
});
