import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("App", () => {
  test("renders ", () => {
    render(<Home />);
    expect(screen.getByText("...any")).toBeInTheDocument();

  });
});