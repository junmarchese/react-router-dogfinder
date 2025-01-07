import React from "react";

function DogList({ dogs }) {
    return (
        <div>
            <h1>Meet Our Dogs!</h1>
            <ul>
                {dogs.map(dog => (
                    <li key={dog.name}>
                        <h2>{dog.name}</h2>
                        <p>Age: {dog.age}</p>
                        <img src={`/${dog.src}`} alt={dog.name} />
                        <ul>
                            {dog.facts.map((fact, index) => (
                                <li key={index}>{fact}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DogList;