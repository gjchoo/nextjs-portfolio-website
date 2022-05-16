import { render, screen } from "@testing-library/react";
import { Navigation } from "./navigation";

describe("Navigation", () => {
  it("renders a Navigation html element", () => {
    render(<Navigation />);

    const heading = screen.getByTestId("storybook-navigation");

    expect(heading).toBeInTheDocument();
  });
});
