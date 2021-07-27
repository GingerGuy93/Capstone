import React, { Component } from "react";
import {Table} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="welcome">
                    <h1>Welcome!</h1>
                </div>
            </div>
        )
    }
}

export default withRouter(HomePage);