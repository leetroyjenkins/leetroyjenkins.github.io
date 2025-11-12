# Troy Ascher - Portfolio WebsiteThis is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).



A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS, deployed to GitHub Pages.## Getting Started



## 🚀 Live SiteFirst, run the development server:



Visit the live site at: [https://www.troyascher.com](https://www.troyascher.com)```bash

npm run dev

## 🛠️ Built With# or

yarn dev

- **Next.js 16** - React framework for production# or

- **TypeScript** - Type-safe JavaScriptpnpm dev

- **Tailwind CSS** - Utility-first CSS framework# or

- **GitHub Actions** - Automated deployment pipelinebun dev

- **GitHub Pages** - Free hosting```



## 📁 Project StructureOpen [http://localhost:3000](http://localhost:3000) with your browser to see the result.



```You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

├── .github/

│   └── workflows/This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

│       └── deploy.yml          # Automated deployment workflow

├── public/## Learn More

│   ├── CNAME                   # Custom domain configuration

│   └── .nojekyll              # GitHub Pages configurationTo learn more about Next.js, take a look at the following resources:

├── src/

│   ├── app/- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

│   │   ├── about/             # About page- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

│   │   ├── contact/           # Contact page

│   │   ├── projects/          # Projects pageYou can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

│   │   ├── layout.tsx         # Root layout with navigation

│   │   ├── page.tsx           # Home page## Deploy on Vercel

│   │   └── globals.css        # Global styles

│   └── components/The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

│       └── Navigation.tsx      # Navigation component

├── next.config.ts             # Next.js configurationCheck out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

├── tailwind.config.ts         # Tailwind CSS configuration
└── package.json               # Project dependencies
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 20 or higher
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/leetroyjenkins/leetroyjenkins.github.io.git
   cd leetroyjenkins.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (creates `out/` folder)
- `npm run start` - Start production server (not used for static export)
- `npm run lint` - Run ESLint to check code quality

## 🚢 Deployment

This site automatically deploys to GitHub Pages when you push to the `master` branch.

### Deployment Process

1. **Make changes** to your code locally
2. **Test locally** with `npm run dev`
3. **Commit and push**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin master
   ```
4. **Automatic deployment** - GitHub Actions will:
   - Build the project
   - Generate static files
   - Deploy to GitHub Pages
   - Usually completes in 1-2 minutes

### First-Time Setup (Already Configured)

If setting up a new repository, you would need to:

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Ensure the `.github/workflows/deploy.yml` workflow exists
4. Push to `master` branch to trigger first deployment

## 🎨 Customization

### Update Content

1. **Home Page**: Edit `src/app/page.tsx`
2. **About Page**: Edit `src/app/about/page.tsx`
3. **Projects**: Edit `src/app/projects/page.tsx`
4. **Contact**: Edit `src/app/contact/page.tsx`
5. **Navigation**: Edit `src/components/Navigation.tsx`

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Component-level: Use Tailwind utility classes

### Adding New Pages

1. Create a new folder in `src/app/` (e.g., `src/app/blog/`)
2. Add a `page.tsx` file in that folder
3. The route will be automatically available at `/blog`

## 🌐 Custom Domain

The site uses a custom domain (`www.troyascher.com`) configured via:

1. **CNAME file** in `public/` folder
2. **DNS settings** at domain registrar pointing to GitHub Pages

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Documentation](https://react.dev)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Troy Ascher**
- Website: [www.troyascher.com](https://www.troyascher.com)
- GitHub: [@leetroyjenkins](https://github.com/leetroyjenkins)

---

Built with ❤️ using Next.js and deployed with GitHub Pages
