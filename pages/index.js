import { useEffect, useState } from "react";
import Head from "next/head";
import Main from "../components/Main";
import Button from "../components/Button";
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

  const { content, ctaText, footer } = main;

  return (
    <>
      <Head>
        <title>Haris Mahmood — Bio</title>
        <meta name="title" content="Haris Mahmood — Bio" />
        <meta name="description" content="Haris is a Toronto-based developer, a YouTuber, and a public speaker." />

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://metatags.io/"/>
        <meta property="og:title" content="Haris Mahmood — Bio"/>
        <meta property="og:description" content="Haris is a Toronto-based developer, a YouTuber, and a public speaker."/>
        <meta property="og:image" content="/meta.jpg"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://metatags.io/"/>
        <meta property="twitter:title" content="Haris Mahmood — Bio"/>
        <meta property="twitter:description" content="Haris is a Toronto-based developer, a YouTuber, and a public speaker."/>
        <meta property="twitter:image" content="/meta.jpg"/>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" href="/favicon.png" />

        <link
          rel="preload"
          href="/fonts/SFProDisplay-Bold.woff2"
          as="font"
          crossOrigin=""
        />

        <link
          rel="preload"
          href="/fonts/SFProDisplay-Bold.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <Main content={content} />
      <Button text={ctaText} />
      <Talks talks={talks} />
      <Footer text={footer} />
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
};

export default HomePage;
