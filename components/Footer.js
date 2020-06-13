import { THEME } from "../styles/theme";

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
    `}</style>
  </div>
);

export default Footer;
