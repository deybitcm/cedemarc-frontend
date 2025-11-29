import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Usa variable de entorno para base path
// En desarrollo: VITE_BASE_PATH='/'
// En producción (GitHub Pages): VITE_BASE_PATH='/cedemarc-frontend/'
// const base =
//   typeof import.meta !== 'undefined' &&
//   import.meta.env &&
//   import.meta.env.VITE_BASE_PATH
//     ? import.meta.env.VITE_BASE_PATH
//     : '/cedemarc-frontend/'

export default defineConfig({
  base: 'http://cedemarc.com/', // Ajusta esto según tu entorno
  plugins: [react()],
  css: {
    postcss: './postcss.config.cjs',
  },
})
