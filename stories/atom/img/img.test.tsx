import { render, screen } from "@testing-library/react";
import { Img } from "./img";
import StackAlt from "../../assets/stackalt.svg";

describe("Img", () => {
  it("renders a Img html element", () => {
    render(
      <Img
        alt="this is a dummy img"
        src={StackAlt}
        width={24}
        height={24}
        hover={false}
      />
    );

    const heading = screen.getByTestId("storybook-img");

    expect(heading).toBeInTheDocument();
  });
});
