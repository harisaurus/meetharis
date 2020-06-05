import { useEffect, useState } from "react";
import Head from "next/head";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

const HomePage = () => {
  async function fetchEntry(entryId) {
    const entry = await client.getEntry(entryId);
    if (entry.fields) return entry.fields;
    console.log(`Error getting Entry with id ${entryId}`);
  }

  async function fetchEntries(entryType) {
    const entries = await client.getEntries({
      content_type: entryType,
      order: "-fields.date",
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${entryType}`);
  }

  const [main, setMain] = useState();
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    async function getTalkEntries() {
      const talks = await fetchEntries("talk");
      setTalks(talks);
    }

    getTalkEntries();
  }, []);

  useEffect(() => {
    async function getMainEntry() {
      const mainEntry = await fetchEntry("55EnWlaqDrfmJAs9imUnp6");
      console.log(mainEntry);
      setMain(mainEntry);
    }

    getMainEntry();
  }, []);

  if (!main) {
    return (
      <>
        <h1>loading...</h1>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Haris Mahmood</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      <div>{documentToReactComponents(main.content)}</div>

      <div>{main.ctaText}</div>

      {talks.length > 0
        ? talks.map((t, tIndex) => (
            <li key={tIndex}>
              <span>{t.fields.event}</span>
              <h3>{t.fields.name}</h3>
              <span>{t.fields.friendlyDate}</span>
            </li>
          ))
        : null}

      <div>{main.footer}</div>
    </>
  );
};

export default HomePage;
