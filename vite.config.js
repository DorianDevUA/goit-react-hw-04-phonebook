import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: 'goit-react-hw-04-phonebook',
  build: {
    sourcemap: true,
  },
});
