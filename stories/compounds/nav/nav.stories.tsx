import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Nav } from "./nav";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Compounds/Nav",
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Nav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Nav> = (args) => (
  <div style={{ backgroundColor: "black" }}>
    <Nav {...args} />
  </div>
);

export const NavBar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NavBar.args = {};
