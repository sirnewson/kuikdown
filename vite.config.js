import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base is set for GitHub Pages project sites (https://<user>.github.io/kuikdown/).
// Override with BASE_PATH=/ when deploying to a custom domain or root.
export default defineConfig({
  base: process.env.BASE_PATH ?? '/kuikdown/',
  plugins: [react(), tailwindcss()],
})
