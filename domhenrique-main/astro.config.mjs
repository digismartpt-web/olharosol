import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://domhenrique.newappai.com', // Définir l'URL du site pour le déploiement
    integrations: [tailwind()],
});
