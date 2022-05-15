import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Img } from "./img";
import Github from "../../assets/github.svg";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Img",
  component: Img,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {
      options: [0, 1, 2, 3], // iterator
      mapping: [Github, Instagram, LinkedIn, Twitter], // values
      control: {
        type: "select",
        labels: ["Github", "Instagram", "LinkedIn", "Twitter"],
      },
    },
    hover: {
      options: [0, 1], // iterator
      mapping: [true, false], // values
      control: {
        type: "select",
        labels: ["Should Hover", "No Hover"],
      },
    },
  },
} as ComponentMeta<typeof Img>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  alt: "This is a sample of a dummy img",
  src: Github,
  height: 32,
  width: 32,
  hover: false,
};
