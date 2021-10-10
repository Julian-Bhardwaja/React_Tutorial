import React from "react";

const Hello = ({ name, age, children }) => {
console.log("🚀 ~ file: Hello.js ~ line 4 ~ Hello ~ age", age)
console.log("🚀 ~ file: Hello.js ~ line 4 ~ Hello ~ name", name)
    return (
        <div>
            <h1>Hello {name} and she is {age} years old!</h1>
            <p>{children}</p>
        </div>
    )
}

export default Hello;