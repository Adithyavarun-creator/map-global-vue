import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  // server: {
  //   proxy: {
  //     "/AddressPropertyType": {
  //       target: "http://localhost:5000/api",
  //       changeOrigin: true,
  //       secure: false,
  //       // rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  server: {
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
