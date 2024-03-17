import {Greet} from "./Greet"
import {render, screen} from "@testing-library/react"

// describe is used to combine multiple test cases of a single file.
// We can create multiple describe groups.
// We also can put a describe group inside another describe group.

describe("Greet", () => {
    test("renders properly", () => {
      render(<Greet />);
      const text = screen.getByText(/guest/i);
      expect(text).toBeInTheDocument();
    });
})

describe("Greet with name", () => {
  test("renders properly with name", () => {
    render(<Greet name={"AirCampus"} />);
    const text = screen.getByText("Hello AirCampus");
    expect(text).toBeInTheDocument();
  });
});