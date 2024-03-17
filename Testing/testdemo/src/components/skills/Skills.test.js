import { screen, render } from "@testing-library/react"

import { Skills } from "./Skills";

describe.only("Skills component", () => {
    const skills = ["HTML", "CSS", "JavaScript"];

    test("renders all skills", () => {
        render(<Skills skills={skills}/>);
        const listElements = screen.getAllByRole("listitem");
        expect(listElements).toHaveLength(skills.length);
    });

    test("renders login button", () => {
        render(<Skills skills={skills}/>)
        const loginButton = screen.getByRole("button", {
            name: "Log in",
        })
        expect(loginButton).toBeInTheDocument();
    });

    //getByRole checks all the elements present in HTML.

    test("not render start learning button", () => {
        render(<Skills skills={skills}/>)
        const startLearningBtn = screen.queryByRole("button", {
            name: "Start Learning",
        });
        expect(startLearningBtn).not.toBeInTheDocument();
    })
    // queryByRole checks all the elements present in UI.

    test("start learning should display after some delay", async () => {
        render(<Skills skills={skills}/>);
        const startLearningBtn = await screen.findByRole("button", {
            name: "Start Learning",
        }, {
            timeout: 2000,
        });
        // default time is 1 second.
        expect(startLearningBtn).toBeInTheDocument();
    })
    //Whenever dealing with setTimeout, promises, asynchronous calls, we should use findByRole.
})