import React, {Component} from 'react';


import AuthenticationService from "../services/AuthenticationService";

export default class AuthenticationPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {username: '', password: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        switch (event.target.type) {
            case "text": this.setState({username: event.target.value});
            case "password": this.setState({password: event.target.value});
            default: break;
        }
    }

    handleSubmit(event) {
        AuthenticationService.login(this.state.username, this.state.password).then(r => console.log("ok"));
    }

    render() {
        return (<div className="container p-5 mt-5">
            <div className="authorization-box">
                <h1 className="welcome-text">Welcome to Online Cinema! 👋</h1>
                <p className="welcome-info">Enter your username & password to continue.</p>
                <div className="authorization-form">
                    <p font-weight="600" color="grey.5" className="tag">Username<span
                        className="tag">*</span></p>
                    <input type="text" placeholder="Your login" onChange={this.handleChange}/>
                    <p font-weight="600" color="grey.5" className="tag">Pasword<span
                        className="tag">*</span></p>
                    <input type="password" placeholder="Your password" onChange={this.handleChange}/>
                    <div className="button-orange" onClick={this.handleSubmit}>Log in</div>
                    <p className="info text-center">If you are a new user, sign up <a href="">here</a>.</p>
                </div>
            </div>
        </div>)
    }
}

