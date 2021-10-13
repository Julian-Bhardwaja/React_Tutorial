import React from 'react'

function Person({ person }) {
    return (
        <div>
            <h2>I am {person.name}.</h2>
            <p>I am {person.age} years old.</p>
            <p>My professional {person.skill}</p>
        </div>
    )
}

export default Person
