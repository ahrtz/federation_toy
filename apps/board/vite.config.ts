import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "board",
      filename: "remoteEntry.js",
      exposes: {
        "./BoardCard": "./src/components/BoardCard.tsx",
        "./BoardListPage": "./src/pages/BoardListPage.tsx",
      },
      shared: ["react", "react-dom", "@mui/material"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 7002,
  },
  preview: {
    port: 7002,
  },
});
