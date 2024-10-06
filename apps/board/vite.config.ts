import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import federation from "@originjs/vite-plugin-federation";
import { federation } from '@module-federation/vite'; 
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
        "./Counter2": "./src/components/Counter2.tsx",
        "./useCounterStore2": "./src/store/CounterStore.ts",
      },
      remotes: {
        app1:{type:"module",name:"app1", entry: "http://localhost:7001/remoteEntry.js",entryGlobalName:"app1",shareScope:"default"},
      },
      shared:  {react: { singleton: true },
      "react-dom": { singleton: true },
      "react-router-dom": { singleton: true },
      "@mui/material": { singleton: true },
      zustand: { singleton: true },}
    }),
  ],
  optimizeDeps: {
    exclude: ["@module-federation/sdk"],
  },
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
