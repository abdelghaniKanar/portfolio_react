/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const darkMode = "class";
export const theme = {
  extend: {
    fontFamily: {
      minecraft: ["Minecraft", "monospace"],
      nunito: ["Nunito", "sans-serif"],
    },
    colors: {
      portfolio: {
        light: "#D3C2A8",
        dark: "#000000",
      },
    },
  },
};
export const plugins = [];
