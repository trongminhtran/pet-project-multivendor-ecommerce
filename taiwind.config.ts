import { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,jsx,ts,tsx,mdx}',
        './src/components/**/*.{js,jsx,ts,tsx,mdx}',
        './src/app/**/*.{js,jsx,ts,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            barlow: "var(--font-barlow)",
        },
    },
    plugins: [],
};

export default config;