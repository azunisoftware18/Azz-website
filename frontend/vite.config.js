import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: '0.0.0.0',
    allowedHosts: [
      'jue6j7tmf90h6t8ehdrk6isw.147.93.20.127.sslip.io',
      'azzunique.co.in',
      'azzunique.com'
    ]
  }
})
