import { Counter3 } from "./Counter3"
import { render, screen} from "@testing-library/react";

describe("Counter 3", () => {
    test("renders properly", () => {
        render(<Counter3 count={10} />)
        const countElement = screen.getByRole("heading", {
            level: 2,
        });
        expect(countElement).toHaveTextContent("10");

        const headingElement = screen.getByText("counter - 3");
        expect(headingElement).toBeInTheDocument();
    })

    test("renders properly with handlers", () => {
        const handleIncrement = jest.fn();
        const handleDecrement = jest.fn();

        render(
            <Counter3
            count={0}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            />
        )
        const increment = screen.getByRole("button", {
            name: "increment",
        })
        const decrement = screen.getByRole("button", {
            name: "decrement",
        })
        user.dblClick(incrementBtn);
        user.click(decrementBtn);

        expect(handleIncrement).toHaveBeenCalledTimes(2)
        expect(handleDecrement).toHaveBeenCalledTimes(1)
    })
})