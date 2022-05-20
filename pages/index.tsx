import type { NextPage } from "next";
import Head from "next/head";

import { Navigation } from "../stories/compounds/navigation/navigation";
import { SocialMedia } from "../stories/compounds/socialMedia/socialMedia";
import { Email } from "../stories/compounds/email/email";

import { Introduction } from "../stories/molecule/introduction/introduction";
import { AboutMyself } from "../stories/molecule/aboutMyself/aboutMyself";
import { Experience } from "../stories/molecule/experience/experience";
import { FeaturedProducts } from "../stories/molecule/featuredProducts/featuredProducts";
import { Footer } from "../stories/molecule/footer/footer";

const Home: NextPage = () => {
  const newLocal = "https://www.gjchoo.com";
  return (
    <div>
      <Head>
        <title>
          Gian Jie - A Software Engineer Who Loves To Develop Web And Mobile App
        </title>
        <meta
          name="description"
          content="I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products."
        />
        <meta name="image" content="/gjchoo.png"></meta>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta
          name="twitter:creator"
          content={
            "I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products."
          }
          key="twhandle"
        />

        {/* Open Graph */}
        <meta
          property="og:url"
          content={"https://www.gjchoo.com"}
          key="ogurl"
        />
        <meta property="og:image" content={"/gjchoo.png"} key="ogimage" />
        <meta property="og:site_name" content={newLocal} key="ogsitename" />
        <meta
          property="og:title"
          content={
            "Gian Jie - A Software Engineer Who Loves To Develop Web And Mobile App"
          }
          key="ogtitle"
        />
        <meta
          property="og:description"
          content={
            "I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products."
          }
          key="ogdesc"
        />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <main>
        <Navigation />

        <SocialMedia orientation="vertical" />
        <Email />

        <section className="main-section">
          <Introduction />
        </section>

        <section className="main-section">
          <AboutMyself />
        </section>

        <section className="main-section">
          <Experience />
        </section>

        <section className="main-section">
          <FeaturedProducts />
        </section>

        <section
          className="main-section"
          style={{ paddingTop: 50, paddingBottom: 0 }}
        >
          <Footer />
        </section>
      </main>
    </div>
  );
};

export default Home;
