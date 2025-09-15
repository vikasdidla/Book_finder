import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT || 3000,
    host: "0.0.0.0",
    allowedHosts: [
      "book-finder-app-me0r.onrender.com"  
    ]
  },
})