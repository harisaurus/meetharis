import { THEME } from "../styles/theme";

const Button = ({ text }) => (
  <>
    <a className="button" href="mailto:haris.mhmd.io@gmail.com">
      {text}
    </a>

    <style jsx>{`
      .button {
        background-color: ${THEME.buttonBackground};
        color: ${THEME.buttonText};
        text-decoration: none;
        font-size: 1.7rem;
        height: 60px;
        display: inline-block;
        line-height: 60px;
        padding-left: 28px;
        padding-right: 28px;
        border-radius: 8px;
        transition: background-color 0.1s ease-in-out;
      }

      .button:hover,
      .button:focus {
        background-color: ${THEME.buttonBackgroundHover};
      }
    `}</style>
  </>
);

export default Button;
