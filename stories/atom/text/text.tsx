import React from "react";
import styles from "./Text.module.css";

export enum WeightTypes {
  semibold = "semibold",
  medium = "medium",
  regular = "regular",
  light = "light",
}

export enum SizeTypes {
  fs60 = "fs60",
  fs48 = "fs48",
  fs24 = "fs24",
  fs18 = "fs18",
  fs14 = "fs14",
}

export interface TextProps {
  /**
   * additional classNames
   */
  className?: string;
  /**
   * text contents
   */
  text: string;
  /**
   * size of the text
   */
  size: SizeTypes;
  /**
   * size of the text
   */
  weight: WeightTypes;
  /**
   * lineHeight of the text
   */
  lineHeight?: number;
  /**
   * color of the text
   */
  color?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Text = ({
  className,
  text,
  size,
  weight,
  lineHeight = 29,
  color = "secondary-color",
}: TextProps) => {
  return (
    <p
      data-testid="storybook-p"
      className={[text, weight, size, color, className].join(" ")}
      style={{ lineHeight: `${lineHeight}px`, color }}
    >
      {text}
    </p>
  );
};
