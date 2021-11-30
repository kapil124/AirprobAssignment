import React, { Component } from 'react';

export default class Signup extends Component {

    userData;

    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangepassword = this.onChangepassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    // Form Events
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangepassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        this.setState({
            name: '',
            email: '',
            password: ''
        })
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                name: '',
                email: '',
                password: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }


    render() {
        return (
            <div className="container">

                <form onSubmit={this.onSubmit}>
                <h3>Signup</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="name" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Password"  value={this.state.password} onChange={this.onChangepassword} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Signup</button>
                </form>
            </div>
        )
    }
}