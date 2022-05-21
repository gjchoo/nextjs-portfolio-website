/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./email.module.css";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";

import { emailAddress, emailContent } from "../../../utils/constant";

export interface EmailListItemProps {
  title: string;
}

export const Email = () => {
  return (
    <div className="opacityAnimation">
      <div
        data-testid="storybook-email"
        className="desktop-email storybook-hover-icon"
      >
        {/* <span className={styles.border} /> */}
        <a href={`mailto: ${emailAddress}` + emailContent}>
          <Text
            className={`${styles.verticalText}`}
            text={emailAddress}
            size={SizeTypes.fs18}
            weight={WeightTypes.light}
          />
        </a>
      </div>
    </div>
  );
};
