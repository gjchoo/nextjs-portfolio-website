import { render, screen } from "@testing-library/react";
import { Nav } from "./nav";

describe("Nav", () => {
  it("renders a Nav html element", () => {
    render(<Nav />);

    const heading = screen.getByTestId("storybook-nav");

    expect(heading).toBeInTheDocument();
  });
});
