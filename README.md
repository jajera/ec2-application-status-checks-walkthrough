# EC2 Application Status Checks Walkthrough

[![Deploy to GitHub Pages](https://github.com/jajera/ec2-application-status-checks-walkthrough/actions/workflows/deploy.yml/badge.svg)](https://github.com/jajera/ec2-application-status-checks-walkthrough/actions/workflows/deploy.yml)

Astro Starlight site (same layout as the S3 Annotations walkthrough) for Amazon
EC2 application status checks: CLI lab, in-VPC HTTP probes, Auto Scaling
replacement, pricing, and quotas.

## Deployed site

**https://jajera.github.io/ec2-application-status-checks-walkthrough/**

## Local development

```bash
nvm use
npm install
npm run dev
```

## npm scripts

| Script     | Description                  |
| ---------- | ---------------------------- |
| `dev`      | Local development server     |
| `build`    | Production build to `dist/`  |
| `preview`  | Preview production build     |
| `validate` | Prettier and markdownlint    |
| `format`   | Format all files             |
| `lint`     | Lint MDX                     |
| `test`     | Property-based content tests |
