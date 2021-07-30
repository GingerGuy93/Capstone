import React, { Component } from "react";
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
                    <h3>If you have any question or concerns with Stroker's Bar & Billiards please do not hesitate to send us a message</h3>
                </div>
                <ContactForm />
            </React.Fragment>
        )
    }
}

export default withRouter(Contact);