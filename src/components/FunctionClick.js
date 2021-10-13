import React from 'react';

const FunctionClick = () => {
    const handleClick = () => {
        console.log('Clicked!');
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default FunctionClick
