## Getting Started
Run npm instal to install node_modules
```bash
npm install
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Azure Static Web App

Login Azure CLI

```bash
az login
```

Create a resource group if needed
- [az group](https://learn.microsoft.com/en-us/cli/azure/group?view=azure-cli-latest#az-group-create) - additional info
```bash
az group create -l westus -n MyResourceGroup
```

Create a static web app under a resource group and add Github workflow to deploy automatically.
- [az staticwebapp](https://learn.microsoft.com/en-us/cli/azure/staticwebapp?view=azure-cli-latest) - additional info
```bash
az staticwebapp create -n StarterNextJSTailwindCSS -g StarterNextJS -s https://github.com/<YOUR_GITHUB_USERNAME>/starter-nextjs-tailwindcss -l WestUs2 -b main --login-with-github
```

Pull latest changes
```bash
git pull
```

Check deployment status at 
```bash 
https://github.com/<YOUR_GITHUB_USERNAME>/starter-nextjs-tailwindcss/actions
```

## Delete static web app and remove commit

Delete static web app created in Azure
```bash
az staticwebapp delete -n StarterNextJSTailwindCSS -g StarterNextJS
```

Delete a resource group
```bash
az group delete -n MyResourceGroup
```

Remove last commit and push removal to origin
```bash
git reset --hard HEAD^
git push origin -f
```

## Other useful commands
``` bash
sed -i "s/starter-nextjs-tailwindcss/<your project name>/" package.json package-lock.json README.md
chmod u+x setup.sh
```

# Additional Resources
- [Deploy hybrid Next.js websites on Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-nextjs-hybrid)

- [Learn to use Bash with the Azure CLI](https://learn.microsoft.com/en-us/cli/azure/azure-cli-learn-bash)