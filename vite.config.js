import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // for local dev if needed
    port: 5173,
  },
  preview: {
    host: "0.0.0.0", // required for Render
    port: process.env.PORT || 10000, // use Render's assigned port
  },
});