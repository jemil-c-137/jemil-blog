const colors = {
  dark: "#21243d",
  light: "#fff",
  blue: "#00A8CC",
  orange: "#ffb347",
}

const baseTheme = {
  fonts: {
    main: "Fira Sans, sans-serif",
    secondary: "Inter, sans-serif",
  },
  colors: {
    dark: "#21243d",
    light: "#fff",
    blue: "#00A8CC",
    orange: "#ffb347",
  },

  breakpoints: {
    mobile: "only screen and (min-width: 320px)",
    tablet: "only screen and (min-width: 768px)",
    desktop: "only screen and (min-width: 1024px)",
  },
}

export const darkTheme = {
  ...baseTheme,
  global: {
    color: colors.light,
    bg: colors.dark,
  },
}


export const lightTheme = {
  ...baseTheme,
  global: {
    color: colors.dark,
    bg: colors.light,
  },
}

