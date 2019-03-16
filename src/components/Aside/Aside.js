import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
    render() {
        return (
            <div className="aside">
                <ul>
                    <li>Text 1</li>
                    <li>Text 2</li>
                    <li>Text 3</li>
                </ul>
            </div>
        );
    }
}

export default Aside;