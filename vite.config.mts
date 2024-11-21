import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config
export default defineConfig({
  base: '/fake-api-forum/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '#': '/src/assets',
      '!': '/__mocks__'
    }
  },
  // https://vitest.dev/config
  test: {
    globals: true,
    restoreMocks: true,
    environment: 'happy-dom',
    include: ['__tests__/**/*.{test,spec}.{ts,tsx}'],
    coverage: { all: true, include: ['src/{hooks}/*.{ts,tsx}'] }
  }
});