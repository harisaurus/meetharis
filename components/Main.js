import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { THEME, BREAKPOINTS } from "../styles/theme";

const mainRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      const { content, data } = node;
      return (
        <a href={data.uri} target="_blank" rel="noopener" className="mainLink">
          {content[0].value}
        </a>
      );
    },
  },
};

const Main = ({ content }) => (
  <div className="main">
    {documentToReactComponents(content, mainRenderOptions)}
    <style jsx global>{`
      .main {
        padding-top: 200px;
        padding-bottom: 88px;
      }

      @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
        .main {
          padding-top: 80px;
        }
      }

      @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
        .main {
          padding-top: 60px;
          padding-bottom: 48px;
        }
      }

      .main p {
        font-size: 70px;
      }

      @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
        .main p {
          font-size: 55px;
        }
      }

      @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
        .main p {
          font-size: 32px;
        }
      }

      .main p ~ * {
        margin-top: 70px;
      }

      @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
        .main p ~ * {
          margin-top: 40px;
        }
      }

      @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
        .main p ~ * {
          margin-top: 28px;
        }
      }

      .mainLink {
        color: ${THEME.link};
        text-decoration: none;
        transition: color 0.1s ease-in-out;
      }

      .mainLink:hover,
      .mainLink:focus {
        color: ${THEME.linkHover};
      }
    `}</style>
  </div>
);

export default Main;
