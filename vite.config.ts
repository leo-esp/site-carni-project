import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
    },
  },
  base: ".",
  plugins: [react(), progress(), tsconfigPaths()],
});
