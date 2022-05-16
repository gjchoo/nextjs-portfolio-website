import { render, screen } from "@testing-library/react";
import { Text, SizeTypes, WeightTypes } from "./text";

describe("Text", () => {
  it("renders a p html element", () => {
    render(
      <Text
        text="dummy text"
        size={SizeTypes.fs24}
        weight={WeightTypes.regular}
      />
    );

    const heading = screen.getByTestId("storybook-p");

    expect(heading).toBeInTheDocument();
  });
});
