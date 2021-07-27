import React, { Component } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Contact extends Component {
    render() {
        return (
            <div className="header">
                <h1>Contact & Event Request</h1>
            </div>
        )
    }
}

export default withRouter(Contact);