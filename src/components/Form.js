import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: '',
             comments: '',
             topic: 'React'
        }
    }

    handleInputChange = (event) => {
        this.setState({
            message: event.target.value,
        })
    }

    handleTextAreaChange = (event) => {
        this.setState({
            comments: event.target.value,
        })
    }

    handleSelectChange = (event) => {
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmitForm = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault();
    }
    
    render() {
        const { message, comments, topic } = this.state;
        return (
            <form onSubmit={this.handleSubmitForm}>
                <div>
                    <label>Username</label>
                    <input type="text" value={message} onChange={this.handleInputChange} />
                </div>
                <div>
                    <label>TextArea</label>
                    <textarea name="textarea" value={comments} onChange={this.handleTextAreaChange}></textarea>
                </div>
                <div>
                    <label>Select Topic:</label>
                    <select name="topic" value={topic} onChange={this.handleSelectChange}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form
