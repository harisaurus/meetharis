import { useEffect, useState } from "react";
import Head from "next/head";
import Main from "../components/Main";
import Talks from "../components/Talks";
import Footer from "../components/Footer";
import globalStyles from "../styles/global";

const client = require("contentful").createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
});

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

const HomePage = () => {
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
      setMain(mainEntry);
    }

    getMainEntry();
  }, []);

  if (!main) return "";

  return (
    <>
      <Head>
        <title>Haris Mahmood</title>
      </Head>
      <Main content={main.content} />
      <div>{main.ctaText}</div>
      <Talks talks={talks} />
      <Footer text={main.footer} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default HomePage;
