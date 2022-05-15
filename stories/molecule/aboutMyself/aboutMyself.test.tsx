import { render, screen } from "@testing-library/react";
import { AboutMyself } from "./aboutMyself";

describe("AboutMyself", () => {
  it("renders AboutMyself html element", () => {
    render(<AboutMyself />);

    const heading = screen.getByTestId("storybook-about-myself");

    expect(heading).toBeInTheDocument();
  });
});
