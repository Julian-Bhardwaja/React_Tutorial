import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
             message: 'Hello Julian!',
        }
    }

    changeMessage = () => {
        this.setState({
            message: 'Goodbye Julian!'
        })
        console.log('click')
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>Click</button>
            </div>
        )
    }
}

export default EventBind
