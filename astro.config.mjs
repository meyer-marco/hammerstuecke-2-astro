import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

//TODO: Set site to the actual domain !!!
//https://astro.build/config
//const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    output: "static",
    site: "https://meyer-marco.github.io/hammerstuecke-2-astro/",
    base: "/hammerstuecke-2-astro/",
    build: {
        format: "file"
    },
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"]
        },
        ssr: {
            external: ["svgo"]
        }
    },
    integrations: [mdx(), sitemap(), tailwind(), prefetch(), react()]
});
