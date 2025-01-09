import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Cambiamos de "/Web-Page-Construction/" a "/" porque ahora usaremos dominio personalizado
});