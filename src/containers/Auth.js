
import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'
import LoginForm from '../containers/LoginForm'

export default class Auth extends Component {
state = {
    loginess: false
}
    componentDidMount() {
        if (Cookies.get('passLogin')) {
            this.setState({ loginess : true})
        }
        else {
            this.setState({ loginess : false})
        }
    }

    render() {
        if (this.state.loginess) {
            return this.props.children
        }
        else {
            return <LoginForm />

        }
    }
}
