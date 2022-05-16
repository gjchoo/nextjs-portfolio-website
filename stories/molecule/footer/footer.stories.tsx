import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Footer } from "./footer";

export default {
  title: "Molecule/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Footer> = (args) => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <Footer />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
