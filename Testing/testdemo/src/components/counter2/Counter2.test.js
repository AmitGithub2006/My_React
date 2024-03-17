import {render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import {Counter2} from "./Counter2";

describe("Counter2 Element", () => {
    test("renders correctly", () => {
        render(<Counter2 />)
        const countElement = screen.getByRole("heading", {name: /0/i });
        expect(countElement).toBeInTheDocument();
        const incrementBtn = screen.getByRole("button", { name: "click",
    });
    expect(incrementBtn).toBeInTheDocument();
    })

    test("renders 0 properly", () => {
        render(<Counter2 />);
        const countElement = screen.getByRole("heading", {name: /0/i });
        expect(countElement).toHaveTextContent("0");
    });

    test("render 1 after clicking 1 time", () => {
        
        render(<Counter2 />);
        const incrementBtn = screen.getByRole("button", {
            name: "click",
    });
    user.click(incrementBtn)
    // click, dblClick, hover
        const countElement = screen.getByRole("heading", {
            level: 1,
        });
        expect(countElement).toHaveTextContent("1");
    })

    test("render 1000 after clicking the setCount Btn", () => {
        render(<Counter2 />);
        const inputElement = screen.getByRole("spinbutton");
        user.type(inputElement, "10");
        expect(inputElement).toHaveValue(10);
        const setCountBtn = screen.getByRole("button", {
            name: "setCount",
        });
        user.click(setCountBtn);
        const countElement = screen.getByRole("heading", {
            level: 1,
        });
        expect(countElement).toHaveTextContent("10");
    });
})