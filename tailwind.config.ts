// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    theme: {
        extend: {
            keyframes: {
                splash: {
                    '0%, 100%': { transform: 'scale(1) rotate(-5deg)' },
                    '50%': { transform: 'scale(1.15) rotate(-5deg)' },
                },
            },
            animation: {
                splash: 'splash 1.5s ease-in-out infinite',
            },
        },
    },
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
    ],
};

export default config;