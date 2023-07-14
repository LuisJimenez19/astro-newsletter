import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import { BASE_URL } from "./config";

// https://astro.build/config
export default defineConfig({
  base: BASE_URL,
  site: 'https://luisjimenez19.github.io',
  integrations: [tailwind()],
});
