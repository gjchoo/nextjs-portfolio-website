import type { NextPage } from "next";
import Head from "next/head";

import { useEffect } from "react";

import { Navigation } from "../stories/compounds/navigation/navigation";
import { SocialMedia } from "../stories/compounds/socialMedia/socialMedia";
import { Email } from "../stories/compounds/email/email";

import { Introduction } from "../stories/molecule/introduction/introduction";
import { AboutMyself } from "../stories/molecule/aboutMyself/aboutMyself";
import { Experience } from "../stories/molecule/experience/experience";
import { FeaturedProducts } from "../stories/molecule/featuredProducts/featuredProducts";
import { Footer } from "../stories/molecule/footer/footer";

const newLocal = "https://www.gjchoo.com";

const Home: NextPage = () => {
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
          sizes="48x48"
          href="/icons/android-icon-48x48.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="72x72"
          href="/icons/android-icon-72x72.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/icons/android-icon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="144x144"
          href="/icons/android-icon-144x144.png"
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
        <link rel="manifest" href="/icons/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content="/icons/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
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
    </div>
  );
};

export default Home;
