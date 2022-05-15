import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Experience } from "./experience";

export default {
  title: "Molecule/Experience",
  component: Experience,
  argTypes: {},
} as ComponentMeta<typeof Experience>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Experience> = (args) => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <Experience />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
