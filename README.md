# Next.js pull request previews on App Platform

This is the companion starter for a minimal Next.js app with one disposable App Platform preview for each same-repository pull request. It includes an App Platform app spec, a harmless `/health` endpoint, and a cleanup workflow.

## Read the guide

[Deploy a Next.js App with Pull Request Previews](https://www.tylor.nz/content/deploy-nextjs-app-with-pull-request-previews?utm_source=github&utm_medium=referral&utm_campaign=digitalocean-guides&utm_content=companion-readme)

## Disclosure

This README includes a DigitalOcean affiliate link. If you use it, I may earn a commission at no additional cost to you.

[Deploy the starter on DigitalOcean App Platform](https://www.tylor.nz/go/digitalocean?utm_source=github&utm_medium=affiliate&utm_campaign=digitalocean-guides&utm_content=deploy-nextjs-app-with-pull-request-previews&product=app-platform&placement=companion-readme&variant=readme-primary&locale=en)

## Before you start

You need a GitHub repository, a DigitalOcean account that can create App Platform apps, and Node.js 18.18 or newer. This starter deliberately has no database, login, payment integration, or production secrets.

The preview workflow requires one GitHub Actions secret named `DIGITALOCEAN_APP_PLATFORM_TOKEN`. Create a narrowly scoped DigitalOcean personal access token for App Platform and never add production database, API, or payment credentials as preview secrets.

## First run

1. Click **Use this template** or fork this starter into your own GitHub account. Change `YOUR_GITHUB_OWNER` in `.do/app.yaml` to your GitHub owner and commit it.
2. Run `npm ci`, `npm test`, and `npm run build` locally. Visit `http://localhost:3000/health` after `npm run dev`; it should return `{ "ok": true }`.
3. In DigitalOcean, create an App Platform app from your `main` branch using the `.do/app.yaml` spec. Confirm the detected build command, run command, service size, and health route before the final create action.
4. In GitHub, add `DIGITALOCEAN_APP_PLATFORM_TOKEN` under **Settings → Secrets and variables → Actions**.
5. Create a branch, change the page text, push it, and open a pull request from the same repository. The workflow comments with the preview URL.

## What the workflows do

- `deploy-preview.yml` runs only for same-repository pull requests. It avoids exposing the DigitalOcean token to forked pull-request code.
- `delete-preview.yml` removes the corresponding preview app after the pull request closes or merges.
- `.do/app.yaml` is the base App Platform app spec. Preview mode derives a unique app from it and excludes conflicting configuration such as domains and alerts.

## Verify before expanding

Open the preview URL from the pull request and request `/health`. Confirm that it renders the branch change and returns a successful JSON response. Then close the pull request and confirm the cleanup workflow succeeds.

Keep previews disposable. Do not connect them to production data, send real email, charge cards, or treat a preview URL as a production approval or rollback system.

## License

[MIT](LICENSE)
