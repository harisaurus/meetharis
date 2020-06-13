import { BREAKPOINTS } from "../styles/theme";

const Talks = ({ talks }) => {
  if (talks.length < 1) return null;

  return (
    <div className="talks">
      <h2 className="title">Talks —</h2>
      <ul className="talkList">
        {talks.map((talk, talkIndex) => (
          <li key={talkIndex} className="talkItem">
            <span className="event">{talk.fields.event}</span>
            <h3 className="name">{talk.fields.name}</h3>
            <span className="date">{talk.fields.friendlyDate}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        .talks {
          padding-top: 380px;
        }

        @media screen and (max-width: ${BREAKPOINTS.TABLET}) {
          .talks {
            padding-top: 200px;
          }
        }

        @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
          .talks {
            padding-top: 88px;
          }
        }

        .title {
          font-size: 32px;
          margin-bottom: 48px;
        }

        @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
          .title {
            font-size: 24px;
          }
        }

        .talkList {
          list-style-type: none;
        }

        .talkItem {
          margin-bottom: 40px;
        }

        .event {
          font-size: 0.9rem;
        }

        @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
          .event {
            font-size: 0.8rem;
          }
        }

        .name {
          font-size: 1.375rem;
          padding-top: 4px;
          padding-bottom: 16px;
        }

        @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
          .name {
            font-size: 1.2rem;
            padding-top: 0;
            padding-bottom: 4px;
          }
        }

        .date {
          font-size: 0.875rem;
        }

        @media screen and (max-width: ${BREAKPOINTS.PHONE}) {
          .date {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Talks;
