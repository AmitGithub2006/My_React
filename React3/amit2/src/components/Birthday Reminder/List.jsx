import React from "react";
import "./Birthday.css"

function List({people}) {

    return (
        <div className="cont">
        {people.map((person) => {
            const {id,name,age,image} = person;
            return (
                <main key={id}>
                    <img src={image} alt={name} />
                    <h3>{name}</h3>
                    <h4>{age} yrs old</h4>
                </main>
            )
        })}
        </div>
    )
}

export default List;