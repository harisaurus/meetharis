const PALETTE = {
  black: {
    L1: "#777",
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
};

export const BREAKPOINTS = {
  TABLET: "780px",
  PHONE: "500px",
};
