import React, { Component } from "react";

import '../styles/App.scss';
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Content from "./Content/Content";

class App extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Navigation/>
                    <Header/>
                </div>
                <div className="main-content">
                    <Aside/>
                    <Content/>
                </div>
            </div>

        );
    }
}

export default App;