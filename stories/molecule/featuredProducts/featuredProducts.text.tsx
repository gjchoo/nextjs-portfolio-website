import { render, screen } from "@testing-library/react";
import { FeaturedProducts } from "./featuredProducts";

describe("FeaturedProducts", () => {
  it("renders FeaturedProducts html element", () => {
    render(<FeaturedProducts />);

    const heading = screen.getByTestId("storybook-feature-products");

    expect(heading).toBeInTheDocument();
  });
});
