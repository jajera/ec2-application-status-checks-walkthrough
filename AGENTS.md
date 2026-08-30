# Agent notes

## Repos

| Repo                                               | Role                          |
| -------------------------------------------------- | ----------------------------- |
| `jajera/ec2-application-status-checks-walkthrough` | This docs site (GitHub Pages) |

Do not invent AWS account IDs, instance IDs, or custom domains for the lab. Use placeholder values and default AWS endpoints only.

## Docs source of truth

Walkthrough steps live in `src/content/docs/**/*.mdx`. Keep sidebar slugs in `astro.config.mjs` aligned with those files.

## Site URL

Production docs: `https://ec2-application-status-checks-walkthrough.johna.kiwi` (Pages + Route 53 CNAME via johna-kiwi-infra `sites.yaml`).
