// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https://hammerstuecke.de/", // Always put "/" at the end of the URL
    author: "Hammerstücke",
    desc: "Hammerstücke: Hier finden Sie einzigartige, handgefertigte Schmuckstücke. Meine Kollektion beinhaltet Ringe, Ketten und mehr.",
    title: "Hammerstücke",
    ogImage: "images/astro-nutritrack.png",
    keywords: "Schmuck, handgefertigt, Ringe, Eheringe, Ketten, Armbänder",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Facebook",
        href: "https://hammerstuecke.de//",
        icon: "ph:facebook-logo-duotone",
        title: `Follow ${SITE.title} on Facebook`,
        active: false
    },
    {
        name: "Instagram",
        href: "https://hammerstuecke.de/",
        icon: "ph:instagram-logo-duotone",
        title: `Follow ${SITE.author} on Instagram`,
        active: true
    },
    {
        name: "LinkedIn",
        href: "https://hammerstuecke.de/",
        icon: "ph:linkedin-logo-duotone",
        title: `Follow ${SITE.title} on LinkedIn`,
        active: true
    },
    {
        name: "Mail",
        href: "mailto:yourmail@gmail.com",
        title: `Send an email to ${SITE.title}`,
        icon: "",
        active: false
    },
    {
        name: "Twitter",
        href: "https://hammerstuecke.de/",
        icon: "ph:twitter-logo-duotone",
        title: `Follow ${SITE.author} on Twitter`,
        active: true
    },
    {
        name: "YouTube",
        href: "https://hammerstuecke.de/",
        icon: "",
        title: `${SITE.title} on YouTube`,
        active: false
    },
    {
        name: "WhatsApp",
        href: "https://hammerstuecke.de/",
        icon: "",
        title: `${SITE.title} on WhatsApp`,
        active: false
    }
];
