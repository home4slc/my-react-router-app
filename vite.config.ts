import { reactRouter } from "@react-router/dev/vite";
import react from '@vitejs/plugin-react';
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [reactRouter(), react()],
  resolve: {
    tsconfigPaths: true,
  },
    build: {
    rollupOptions: {
      // Add the package here to fix the error
      external: [
        /node_modules\/@carbon\/react/
      ]
    }
  }
});
