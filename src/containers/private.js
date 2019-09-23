import React, { Component } from 'react'
import Cookies from '../../node_modules/js-cookie'

export default class Private extends Component {
    exit = () => {
        Cookies.remove('passLogin');
    }
   
    render() {
        return (
            <div>
                <button onClick={this.exit}>exit</button>
            </div>
        )
    }
}
