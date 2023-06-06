import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Bomb Defusal Manual 💣',
      social: {
        github: 'https://github.com/Telmooo/bomb-defusal-manual',
      },
      sidebar: [
        {
          label: 'Modules',
          items: [
            { label: 'All Modules', link: '/modules/all_modules' },
          ],
        },
        {
          label: 'Extras',
          items: [
            { label: 'Ports', link: '/extras/ports' },
          ],
        },
      ],
    }),
  ],
});
