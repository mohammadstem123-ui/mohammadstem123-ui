import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages: اضبط المسار الأساسي تلقائياً عبر متغير بيئة أثناء الـ build
  // - User/Org Pages: VITE_BASE=/
  // - Project Pages:  VITE_BASE=/<repo>/
  base: process.env.VITE_BASE || '/',
  plugins: [react()],
})

