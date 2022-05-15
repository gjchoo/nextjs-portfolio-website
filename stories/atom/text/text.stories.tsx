import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text, WeightTypes, SizeTypes } from "./text";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Text",
  component: Text,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    weight: {
      options: [0, 1, 2, 3], // iterator
      mapping: ["light", "regular", "medium", "semibold"], // values
      control: {
        type: "select",
        labels: ["light", "regular", "medium", "semibold"],
      },
    },
    size: {
      options: [0, 1, 2, 3, 4], // iterator
      mapping: ["fs14", "fs18", "fs24", "fs48", "fs60"], // values
      control: {
        type: "select",
        labels: ["fs14", "fs18", "fs24", "fs48", "fs60"],
      },
    },
    color: {
      options: [0, 1], // iterator
      mapping: ["primary", "secondary"], // values
      control: {
        type: "select",
        labels: ["primary", "secondary"],
      },
    },
  },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <div
    className="absolute-all"
    style={{ backgroundColor: "black", padding: 10 }}
  >
    <Text {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "This is a sample of a paragraph text",
  weight: WeightTypes.light,
  size: SizeTypes.fs18,
  lineHeight: 29,
  color: "secondary",
};
