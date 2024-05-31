/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Inter", "Sans Serif"],
                title: ["Inter", "Sans Serif"]
            },
            fontSize: {
                body: [
                    "1rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                h1: [
                    "3.5rem",
                    {
                        lineHeight: "3.75rem"
                    }
                ],
                h2: [
                    "2.25rem",
                    {
                        lineHeight: "2.625rem"
                    }
                ],
                h3: [
                    "1.875rem",
                    {
                        lineHeight: "2.25rem"
                    }
                ],
                h4: [
                    "1.5rem",
                    {
                        lineHeight: "2rem"
                    }
                ],
                h5: [
                    "1.25rem",
                    {
                        lineHeight: "1.75rem"
                    }
                ],
                h6: [
                    "1.125rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ],
                mini: [
                    "0.75rem",
                    {
                        lineHeight: "1.5rem"
                    }
                ]
            },
            colors: {
                black: {
                    DEFAULT: "#000000",
                    50: "#E6E6E6",
                    100: "#CCCCCC",
                    200: "#999999",
                    300: "#666666",
                    400: "#333333",
                    500: "#000000",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000"
                },
                white: {
                    DEFAULT: "#FFFFFF",
                    50: "#FFFFFF",
                    100: "#FCFCFC",
                    200: "#FCFCFC",
                    300: "#FAFAFA",
                    400: "#FAFAFA",
                    500: "#F7F7F7",
                    600: "#C7C7C7",
                    700: "#949494",
                    800: "#636363",
                    900: "#303030"
                },
                primary: {
                    50: "#fcf3fb",
                    100: "#f9eaf7",
                    200: "#f6d4f1",
                    300: "#efb2e5",
                    400: "#e482d1",
                    500: "#d756bb",
                    600: "#c53da0",
                    700: "#aa2c84",
                    800: "#8d276d",
                    900: "#76255d",
                    950: "#471036"
                },
                secondary: {
                    50: "#fcf3fb",
                    100: "#f9eaf7",
                    200: "#f6d4f1",
                    300: "#efb2e5",
                    400: "#e482d1",
                    500: "#d756bb",
                    600: "#c53da0",
                    700: "#aa2c84",
                    800: "#8d276d",
                    900: "#76255d",
                    950: "#471036"
                },
                badge: "#F1F5F9",
                badgeText: "#475569"
            }
        }
    },
    plugins: [require("@tailwindcss/typography")]
};
