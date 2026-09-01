// @ts-check
import { defineConfig } from 'astro/config';

// Static site served at the apex custom domain (darren-zhu.com), so no `base`.
export default defineConfig({
  site: 'https://darren-zhu.com',
});
