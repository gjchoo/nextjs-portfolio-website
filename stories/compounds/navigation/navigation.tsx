/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

import styles from "./navigation.module.css";

import { Text, SizeTypes, WeightTypes } from "../../atom/text/text";
import { Img } from "../../atom/img/img";

import {
  navIconSize,
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

  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const onScroll = (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        if (null !== moileNavigation.current) {
          // setDownDirection(true);
        }
      } else if (y < window.scrollY) {
        if (null !== moileNavigation.current) {
          // setDownDirection(false);
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

  const onMobileHamBurgerHandle = () => setMobileMenu(!mobileMenu);

  return (
    <header className="full-width mobile-sticky">
      <nav data-testid="storybook-navigation">
        <div className="justify-center">
          <ol className="row justify-between align-center desktop-nav-bar">
            {navigationList.map((e: NavListItemProps) => (
              <li className="desktopNavigationLi" key={e.title}>
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
                        alt="Singapore Software Engineer gjchoo"
                      />
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="mobileAnimation">
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
              className={[
                `row justify-between align-center mobile-nav-bar`,
                styles.hamBurgerContainer,
              ].join(" ")}
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

              <div
                onClick={onMobileHamBurgerHandle}
                className={[
                  "storybook-hover-icon",
                  styles.hamBurgerContent,
                ].join(" ")}
              >
                <div
                  className={mobileMenu ? styles.barOneActive : styles.barOne}
                />
                <div
                  className={mobileMenu ? styles.barTwoActive : styles.barTwo}
                />
                <div
                  className={
                    mobileMenu ? styles.barThreeActive : styles.barThree
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={mobileMenu ? styles.overlayActive : styles.overlay} />
        <div
          className={mobileMenu ? styles.overlayMenuActive : styles.overlayMenu}
        >
          <div className="column justify-center" style={{ height: "100%" }}>
            <ol className="column justify-between align-center">
              {navigationList.map(
                (e: NavListItemProps) =>
                  !e.icon && (
                    <li key={e.title} onClick={onMobileHamBurgerHandle}>
                      <Link href={e.url}>
                        <a className="storybook-hover-icon">
                          <Text
                            text={e.title.toUpperCase()}
                            size={SizeTypes.fs18}
                            weight={WeightTypes.regular}
                            color="primary-color"
                          />
                        </a>
                      </Link>
                    </li>
                  )
              )}
            </ol>
            <div
              onClick={onMobileHamBurgerHandle}
              style={{ cursor: "pointer" }}
            >
              <Text
                className={styles.centralisedText}
                text={"CANCEL".toUpperCase()}
                size={SizeTypes.fs18}
                weight={WeightTypes.regular}
                color="primary-color"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
