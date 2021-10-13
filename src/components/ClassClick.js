import React, { Component } from 'react';

class ClassClick extends Component {
    handleClick = () => {
        console.log('Class Click');
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default ClassClick
