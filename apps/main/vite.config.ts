import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//@ts-ignore
import { federation } from '@module-federation/vite'; 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main",
      filename: "remoteEntry.js",
      remotes: {
        app1:{type:"module",name:"app1", entry: "http://localhost:7001/remoteEntry.js",entryGlobalName:"app1",shareScope:"default"},
        board:{type:"module",name:"board", entry: "http://localhost:7002/remoteEntry.js",entryGlobalName:"board",shareScope:"default"},
      },
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
    port: 7000,
  },
  preview: {
    port: 7000,
  },
});
