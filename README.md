# Portfolio Deployment Instructions

This portfolio is built with pure HTML/CSS/JS, making it perfect for **GitHub Pages**.

## Option A: Host as a Standalone Repository (Recommended)
This creates a clean `yourusername.github.io` website.

1.  Create a new repository on GitHub named `username.github.io` (replace `username` with your actual GitHub username).
2.  Open your terminal and navigate to this portfolio folder:
    ```bash
    cd /Users/ymlin/Downloads/003-Study/138-Projects/portfolio
    ```
3.  Initialize git and push:
    ```bash
    git init
    git add .
    git commit -m "Initial commit of portfolio"
    git branch -M main
    git remote add origin https://github.com/username/username.github.io.git
    git push -u origin main
    ```
4.  Your site will be live at `https://username.github.io` automatically!

## Option B: Host as a Project Page
If you want to keep this inside your existing projects repository.

1.  Push this `portfolio` folder to your existing repository.
2.  Go to your Repository **Settings** > **Pages**.
3.  Under **Build and deployment**, select **Source** as `Deploy from a branch`.
4.  Select the branch (e.g., `main`) and the folder `/portfolio` (if GitHub allows specific folders, otherwise you might need to move `index.html` to the root or `docs/` folder).
    *   *Tip*: The easiest way for a monorepo is to set the source folder to `/docs` in GitHub settings, and rename this `portfolio` folder to `docs`.

## Customization
- **Projects**: Edit `script.js` to add or remove projects.
- **Images**: Add an `images/` folder and update the `src` attributes in `script.js` if you want to add thumbnails (currently text-only for simplicity).
- **Colors**: Change the variables in the `:root` section of `styles.css`.
