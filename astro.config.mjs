import { defineConfig } from 'astro/config';
import compress from "astro-compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [compress(), sitemap()]
});