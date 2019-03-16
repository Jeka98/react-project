import React from 'react';
import './Navigation.scss';

class Navigation extends React.Component{
    render() {
        return (
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>News</li>
                    <li>Projects</li>
                    <li>About us</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;
