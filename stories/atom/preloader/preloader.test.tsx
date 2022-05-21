import { render, screen } from "@testing-library/react";
import PreLoader from "./preloader";

describe("Preloader", () => {
  it("renders Preloader element", () => {
    render(<PreLoader />);

    const element = screen.getByTestId("storybook-preloader");

    expect(element).toBeInTheDocument();
  });
});
