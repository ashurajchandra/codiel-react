import React, { Component } from 'react';

class SignUp extends Component {

    render() {
        return (
            <form className="login-form">
            <span className="login-signup-header">Sign Up</span>
            <div className="field">
            <input type= "username" placeholder="Username" required />
            </div>
            <div className="field">
            <input type= "email" placeholder="abc@gmail.com" required />
            </div>
            <div className="field">
            <input type= "password" placeholder="Password" required />
            </div>
            <div className="field">
            <input type= "confirm password" placeholder="re-enter password" required />
            </div>
            <div className="field">
                <button >Sign Up</button>
            </div>

           </form>
        );
    }
}

export default SignUp;