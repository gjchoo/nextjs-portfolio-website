/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./listView.module.css";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";

import { skillList } from "../../../utils/constant";

export const ListView = () => {
  return (
    <div data-testid="storybook-list-view">
      <ul className={[styles.twoColumn, styles.maxWidth].join(" ")}>
        {skillList.map((e) => (
          <li
            className={[styles.listItem, "storybook-hover-icon"].join(" ")}
            key={e}
          >
            <Text
              className={styles.padding}
              size={SizeTypes.fs18}
              weight={WeightTypes.light}
              text={e}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
