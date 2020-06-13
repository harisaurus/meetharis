import css from "styled-jsx/css";
import { THEME } from "./theme";

export default css.global`
  @font-face {
    font-family: "SF Pro Display";
    src: url("/static/fonts/SFProDisplay-Bold.woff2") format("woff2"),
      url("/static/fonts/SFProDisplay-Bold.woff") format("woff");
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    font-size: 16px;
    font-family: "SF Pro Display", sans-serif;
    max-width: 1168px;
    padding: 0 24px;
    margin: 0 auto;
    color: ${THEME.text};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: bold;
  }

  h1,
  h2,
  h3,
  p,
  ul,
  li {
    margin: 0;
    padding: 0;
  }
`;
