import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/drg-helper/', // Zmeňte na názov vášho GitHub repozitára
})