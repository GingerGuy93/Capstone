import React, { Component } from "react";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {withRouter} from "react-router-dom";
import ContactForm from "./contactForm";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header">
                    <h1>Contact & Event Request</h1>
                </div>
                <div className="description">
                    <h3>If you have any question or concerns with Stroker's please do not hesitate to send us a message</h3>
                    <h3>For event requests please give a detailed description of the event, the date and time and how many people
                    you are expecting.
                    </h3>
                    <h3>Management will get back to you in a timely manner.</h3>
                </div>
                <ContactForm />
            </React.Fragment>
        )
    }
}

export default withRouter(Contact);