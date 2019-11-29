import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'
import { login } from '../action/auth'
import { connect } from 'react-redux';

class LoginForm extends Component {
    login = (e) => {
        e.preventDefault();
        
        Cookies.set('nameLogin', e.target.name.value);
        Cookies.set('passLogin', e.target.pass.value);
        this.props.login();
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <div>
                <input name="name"></input>
                можно не заполнять ;)
                </div>
                <div>
                <input name="pass"></input>
                test => 
                </div>
                <button >login</button>
            </form>
        )
    }
}


const mapDispatchToProps = {
    login
}

export default connect(null, mapDispatchToProps)(LoginForm)
