/* eslint-disable @next/next/no-img-element */
import React from "react";

export interface ImgProps {
  /**
   * alt img description
   */
  alt: string;
  /**
   * source of the img
   */
  src: string;
  /**
   * height of the img
   */
  height: number;
  /**
   * width of the img
   */
  width: number;
  /**
   * should add hover of the icon
   */
  hover?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Img = ({ alt, src, width, height, hover }: ImgProps) => {
  return (
    <img
      data-testid="storybook-img"
      src={src}
      className={hover ? "storybook-hover-icon" : ""}
      alt={alt}
      width={width}
      height={height}
      color={"red"}
    />
  );
};
