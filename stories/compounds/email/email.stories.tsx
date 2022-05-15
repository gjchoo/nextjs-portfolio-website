import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Email } from "./email";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Compounds/Email",
  component: Email,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Email>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Email> = (args) => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <Email />
  </div>
);

export const Vertical = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Vertical.args = {};
