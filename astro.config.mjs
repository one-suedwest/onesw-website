import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://clever-pothos-e6b088.netlify.app/',
  experimental: {
    integrations: true
  },
  integrations: [compress(), sitemap(), robotsTxt({
    policy: [{
      disallow: '/',
      userAgent: '*'
    }]
  })]
});
