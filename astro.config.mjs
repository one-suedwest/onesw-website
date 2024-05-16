import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import robotsTxt from 'astro-robots-txt';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.onesw.de/',
  integrations: [compress(), sitemap(), robotsTxt({
    policy: [
      {
        allow: '/',
        userAgent: '*'
      },
      {
        disallow: '/impressum',
        userAgent: '*'
      },
      {
        disallow: '/datenschutz',
        userAgent: '*'
      },
      {
        disallow: '/pdf/',
        userAgent: '*'
      },
      {
        disallow: '/behold',
        userAgent: '*'
      },
      {
        disallow: '/glory',
        userAgent: '*'
      },
      {
        disallow: '/404',
        userAgent: '*'
      }
    ]
  })]
});
