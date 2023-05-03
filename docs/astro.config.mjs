import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://do-kevin.github.io',
  base: '/pc-vn',
  integrations: [
    mdx({
      shikiConfig: {
        theme: 'one-dark-pro',
        wrap: true,
      },
    }),
    tailwind(),
  ],
});
