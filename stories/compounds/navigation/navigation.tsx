/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import styles from "./navigation.module.css";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";
import { Img } from "../../atom/img/img";

import {
  navIconSize,
  hamBurger,
  mainIcon,
  navigationList,
  imgGenericAlt,
} from "../../../utils/constant";

interface NavListItemProps {
  title: string;
  url: string;
  icon?: boolean;
  path?: string;
}

export const Navigation = () => {
  const moileNavigation = useRef<HTMLDivElement>(null);

  const [y, setY] = useState(0);
  const [downDirection, setDownDirection] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const onScroll = (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (null !== moileNavigation.current) {
          setDownDirection(true);
        }
      } else if (y < window.scrollY) {
        console.log("scrolling down");
        // fadeIn.
        if (null !== moileNavigation.current) {
          setDownDirection(false);
        }
      }
      setY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [y]);

  useEffect(() => {
    const onHandleResize = () => {
      if (window.innerWidth <= 767) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", onHandleResize);
    // Call handler right away so state gets updated with initial window size
    onHandleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", onHandleResize);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="full-width mobile-sticky">
      <nav data-testid="storybook-navigation">
        <div className="justify-center">
          <ol className="row justify-between align-center desktop-nav-bar">
            {navigationList.map((e: NavListItemProps) => (
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

        <div
          className={`${
            isMobile
              ? downDirection
                ? styles.directionDown
                : styles.directionUp
              : ""
          }`}
        >
          <div
            ref={moileNavigation}
            className={[`row justify-between align-center mobile-nav-bar`].join(
              " "
            )}
          >
            <Link href={navigationList[2].url}>
              <a className="storybook-hover-icon">
                <Img
                  src={mainIcon}
                  width={navIconSize}
                  height={navIconSize}
                  alt={imgGenericAlt}
                />
              </a>
            </Link>
            <span className="storybook-hover-icon">
              <Img
                src={hamBurger}
                width={navIconSize}
                height={navIconSize}
                alt={imgGenericAlt + "hamburger icon"}
              />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};
