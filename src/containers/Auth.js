
import { Route, Redirect } from 'react-router-dom';
import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'
import LoginForm from '../containers/LoginForm'
import { connect } from 'react-redux';
import { login } from '../action/auth'


class Auth extends Component {
    state = {
        loginess: false
    }

    componentDidMount() {
        if (Cookies.get('passLogin')) {
            this.setState({ loginess: true });
            this.props.login();
        }
        else {
            this.setState({ loginess: false })
        }
    }

    render() {
        if (this.state.loginess && this.props.auth) {
            return this.props.children
        }
        else {
            return <LoginForm />

        }
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
})
const mapDispatchToProps = {
    login
}
export default connect(mapStateToProps , mapDispatchToProps)(Auth)