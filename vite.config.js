import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['bootstrap']
  },
  build: {
    commonjsOptions: {
      include: [/bootstrap/, /node_modules/]
    },
    rollupOptions: {
      // Remove 'sweetalert' from external
      external: []
    }
  }
});
