import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // GitLab's unique-domain Pages site is served at the domain root.
  // Keep the project-path base for other deployments (such as GitHub Pages).
  base: process.env.GITLAB_CI ? "/" : "/RedFolderGames/",
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://phpbackend.samlam24.treok.io",
        changeOrigin: true,
        secure: true
      }
    }
  },
})
