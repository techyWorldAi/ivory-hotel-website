import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: this must match your repo name exactly, with leading and
// trailing slashes, e.g. '/ivory-hotel-website/'. GitHub Pages serves
// project sites from https://<org>.github.io/<repo-name>/ rather than
// the domain root, so every asset path needs this prefix to resolve.
export default defineConfig({
  base: '/ivory-hotel-website/',
  plugins: [react()],
})