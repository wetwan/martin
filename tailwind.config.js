/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#60a5fa",
        "primary-200": "#1d4ed8",
        "primary-300": "#1e3a8a",
        "secondary-100": "#b46a3ce6",
        "secondary-200": "#ff8000",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "slide-1": "url('./assets/image16.jpg')",
        "slide-2": "url('./assets/image17.jpg')",
        "slide-3": "url('./assets/image18.jpg')",
      }),
    },
  },
  plugins: [],
};
