import {render, screen} from "@testing-library/react"
import {Counter} from "./Counter";

describe("Counter Component", () => {
    test("renders input correctly", () => {
        render(<Counter />);

        //getByRole
        const compHeading = screen.getByRole("heading", {
            level: 2,
            name: "Air campus", // text inside the heading component
        })
        expect(compHeading).toBeInTheDocument();

        const testingHeadingElement = screen.getByRole("heading", {
            level: 3,
        })
        expect(testingHeadingElement).toBeInTheDocument();

        const nameElement = screen.getByRole("textbox", {name: "Name",
    });
        expect(nameElement).toBeInTheDocument();

        const ageElement = screen.getByRole("textbox", {name: "age"});
        expect(ageElement).toBeInTheDocument();

        const locationElement = screen.getByRole("combobox"); // don't write like this(i.e in a single test case)
        expect(locationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox")
        expect(termsElement).toBeInTheDocument();

        const submitBtnElement = screen.getByRole("button")
        expect(submitBtnElement).toBeInTheDocument();

        //getByLabelText
        const nameElement2 = screen.getByLabelText("Name", {
            selector: "input",
        });
        expect(nameElement2).toBeInTheDocument();

        const locationElement2 = screen.getByLabelText(/location/i);
        expect(locationElement2).toBeInTheDocument();

        //getByPlaceholderText
        const nameElement3 = screen.getByPlaceholderText("firstName")
        expect(nameElement3).toBeInTheDocument();

        //getByText --> p, span, div
        const paraElement = screen.getByText("good night, thank you")
        expect(paraElement).toBeInTheDocument();

        //getByDisplayValue
        const valueElement = screen.getByDisplayValue("vasanth")
        expect(valueElement).toBeInTheDocument();

        //getByAltText
        const imageElement = screen.getByAltText("picture")
        expect(imageElement).toBeInTheDocument();

        //getByTitle
        const titleElement = screen.getByTitle("vasanth");
        expect(titleElement).toBeInTheDocument();

        //custom --> test-id
        const customElement = screen.getByTestId("custom");
        expect(customElement).toBeInTheDocument();
    })
})