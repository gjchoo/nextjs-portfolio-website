/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Img } from "../../atom/img/img";

import { navIconSize } from "../../../utils/constant";

import { SocialMediaList } from "../../../utils/constants";

export interface SocialMediaProps {
  orientation?: string;
}

export interface SocialMediaListProps {
  src: string;
  alt: string;
  key: string;
}

export const SocialMedia = ({
  orientation = "horizontal",
}: SocialMediaProps) => {
  return (
    <div data-testid="storybook-social-media" className="opacityAnimation">
      <ul
        className={`${
          orientation === "horizontal"
            ? "row"
            : "column width-45 after-border social-media-desktop "
        }`}
      >
        {SocialMediaList.map((e: SocialMediaListProps) =>
          e.key ? (
            <li
              key={e.alt}
              className={`${
                orientation === "horizontal"
                  ? "paddingHorizontal-10-20"
                  : "padding-10"
              } storybook-hover-icon`}
            >
              <a target="_blank" href={e.key} rel="noopener noreferrer">
                <Img
                  src={e.src}
                  width={navIconSize}
                  height={navIconSize}
                  alt={e.alt}
                />
              </a>
            </li>
          ) : (
            <li key={e.alt} />
          )
        )}
      </ul>
    </div>
  );
};
