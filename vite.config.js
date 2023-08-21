import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths],
  server: {
    port: 5000,
  },
  resolve: {
    alias: {
      "@components": ["/src/components"],
      "@": ["/src"],
    },
  },
});
