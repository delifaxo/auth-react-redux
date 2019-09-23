import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'

export default class LoginForm extends Component {
    login = (e) => {
        e.preventDefault();

        Cookies.set('nameLogin', e.target.name.value);
        Cookies.set('passLogin', e.target.pass.value);
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input name="name"></input>
                <input name="pass"></input>
                <button >login</button>
            </form>
        )
    }
}
