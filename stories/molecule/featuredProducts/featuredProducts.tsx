/* eslint-disable @next/next/no-img-element */
import React from "react";

import styles from "./featuredProducts.module.css";

import { featuredProductList } from "../../../utils/constant";
import { Img } from "../../atom/img/img";

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
}

export const FeaturedProducts = () => {
  return (
    <div
      id="work-section"
      data-testid="storybook-feature-products"
      className="paddingTop70"
    >
      <h2>
        <span className="regular fs18 secondary-color">03: </span>
        <span className="regular fs24 primary-color">
          Some Of My Notable Works
        </span>
      </h2>

      <ul>
        {featuredProductList.map((e: FeaturedProductsProps) => (
          <li key={e.title}>
            <div className={styles.contentDirection}>
              <div
                className={styles.featureProductImg}
                style={{ backgroundColor: "grey" }}
              />
              <div className={styles.featureProductContent}>
                {e.website ? (
                  <a href={e.website} target="_blank" rel="noreferrer">
                    <h3 className="fs48 medium primary-color padding-margin-0">
                      {e.title}
                    </h3>
                  </a>
                ) : (
                  <h3 className="fs48 medium primary-color padding-margin-0">
                    {e.title}
                  </h3>
                )}

                <p className={`regular fs18 secondary-color`}>{e.subTitle}</p>

                <p className={`regular fs14 primary-color`}>
                  {e.techList.join(", ")}
                </p>

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
