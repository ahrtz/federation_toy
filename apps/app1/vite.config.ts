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
    port: 7001,
  },
  preview: {
    port: 7001,
  },
});
