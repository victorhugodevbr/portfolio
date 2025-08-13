import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  preflight: true,
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  exclude: [],
  jsxFramework: 'react',
  outdir: "styled-system",
  theme: {
    extend: {
      tokens: {
        colors: {
          white: {
            value: "#FFFFFF",
          },
          black: {
            value: "#000000",
          },
          primary: {
            value: "#B7047E",
          },
          secondary: {
            value: "#2000E6",
          },
          tertiary: {
            value: "#242938",
          },
          primaryRubBank: {
            value: "#6B7AE5",
          },
          secondaryRubBank: {
            value: "#1D1C3E",
          },
          primaryMaranata: {
            value: "#FFAA00",
          },
          secondaryMaranata: {
            value: "#191919",
          },
          primaryBrasilCard: {
            value: "#004B89",
          },
        },
      },
    },
  },
});