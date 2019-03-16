import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Hello World</h1>
                <button>Learn more</button>
            </div>
        );
    }
}

export default Header;