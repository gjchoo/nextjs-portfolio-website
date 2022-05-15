import { render, screen } from "@testing-library/react";
import { Introduction } from "./introduction";

describe("Introduction", () => {
  it("renders Introduction html element", () => {
    render(<Introduction />);

    const heading = screen.getByTestId("storybook-introduction");

    expect(heading).toBeInTheDocument();
  });
});
