import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";
import { federation } from '@module-federation/vite'; 
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
        "./useCounterStore1": "./src/store/counterStore.ts",
      },
      remotes: {
        board:{type:"module",name:"board", entry: "http://localhost:7002/remoteEntry.js",entryGlobalName:"board",shareScope:"default"},
      },
      shared:  {react: { singleton: true, },
      "react-dom": { singleton: true },
      "react-router-dom": { singleton: true },
      "@mui/material": { singleton: true },
      zustand: { singleton: true },}
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  optimizeDeps: {
    exclude: ["@module-federation/sdk"],
  },
  server: {
    port: 7001,
  },
  preview: {
    port: 7001,
  },
});
