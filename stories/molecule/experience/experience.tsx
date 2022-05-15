/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import styles from "./experience.module.css";

import { experienceList } from "../../../utils/constant";

interface ExperienceListProps {
  company: string;
  title: string;
  duration: string;
  highlights: string[];
}

export const Experience = () => {
  const [index, setIndex] = useState("0");
  const [currentCompany, SetCurrentCompany] = useState(
    experienceList[0].company
  );

  const onSelectIndex = (event: React.MouseEvent<HTMLDivElement>) => {
    SetCurrentCompany(event.currentTarget.id);
    setIndex(event.currentTarget.title);
    // const scrollTab = document.getElementById("scrollTab");
    // if (null != scrollTab) {
    //   const left = document.getElementById(currentCompany)?.offsetLeft;
    //   console.log(document.getElementById(currentCompany));
    //   scrollTab.scrollTo({ left, behavior: "smooth" });
    // }
  };

  const isCurrentCompany = (company: string) => company === currentCompany;

  console.log(parseInt(index, 0), experienceList.length - 1);

  return (
    <div
      id="profile-section"
      data-testid="storybook-experience"
      className="paddingVertical-20"
    >
      <h2>
        <span className="regular fs18 secondary-color">02: </span>
        <span className="regular fs24 primary-color">
          {`Here's Where I've Worked`}
        </span>
      </h2>

      <ul id="scrollTab" className={styles.experienceRow}>
        {experienceList.map((e: ExperienceListProps, index: number) => {
          return (
            <li key={e.company}>
              <div
                className={styles.experienceContainer}
                onClick={onSelectIndex}
                id={e.company}
                title={`${index}`}
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

      <div className="height100vh" style={{ position: "relative" }}>
        <ul className="height100vh" style={{ position: "relative" }}>
          {experienceList.map((e: ExperienceListProps) => {
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
                  "height100vh",
                ].join(" ")}
              >
                <span className="fs18 primary-color regular">{e.title}</span>
                <span className="fs14 primary-color regular marginVertical-10">
                  {e.duration}
                </span>
                <ul className={styles.oneColumn}>
                  {e.highlights.map((e) => (
                    <li key={e} className={styles.listItem}>
                      <p
                        className="fs18 secondary-color light marginVertical-10 storybook-hover-icon"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {e}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
