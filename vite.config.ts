import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Rest-Country-API-App/",
  plugins: [vue(), Components()],
});
