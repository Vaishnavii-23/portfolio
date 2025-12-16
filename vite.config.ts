import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  // IMPORTANT for GitHub Pages deployment
  base: mode === "production" ? "/portfolio/" : "/",

  plugins: [react()],

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    open: true,
  },

  preview: {
    port: 4173,
  },
}));
