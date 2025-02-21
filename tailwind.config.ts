import type { Config } from "tailwindcss";

export default {
  darkMode: "class", // Використовуємо клас для перемикання теми
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // theme varibales
        primary: "var(--primary-color)",
        optionBg: "var(--primary-background)",
        optionColor: "var(--option-color)",
        optionSelected: "var(--ghost-white)",
        btn: "var(--btn-color)",
        btnBg: "var(--btn-bg)",
      },
      boxShadow: {
        option: "var(--primary-shadow)",
        btn: "var(--primary-shadow)",
      },
      backgroundImage: {
        primaryGradient: "var(--primary-gradient)",
      },
    },
  },
} satisfies Config;
