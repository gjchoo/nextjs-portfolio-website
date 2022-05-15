import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Img } from "./img";
import { socialMedia } from "../../../utils/constant";

const arrayList = socialMedia.filter((e) => e.src).map((e) => e.src);

export default {
  title: "Atoms/Img",
  component: Img,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {
      options: Array.from({ length: arrayList.length }, (_, i) => i), // iterator
      mapping: arrayList, // values
      control: {
        type: "select",
        labels: arrayList,
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
const Template: ComponentStory<typeof Img> = (args) => (
  <div
    className="absolute-all"
    style={{ backgroundColor: "black", padding: 10 }}
  >
    <Img {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  alt: "This is a sample of a dummy img",
  src: arrayList[0],
  height: 32,
  width: 32,
  hover: false,
};
