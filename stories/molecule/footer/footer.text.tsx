import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders Footer html element", () => {
    render(<Footer />);

    const heading = screen.getByTestId("storybook-footer");

    expect(heading).toBeInTheDocument();
  });
});
