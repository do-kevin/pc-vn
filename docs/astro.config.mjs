import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import tailwind from '@astrojs/tailwind';

const isDev = process.env.NODE_ENV === 'development';

// https://astro.build/config
export default defineConfig({
  site: 'https://do-kevin.github.io',
  base: isDev ? '/' : '/pc-vn', // append /pc-vn for GitHub pages deployment
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
