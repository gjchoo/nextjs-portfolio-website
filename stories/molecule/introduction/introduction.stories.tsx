import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Introduction } from "./introduction";

export default {
  title: "Molecule/Introduction",
  component: Introduction,
  argTypes: {},
} as ComponentMeta<typeof Introduction>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Introduction> = (args) => (
  <div className="background-color">
    <Introduction />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
