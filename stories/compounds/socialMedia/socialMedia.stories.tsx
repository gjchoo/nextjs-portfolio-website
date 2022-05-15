import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SocialMedia } from "./socialMedia";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Compounds/Social Media",
  component: SocialMedia,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SocialMedia>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SocialMedia> = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <SocialMedia {...args} />
  </div>
);

export const Horizontal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Horizontal.args = {};

export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical.args = {
  orientation: "vertical",
};
