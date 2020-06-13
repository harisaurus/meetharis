import { THEME, BREAKPOINTS } from "../styles/theme";

const Footer = ({ text }) => (
  <div className="footer">
    <span className="text">{text}</span>

    <style jsx>{`
      .footer {
        padding-top: 24px;
        padding-bottom: 24px;
      }

      .text {
        color: ${THEME.footerText};
      }

      @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
        .text {
          font-size: 0.8rem;
        }
      }
    `}</style>
  </div>
);

export default Footer;
