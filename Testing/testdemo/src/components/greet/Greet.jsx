import React from "react";
import "./Greet.css"

export function Greet( {name} ) {
    return (
        <>
        <h1 className="greet_title">{name ? `Hello ${name}` : `Guest`}</h1>
        </>
    )
}