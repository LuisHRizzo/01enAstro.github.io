import { SITE } from './src/config.mjs'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://01enAstro.github.io',
  base: SITE.basePathname,
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory'
  },
  integrations: [tailwind(), compress()]
})
