/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-2': 'var(--primary-2)',
        'primary-3': 'var(--primary-3)',
        'primary-4': 'var(--primary-4)',
        secondary: 'var(--secondary)',
        'secondary-2': 'var(--secondary-2)',
        'secondary-3': 'var(--secondary-3)',
        'secondary-4': 'var(--secondary-4)',
      },
      fontFamily: {
        vietnam: "'Be Vietnam Pro', sans-serif",
        'ibm-plex':
          "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
      },
    },
  },
  plugins: [],
};
