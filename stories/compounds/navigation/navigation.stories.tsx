import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navigation } from "./navigation";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Compounds/Navigation",
  component: Navigation,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Navigation>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navigation> = () => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <Navigation />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
