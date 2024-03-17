import React from "react";
import { useState } from "react";
import Data from "./Data";
import List from "./List";
import "./Birthday.css";

function Birthday() {
    const [people, setPeople] = useState(Data)
    return (
        <>
        <h1>{people.length} Birthdays Today</h1>
        <div className="btn">

        <button onClick={() => setPeople([])}>Clear All</button>
        </div>
        <List people={people}/>
        </>
    )

}

export default Birthday;