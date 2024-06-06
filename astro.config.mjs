import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
//TODO: Set site to the actual domain !!!
export default defineConfig({
    site: "https://meyer-marco.github.io/",
    vite: {
        optimizeDeps: {
            exclude: ["@resvg/resvg-js"]
        },
        ssr: {
            external: ["svgo"]
        }
    },
    integrations: [
        mdx(),
        sitemap(),
        tailwind(),
        /*         image({
            serviceEntryPoint: "@astrojs/image/sharp"
        }), */
        prefetch(),
        react()
    ]
});
