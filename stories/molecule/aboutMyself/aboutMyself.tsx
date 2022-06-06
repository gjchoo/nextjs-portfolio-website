/* eslint-disable @next/next/no-img-element */
import React from "react";

import { ListView } from "../../compounds/listView/listView";

export interface AboutMyselfProps {}

export const AboutMyself = ({}: AboutMyselfProps) => {
  return (
    <div
      id="about-section"
      data-testid="storybook-about-myself"
      className="paddingTop70"
    >
      <h2>
        <span className="regular fs18 secondary-color">01: </span>
        <span className="regular fs24 primary-color">About myself</span>
      </h2>
      <p className={`light fs18 secondary-color`}>
        Hello! My name is Gian Jie and I enjoy seeing people using the products
        that I (with the team) painstakingly built. My development journey
        started back in 2017 when I decided to do a career switch from molecular
        biology to software engineering. Since after I have been enjoying every
        moment.
      </p>

      <p className={`light fs18 secondary-color`}>
        Over the years, I have had the privilege to work with a{" "}
        <a href="https://eyos.one" target="_blank" rel="noreferrer">
          <span className="regular primary-color">retail tech startup</span>,{" "}
        </a>
        <a href="https://ocdigitalnetwork.com" target="_blank" rel="noreferrer">
          <span className="regular primary-color">an advertising agency</span>{" "}
          and{" "}
        </a>
        <span className="regular primary-color">few startups</span>. My focus
        these days is to learn and build scalable and inclusive digital
        experiences at{" "}
        <span className="regular primary-color underline">IBM</span>.
      </p>

      <p className={`light fs18 secondary-color`}>
        Here is a snapshot of the technologies I used recently:
      </p>

      <ListView />
    </div>
  );
};
