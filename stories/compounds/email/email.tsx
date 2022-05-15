/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";

import { navIconSize } from "../../../utils/constant";

export interface EmailListItemProps {
  title: string;
}

const emailAddress = "gjchoo@icloud.com";

export const Email = () => {
  return (
    <div data-testid="storybook-email">
      <Text
        className="vertical-text"
        text={emailAddress}
        size={SizeTypes.fs18}
        weight={WeightTypes.light}
      />
    </div>
  );
};
