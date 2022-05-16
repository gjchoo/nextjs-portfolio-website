/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./footer.module.css";

import { SocialMedia } from "../../compounds/socialMedia/socialMedia";

import { emailAddress, emailContent } from "../../../utils/constant";

export const Footer = () => {
  return (
    <div
      id="contact-section"
      data-testid="storybook-about-myself"
      className="column justify-center align-center"
    >
      <h2>
        <span className="regular fs18 secondary-color">04: </span>
        <span className="regular fs24 primary-color">{`Let's Get In Touch`}</span>
      </h2>
      <p
        className={[
          "light",
          "fs18",
          "secondary-color",
          styles.centralisedText,
          "paddingVertical-20",
          "margin-0",
        ].join(" ")}
      >
        I’m keen and open for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>

      <div>
        <a href={`mailto: ${emailAddress}` + emailContent}>
          <p
            className={[
              "fs18",
              "regular",
              "secondary-color",
              "justify-center",
              "align-center",
              styles.sayHello,
              styles.centralisedText,
            ].join(" ")}
          >
            Say Hello
          </p>
        </a>
      </div>

      <span className="mobile-only marginVertical-20">
        <SocialMedia />
      </span>
    </div>
  );
};
