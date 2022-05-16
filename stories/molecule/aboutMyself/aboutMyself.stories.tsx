import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { AboutMyself } from "./aboutMyself";

export default {
  title: "Molecule/AboutMyself",
  component: AboutMyself,
  argTypes: {},
} as ComponentMeta<typeof AboutMyself>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AboutMyself> = (args) => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <AboutMyself />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
