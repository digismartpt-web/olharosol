import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://olharosol.newappai.com',
    output: 'static',
    trailingSlash: 'ignore',
    integrations: [tailwind()],
});
