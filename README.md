# Product Management Dashboard

## Overview
A React-based dashboard for managing products. Features include add, edit, delete, search, and filter.

## Features
- Add new products
- Edit existing products
- Delete products
- Search by title
- Filter by category
- Responsive design with Tailwind CSS

## Folder Structure
```
react/pmd/
├── index.html
├── package.json
├── src/
│   ├── App.jsx
│   ├── components/
│   │   ├── ProductForm.jsx
│   │   ├── ProductList.jsx
│   │   └── SearchFilter.jsx
│   └── index.css
```

## Components

### App.jsx
Main app logic, state management, and layout.

### ProductForm.jsx
Form for adding/updating products.

### ProductList.jsx
Displays products in a grid, with edit/delete buttons.

### SearchFilter.jsx
Inputs for searching and filtering products.

## Usage

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```

## Future Updation

| Status | Feature/Improvement |
|--------|--------------------|
| ✅     | Basic CRUD (Add/Edit/Delete) |
| ✅     | Search & Filter |
| ⏳     | Backend Integration |
| ⏳     | Authentication |
| ✅     | Pagination |
| ⏳     | Sorting Options |
| ⏳     | Export Data (CSV/PDF) |
| ⏳     | Dashboard Analytics |
| ⏳     | Unit/Integration Tests |
| ⏳     | Improved Mobile UX |
| ⏳     | API Documentation |
| ⏳     | CI/CD Setup |

- ✅ Complete
- ⏳ Remaining/Working

---

## Update Log

### Date: October 4, 2025

**Pagination Component Improvements:**
- Added accessibility with `aria-label` attributes for navigation and page buttons.
- Implemented logic to show only a subset of page numbers when `totalPages` is large, with ellipsis and first/last page navigation.

### Date: October 6, 2025

- Improved the product form by adding an "Image URL" field for both add and update operations.
- Fixed pagination logic so that new products do not appear repeatedly when navigating pages.
- Moved pagination state and logic from `ProductList.jsx` to `App.jsx` for better control and synchronization with search/filter.
- Ensured pagination resets to the first page when search or filter changes.
- Enhanced grid and card responsiveness, including width and minimum width fixes.
- Added a toggle feature for the search/filter panel, with smooth show/hide animation, and moved its control to `App.jsx`.
- Provided code and guidance for managing search panel visibility from the parent component.
- Helped synchronize search/filter and pagination for a better user experience.

--------------------------------------------------------------------

Perfect 👍 Let’s go step-by-step like you’re deploying your React (Vite + Tailwind) app to **GitHub Pages** for the *first time ever*.
We’ll start from scratch — no setup assumed.

---

## 🪜 FULL DEPLOYMENT PROCESS — From Zero to Live Site

---

### 🧩 **Step 1: Create Your Vite React App**

If you don’t already have a project:

```bash
npm create vite@latest React-PMD -- --template react
```

Then:

```bash
cd React-PMD
npm install
```

---

### 🎨 **Step 2: Add Tailwind CSS (optional but common)**

Run:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Now open **`tailwind.config.js`** and replace content with:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Then open **`src/index.css`** (or main CSS file) and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

✅ Run `npm run dev` to confirm Tailwind works.

---

### ⚙️ **Step 3: Add GitHub Pages dependency**

```bash
npm install gh-pages --save-dev
```

---

### 🏗️ **Step 4: Update `package.json`**

Add the following:

```json
{
  "homepage": "https://<your-username>.github.io/<repo-name>",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

🧠 Example (for you):

```json
"homepage": "https://mahen497.github.io/React-PMD"
```

---

### 🧱 **Step 5: Update `vite.config.js`**

Open your project’s **vite.config.js**
and set the correct base path 👇

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/React-PMD/', // must match your repo name
})
```

---

### 🪣 **Step 6: Initialize Git Repository**

If not already done:

```bash
git init
git add .
git commit -m "Initial commit"
```

---

### ☁️ **Step 7: Create a GitHub Repository**

1. Go to GitHub → New Repository
2. Name it: `React-PMD`
3. Don’t add README (since project already has it)
4. Copy the commands shown after creation and run them in your terminal:

```bash
git remote add origin https://github.com/<your-username>/React-PMD.git
git branch -M main
git push -u origin main
```

---

### 🚀 **Step 8: Deploy to GitHub Pages**

Now, simply run:

```bash
npm run deploy
```

✅ This:

* Builds the app (`npm run build`)
* Publishes `/dist` to the `gh-pages` branch
* GitHub automatically hosts it

---

### 🌐 **Step 9: Verify & Open**

Visit:

```
https://<your-username>.github.io/<repo-name>/
```

Example for you:
👉 [https://mahen497.github.io/React-PMD/](https://mahen497.github.io/React-PMD/)

---

### ⚙️ **Step 10: (Optional) Fix GitHub Pages Settings**

In case it doesn’t appear:

1. Go to **Repo → Settings → Pages**
2. Under **Source**, select:

   ```
   Deploy from branch
   Branch: gh-pages  / (root)
   ```
3. Wait 1–2 minutes and refresh the link.

---

### ✅ Final Directory Check

Your project should now look like this:

```
React-PMD/
 ┣ src/
 ┣ public/
 ┣ dist/          ← auto-generated after build
 ┣ package.json
 ┣ vite.config.js
 ┣ tailwind.config.js
 ┗ index.html
```
## License
MIT
