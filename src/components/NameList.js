import Person from './Person';
import React from 'react'

function NameList() {
    const names = ['Julian', 'James', 'Zaw Thet'];
    const persons = [
        {
            id: 1,
            name: 'Bruce Lee',
            age: 30,
            skill: 'React',
        },
        {
            id: 2,
            name: 'Mary Brown',
            age: 25,
            skill: 'Chicken Owner',
        },
        {
            id: 3,
            name: 'Aung Phyo',
            age: 33,
            skill: 'Project Manager',
        },
    ]
    const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => (
        <Person person={person} />
    ))
    return (
        <div>
            {/* {names.map(name => (
                <h1>{name}</h1>
            ))} */}
            {nameList}
            {personList}
        </div>
    )
}

export default NameList
