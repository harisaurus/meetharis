const PALETTE = {
  black: {
    L1: "#525252",
    primary: "#000000",
  },
  grey: {
    primary: "#8B8B8B",
  },
  blue: {
    primary: "#5965FF",
  },
  white: {
    primary: "#FFFFFF",
  },
};

export const THEME = {
  text: PALETTE.black.primary,
  link: PALETTE.grey.primary,
  linkHover: PALETTE.blue.primary,
  footerText: PALETTE.black.L1,
  buttonBackground: PALETTE.blue.primary,
  buttonBackgroundHover: PALETTE.black.primary,
  buttonText: PALETTE.white.primary,
};

export const BREAKPOINTS = {
  TABLET: "780px",
  PHONE: "500px",
};
