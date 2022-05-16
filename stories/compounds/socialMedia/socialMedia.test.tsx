import { render, screen } from "@testing-library/react";
import { SocialMedia } from "./socialMedia";

describe("Social Media", () => {
  it("renders Social Media html element", () => {
    render(<SocialMedia />);

    const heading = screen.getByTestId("storybook-social-media");

    expect(heading).toBeInTheDocument();
  });
});
