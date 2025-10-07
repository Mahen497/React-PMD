import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// 👇 Add base for GitHub Pages (important!)
export default defineConfig({
  base: '/pmd/',
  plugins: [react(), tailwindcss()],
});
