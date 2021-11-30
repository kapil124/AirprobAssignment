import React, { Component } from "react";

export default class Login extends Component {

    state={
        email:'',
        password:''
    }

    handleChange = (e) =>{
        const {name,value} = e.target
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" placeholder="Enter email"  onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" placeholder="Enter password"  onChange={this.handleChange} />
                </div>


                <button type="submit" onSubmit={this.handleSubmit} className="btn btn-primary btn-block">Login</button>
                
            </form>
        );
    }
}