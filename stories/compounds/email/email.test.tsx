import { render, screen } from "@testing-library/react";
import { Email } from "./email";

describe("Email", () => {
  it("renders Email html element", () => {
    render(<Email />);

    const heading = screen.getByTestId("storybook-email");

    expect(heading).toBeInTheDocument();
  });
});
