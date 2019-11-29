import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'
import { exitAccount } from '../action/auth'
import { connect } from 'react-redux';

class Private extends Component {
    exit = () => {
        Cookies.remove('passLogin');
        this.props.exitAccount();
    }

    render() {
        return (
            <div>
                <button onClick={this.exit}>exit</button>
            </div>
        )
    }
}
const mapDispatchToProps = {
    exitAccount
}

export default connect(null, mapDispatchToProps)(Private)
