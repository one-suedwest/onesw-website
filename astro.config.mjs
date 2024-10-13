import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://onesw.de/',
  integrations: [compress(), sitemap(), robotsTxt({
    policy: [{
      allow: '/',
      userAgent: '*'
    }, {
      disallow: '/impressum',
      userAgent: '*'
    }, {
      disallow: '/datenschutz',
      userAgent: '*'
    }, {
      disallow: '/pdf/',
      userAgent: '*'
    }, {
      disallow: '/behold',
      userAgent: '*'
    }, {
      disallow: '/glory',
      userAgent: '*'
    }, {
      disallow: '/404',
      userAgent: '*'
    }]
  }), tailwind({
    applyBaseStyles: false,
  }), react()]
});
