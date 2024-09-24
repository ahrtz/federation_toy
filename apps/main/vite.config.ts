import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main",
      remotes: {
        app1: "http://localhost:7001/assets/remoteEntry.js",
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
    port: 7000,
  },
  preview: {
    port: 7000,
  },
});
