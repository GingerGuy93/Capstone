import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import ContactForm from "./contactForm";

class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="header"></div>
                    <h1>Contact & Event Request</h1>

                <div className="description">
                    <h4>If you have any question or concerns with Stroker's Bar & Billiards, please do not hesitate to send us a message!</h4>
                </div>
                <ContactForm />
            </React.Fragment>
        )
    }
}

export default withRouter(Contact);