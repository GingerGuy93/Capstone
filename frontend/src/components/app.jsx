import React, { Component } from "react";
import NavbarHome from "./navbar";

class App extends Component {
    state = {};
    render () {
        return (
            <React.Fragment>
                <h1>Strokers Pool Hall</h1>
                <div className="navbar">
                    <NavbarHome />
                </div>
            </React.Fragment>
        );
    }
}

export default App;