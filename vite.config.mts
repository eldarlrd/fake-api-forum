import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config
export default defineConfig({
  base: '/fake-api-forum/',
  resolve: { alias: { '@': '/src' } },
  plugins: [react()]
});