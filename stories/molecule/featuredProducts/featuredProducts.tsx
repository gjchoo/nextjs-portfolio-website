/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";

import styles from "./featuredProducts.module.css";

import { FeaturedList } from "../../../utils/constants";

import Img from "next/image";

interface ChannelsProps {
  icon: string;
  url: string;
  alt: string;
}

interface FeaturedProductsProps {
  source: string;
  title: string;
  subTitle: string;
  techList: string[];
  channels?: ChannelsProps[];
  website: string;
  appName?: string;
}

export const FeaturedProducts = () => {
  return (
    <div
      id="work-section"
      data-testid="storybook-feature-products"
      className="paddingTop70"
    >
      <h2 style={{ marginBottom: 50 }}>
        <span className="regular fs18 secondary-color">03: </span>
        <span className="regular fs24 primary-color">
          {`Things that I've built`}
        </span>
      </h2>

      <ul>
        {FeaturedList.map((e: FeaturedProductsProps) => (
          <li className="item" key={e.title}>
            <div className={styles.contentDirection}>
              <div className="full-width justify-center align-center">
                <img
                  className={styles.featureProductImg}
                  src={e.source}
                  alt={e.title}
                  height={"100%"}
                  width={"100%"}
                />
              </div>

              <div className={styles.featureProductContent}>
                <h3 className="fs14 medium primary-color margin-0 left-align">
                  Featured Project
                </h3>
                {e.website ? (
                  <a href={e.website} target="_blank" rel="noreferrer">
                    <p className="fs14 regular primary-color margin-0 left-align paddingBottom-10">
                      {e.appName}
                    </p>
                  </a>
                ) : (
                  <p className="fs14 regular primary-color margin-0 left-align paddingBottom-10">
                    {e.appName}
                  </p>
                )}

                <h3 className="fs38 medium primary-color padding-margin-0">
                  {e.title}
                </h3>

                <p className={`light fs18 secondary-color`}>{e.subTitle}</p>

                <div>
                  <p className={`light fs12 primary-color`}>
                    {e.techList.join(" ")}
                  </p>
                </div>

                {e.channels && (
                  <ul className="row">
                    {e.channels.map((e) => (
                      <li key={e.icon} className="marginRight-20">
                        {e.url ? (
                          <a target="_blank" href={e.url} rel="noreferrer">
                            <Img src={e.icon} width={120} alt={e.alt} />
                          </a>
                        ) : (
                          <Img src={e.icon} width={120} alt={e.alt} />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
