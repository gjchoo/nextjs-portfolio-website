import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FeaturedProducts } from "./featuredProducts";

export default {
  title: "Molecule/FeaturedProducts",
  component: FeaturedProducts,
  argTypes: {},
} as ComponentMeta<typeof FeaturedProducts>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturedProducts> = (args) => (
  <div className="absolute-all" style={{ backgroundColor: "black" }}>
    <FeaturedProducts />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
