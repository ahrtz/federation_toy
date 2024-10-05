import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app1",
      filename: "remoteEntry.js",
      exposes: {
        "./SignUpDialog": "./src/components/SignupDialog",
        "./SignUpPage": "./src/pages/SignUpPage.tsx",
        "./Counter1": "./src/components/Counter1.tsx",
        "./counterStore": "./src/store/counterStore.ts",
      },
      remotes: {
        board: "http://localhost:7002/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "@mui/material", "zustand"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 7001,
  },
  preview: {
    port: 7001,
  },
});
