/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./introduction.module.css";

export interface IntroductionProps {}

export const Introduction = ({}: IntroductionProps) => {
  return (
    <div
      id="introduction"
      data-testid="storybook-introduction"
      className={["paddingTop70", styles.introduction].join(" ")}
    >
      <h1 className="regular fs14 primary-color">Hey, my name is</h1>
      <h2 className="semibold fs60 marginVertical-10 primary-color">
        Gian Jie
      </h2>
      <h3
        className={`medium fs48 secondary-color marginVertical-10 ${styles.maxWidth434}`}
      >
        Web & mobile app developer
      </h3>
      <p className={`light fs18 secondary-color`}>
        I am a Singapore-based software engineer who’s passionate  about
        developing great & meaningful digital products. Currently I am
        collaborating with a team of designers and software engineers to develop
        humancentric products at{" "}
        <a href="https://www.ibm.com/sg-en" target="_blank" rel="noreferrer">
          <span className="regular primary-color underline">IBM</span>.
        </a>
      </p>
    </div>
  );
};
