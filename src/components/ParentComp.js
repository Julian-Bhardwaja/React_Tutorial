import React, { Component } from 'react'

import PureComp from './PureComp'
import RegularComp from './RegularComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Julian'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Ethan'
            })
        }, 2000)
    }
    
    render() {
        console.log("Parent Component Render");
        return (
            <div>
                Parent Component
                <RegularComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComp
