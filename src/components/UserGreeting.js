import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLogIn: false,
        }
    }
    
    render() {
        // ELEMENT VARIABLE
        // let message;
        // if (this.state.isLogIn) {
        //     message = <div>Welcome Julian</div>
        // } else {
        //     message = <h1>Welcome Guest</h1>
        // }
        return (
            <div>
                {/* TENARY CONDITONAL */}
                {/* {this.state.isLogIn ? <div>Welcome Julian</div> : <div>Welcome Guest</div>}  */}
                {/* SHORT CIRCUIT */}
                {this.state.isLogIn && <div>Welcome Julian</div>}
                {!this.state.isLogIn && <div>Welcome Guest</div>}
            </div>
        )
    }
}

export default UserGreeting
