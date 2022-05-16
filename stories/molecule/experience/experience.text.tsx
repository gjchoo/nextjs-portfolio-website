import { render, screen } from "@testing-library/react";
import { Experience } from "./experience";

describe("Experience", () => {
  it("renders Experience html element", () => {
    render(<Experience />);

    const heading = screen.getByTestId("storybook-experience");

    expect(heading).toBeInTheDocument();
  });
});
