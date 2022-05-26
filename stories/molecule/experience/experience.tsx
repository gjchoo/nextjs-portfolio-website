/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./experience.module.css";

import { ExperienceList } from "../../../utils/constants";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";

interface ExperienceListProps {
  company: string;
  title: string;
  about: string;
  duration: string;
  highlights: string[];
  logo: string;
  iconOnly?: boolean;
}

export const Experience = () => {
  // const [index, setIndex] = useState("0");

  const isCurrentCompany = (company: string) => company === currentCompany;

  const [currentCompany, SetCurrentCompany] = useState(
    ExperienceList[0].company
  );

  const onSelectIndex = (event: React.MouseEvent<HTMLDivElement>) => {
    SetCurrentCompany(event.currentTarget.id);
    // setIndex(event.currentTarget.title);
    // const scrollTab = document.getElementById("scrollTab");
    // if (null != scrollTab) {
    //   const left = document.getElementById(currentCompany)?.offsetLeft;
    //   console.log(document.getElementById(currentCompany));
    //   scrollTab.scrollTo({ left, behavior: "smooth" });
    // }
  };

  useEffect(() => {
    const handleScroll = () => {
      const experienceViewPort = document.getElementById("experienceViewPort");
      const offsetTop = experienceViewPort?.getBoundingClientRect().top;
      if (experienceViewPort) {
        const allDisplayProduct = document.querySelectorAll(
          "[id='showProductDisplay']"
        );

        for (let i = 0; i < allDisplayProduct.length; i++) {
          const windowHeight = window.innerHeight;
          const offsetTop = allDisplayProduct[i].getBoundingClientRect().top;
          const elementVisible = 200;
          const limit = windowHeight - elementVisible;

          if (offsetTop < limit) {
            allDisplayProduct[i]?.classList.remove(
              "animateDisplayProductInActive"
            );
            allDisplayProduct[i]?.classList.add("animateDisplayProductActive");
          } else {
            allDisplayProduct[i]?.classList.remove(
              "animateDisplayProductActive"
            );
            allDisplayProduct[i]?.classList.add(
              "animateDisplayProductInActive"
            );
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return function cleanup() {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="profile-section"
      data-testid="storybook-experience"
      className="paddingTop70"
    >
      <h2>
        <span className="regular fs18 secondary-color">02: </span>
        <span className="regular fs24 primary-color">
          {`Here's where I've Worked`}
        </span>
      </h2>

      <ul id="scrollTab" className={styles.experienceRow}>
        {ExperienceList.map((e: ExperienceListProps, index: number) => {
          return (
            <li key={e.company}>
              <div
                className={styles.experienceContainer}
                onClick={onSelectIndex}
                id={e.company}
                title={e.company}
              >
                <p
                  className={[
                    styles.experienceItem,
                    isCurrentCompany(e.company) && styles.experienceDecorator,
                    "fs18",
                    `${
                      isCurrentCompany(e.company) ? "primary" : "tertiary"
                    }-color`,
                  ].join(" ")}
                >
                  {e.company}
                </p>
              </div>
            </li>
          );
        })}
      </ul>

      {/* <p
        className="mobile-only primary-color light"
        style={{ fontSize: "1em", textAlign: "right" }}
      >
        {parseInt(index, 10) < experienceList.length - 1 &&
          `Before ${currentCompany}`}
      </p> */}

      <ul id="experienceViewPort" className={styles.contentHeight}>
        {ExperienceList.map((e: ExperienceListProps) => {
          let animationType;

          if (isCurrentCompany(e.company)) {
            animationType = "fadeIn";
          } else {
            animationType = "fadeOut";
          }

          return (
            <div
              key={e.duration}
              className={[
                "column",
                animationType,
                "absolute-all",
                "paddingVertical-20",
              ].join(" ")}
            >
              <Text
                className="paddingBottom-20"
                text={e.about}
                size={SizeTypes.fs18}
                weight={WeightTypes.light}
              />
              <span className="fs18 primary-color regular">{e.title}</span>
              <span className="fs14 primary-color regular marginVertical-10">
                {e.duration}
              </span>
              <ul className={styles.oneColumn}>
                {e.highlights.map((text: string, index: number) => (
                  <li key={index} className={styles.listItem}>
                    <p
                      className="text-shadow fs18 secondary-color light marginVertical-10 storybook-hover-icon animatePColor"
                      style={{ whiteSpace: "pre-wrap" }}
                    >
                      {text}
                    </p>
                  </li>
                ))}
                {!e.iconOnly ? (
                  e.logo && (
                    <div
                      id="showProductDisplay"
                      className={styles.showProductDisplay}
                    >
                      <img
                        className={styles.productSize}
                        src={e.logo}
                        alt={e.title}
                        height={"100%"}
                      />
                    </div>
                  )
                ) : (
                  <div id="showProductDisplay" className={styles.logoStyle}>
                    <img
                      className={styles.logoSize}
                      src={e.logo}
                      alt={e.title}
                      height={"100%"}
                    />
                  </div>
                )}
              </ul>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
