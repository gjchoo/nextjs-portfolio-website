/* eslint-disable @next/next/no-img-element */
import React from "react";

import { Img } from "../../atom/img/img";

import { navIconSize } from "../../../utils/constant";

import Github from "../../assets/github.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";

export interface SocialMediaProps {
  orientation?: string;
}

export interface SocialMediaListProps {
  src: string;
  alt: string;
  key: string;
}

const SocialMediaList = [
  {
    src: "/linkedin.svg" || LinkedIn,
    alt: "Software Engineer Singapore Gjchoo",
    key: "https://www.linkedin.com/in/gjchoo/",
  },
  {
    src: "/github.svg" || Github,
    alt: "Github software Engineer Gjchoo",
    key: "https://github.com/gjchoo",
  },
  {
    src: "/twitter.svg" || Twitter,
    alt: "Twitter Software Engineer Gjchoo",
    key: "https://twitter.com/gjchooo",
  },
  {
    src: "/instagram.svg" || Instagram,
    alt: "Instagram Software Engineer Gjchoo",
    key: "https://www.instagram.com/gjchoo/",
  },
  {
    src: "",
    alt: "",
    key: "",
  },
];

export const SocialMedia = ({
  orientation = "horizontal",
}: SocialMediaProps) => {
  return (
    <div data-testid="storybook-social-media">
      <ul
        className={`${
          orientation === "horizontal"
            ? "row"
            : "column width-45 after-border social-media-desktop"
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
            <li />
          )
        )}
      </ul>
    </div>
  );
};
