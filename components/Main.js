import { INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { THEME } from "../styles/theme";

const mainRenderOptions = {
  renderNode: {
    [INLINES.HYPERLINK]: (node) => {
      const { content, data } = node;
      return (
        <a href={data.uri} target="_blank" className="mainLink">
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
      .main p {
        font-size: 70px;
        font-weight: bold;
      }

      .main p ~ * {
        margin-top: 70px;
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
