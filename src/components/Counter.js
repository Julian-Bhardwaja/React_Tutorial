import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }

    increaseCount() {
        // this.setState({
        //     count: this.state.count + 1,
        // }, () => {
        //     console.log('Callback value is ', this.state.count)
        // })
        this.setState((previousState, props)=> ({
            count: previousState.count + 1
        }),  () => {
        console.log(this.state.count);

        })
    }

    decreaseCount() {
        this.setState({
            count: this.state.count - 1,
        }, () => {
            console.log('Callback value is ', this.state.count)
        })
    }

    incrementFive() {
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
        this.increaseCount();
    }
    
    render() {
        return (
            <div>
                <h1>Count - {this.state.count} </h1>
                <button onClick={() => this.increaseCount()}>Increment</button>
                <button onClick={() => this.incrementFive()}>Increment 5 times</button>
                <button onClick={() => this.decreaseCount()}>Decrement</button>
            </div>
        )
    }
}

export default Counter
