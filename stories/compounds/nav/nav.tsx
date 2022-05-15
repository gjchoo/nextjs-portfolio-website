/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";
import { Img } from "../../atom/img/img";

import { navIconSize } from "../../../utils/constant";

// import GJWhiteIcon from "../../assets/gj-white-icon.svg";
import GJWhiteIcon from "../../../public/gj-white-icon.svg";

import HamburgerIcon from "../../assets/hamburger.svg";

interface NavListItemProps {
  title: string;
  url: string;
  icon?: boolean;
  path?: string;
}

const NavList = [
  {
    title: "about",
    url: "#about-section",
  },
  {
    title: "profile",
    url: "#profile-section",
  },
  {
    title: "gj",
    url: "#home-section",
    icon: true,
    path: "/gj-white-icon.svg" || GJWhiteIcon,
  },
  {
    title: "work",
    url: "#work-section",
  },
  {
    title: "contact",
    url: "#contact-section",
  },
];

export const Nav = () => {
  return (
    <header className="full-width">
      <nav data-testid="storybook-nav">
        <div className="justify-center">
          <ol className="row border justify-between align-center desktop-nav-bar">
            {NavList.map((e: NavListItemProps) => (
              <li key={e.title}>
                <Link href={e.url}>
                  <a className="storybook-hover-icon">
                    {!e.icon ? (
                      <Text
                        text={e.title.toUpperCase()}
                        size={SizeTypes.fs14}
                        weight={WeightTypes.regular}
                      />
                    ) : (
                      <Img
                        src={e.path || ""}
                        width={navIconSize}
                        height={navIconSize}
                        alt="Singapore Software Engineer GJCHOO"
                      />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="row border justify-between align-center mobile-nav-bar">
          <Link href={NavList[2].url}>
            <a className="storybook-hover-icon">
              <Img
                src={"/gj-white-icon.svg" || GJWhiteIcon}
                width={navIconSize}
                height={navIconSize}
                alt="Singapore Software Engineer GJCHOO"
              />
            </a>
          </Link>
          <span className="storybook-hover-icon">
            <Img
              src={"/hamburger.svg" || HamburgerIcon}
              width={navIconSize}
              height={navIconSize}
              alt="Singapore Software Engineer GJCHOO"
            />
          </span>
        </div>
      </nav>
    </header>
  );
};
