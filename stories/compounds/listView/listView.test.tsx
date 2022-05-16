import { render, screen } from "@testing-library/react";
import { ListView } from "./listView";

describe("ListView", () => {
  it("renders ListView html element", () => {
    render(<ListView />);

    const heading = screen.getByTestId("storybook-list-view");

    expect(heading).toBeInTheDocument();
  });
});
