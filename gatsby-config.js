module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-styled-components-dark-mode`,
      options: {
        light: {
          fonts: {
            main: "Fira Sans, sans-serif",
            secondary: "Inter, sans-serif",
          },
          colors: {
            blue: "#00A8CC",
            teal: "#FF7C7C",
          },
          global: {
            color: "#21243d",
            bg: "#fff",
          },

          breakpoints: {
            mobile: "only screen and (min-width: 320px)",
            tablet: "only screen and (min-width: 768px)",
            desktop: "only screen and (min-width: 1024px)",
          },
        },
        dark: {
          fonts: {
            main: "Fira Sans, sans-serif",
            secondary: "Inter, sans-serif",
          },
          colors: {
            blue: "#00A8CC",
            teal: "#FF7C7C",
          },
          global: {
            color: "#fff",
            bg: "#21234d",
          },
          breakpoints: {
            mobile: "only screen and (min-width: 320px)",
            tablet: "only screen and (min-width: 768px)",
            desktop: "only screen and (min-width: 1024px)",
          },
        },
      },
    },
  ],
}
