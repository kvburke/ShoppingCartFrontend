import React from 'react';
import {Component} from 'react';
import axios from 'axios';

class Login extends Component{
    constructor(props) {
        super(props)
        this.state = {

            username: '',
            password: ''

        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submit= this.submit.bind(this);
    }


    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        });
    }

    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }

    submit(){
        var username= this.state.username;
        var password= this.state.password

        let data = JSON.stringify({
            username: username,
            password: password

        })

        axios.post('url', data, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        )
    }


    render(){
    return(<div>
        <p>User Name :</p>
        <input value={this.state.username} onChange={evt => this.updateUsername(evt)}/>
        <p>Password :</p>
        <input value={this.state.password} onChange={evt => this.updatePassword(evt)}/>
        <button onClick={this.submit}>Login</button>
    </div>)
    }

}

export default Login;