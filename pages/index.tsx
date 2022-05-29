import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";

import { Navigation } from "../stories/compounds/navigation/navigation";
import { SocialMedia } from "../stories/compounds/socialMedia/socialMedia";
import { Email } from "../stories/compounds/email/email";

import { Introduction } from "../stories/molecule/introduction/introduction";
import { AboutMyself } from "../stories/molecule/aboutMyself/aboutMyself";
import { Experience } from "../stories/molecule/experience/experience";
import { FeaturedProducts } from "../stories/molecule/featuredProducts/featuredProducts";
import { Footer } from "../stories/molecule/footer/footer";

import PreLoader from "../components/preloader";

const Home: NextPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(!loading), 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const animation = () => {
      const mainSections = document.querySelectorAll(".animate-section");

      for (let i = 0; i < mainSections.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = mainSections[i].getBoundingClientRect().top;
        const elementVisible = 100;
        const limit = windowHeight - elementVisible;

        if (elementTop < limit) {
          mainSections[i].classList.add("animateAllChildActive");
        } else {
          // mainSections[i].classList.remove("animateAllChildActive");
          // test
        }
      }
    };

    window.addEventListener("scroll", animation);

    return () => {
      window.addEventListener("scroll", animation);
    };
  }, []);

  return (
    <div>
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>
          A Software Engineer Who Loves To Develop Web And Mobile App
        </title>
        <meta
          name="description"
          content="I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://www.gjchoo.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="A Software Engineer Who Loves To Develop Web And Mobile App"
        />
        <meta
          property="og:description"
          content="I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products"
        />
        <meta property="og:image" content="https://www.gjchoo.com/gjchoo.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="gjchoo.com" />
        <meta property="twitter:url" content="https://www.gjchoo.com/" />
        <meta
          name="twitter:title"
          content="A Software Engineer Who Loves To Develop Web And Mobile App"
        />
        <meta
          name="twitter:description"
          content="I am a Singapore-based software engineer who is passionate about developing great & meaningful digital products"
        />
        <meta
          name="twitter:image"
          content="https://www.gjchoo.com/gjchoo.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icons/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/icons/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icons/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icons/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icons/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-icon-180x180.png"
        />

        <link
          rel="icon"
          type="image/png"
          sizes="36x36"
          href="/icons/android-icon-36x36.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/icons/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      {!loading && (
        <main>
          <Navigation />

          <SocialMedia orientation="vertical" />
          <Email />

          <section className="main-section">
            <Introduction />
          </section>

          <section className="main-section animate-section">
            <AboutMyself />
          </section>

          <section className="main-section animate-section">
            <Experience />
          </section>

          <section className="main-section animate-section">
            <FeaturedProducts />
          </section>

          <section
            className="main-section animate-section"
            style={{ paddingTop: 50, paddingBottom: 0 }}
          >
            <Footer />
          </section>
        </main>
      )}
      <PreLoader />
    </div>
  );
};

export default Home;
