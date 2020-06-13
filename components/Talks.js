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

        .title {
          font-size: 32px;
          margin-bottom: 48px;
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

        .name {
          font-size: 1.375rem;
          padding-top: 4px;
          padding-bottom: 16px;
        }

        .date {
          font-size: 0.875rem;
        }
      `}</style>
    </div>
  );
};

export default Talks;
