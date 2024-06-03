import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// const withMT = require("@material-tailwind/react/utils/withMT");
 
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), 'daisyui'],
  css: {
    css: {
      postcss: './postcss.config.jsx'
    }
  },
})
