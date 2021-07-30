import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import EventForm from "./eventForm";

class Tournaments extends Component {
    render() {
        return (
            <React.Fragment>
                <br/>
                <div className="tournament">
                <h1>Strokers Weekly Tournament</h1>
                    <br/>
                    <h3>Bud Tour Amateur 9 Ball</h3>
                    <br/>
                    <h3>Organized by: Northeast Am Billiards Series</h3>
                    <br/>
                    <h5>Every Thursday @ 6PM</h5>
                    <br/>
                    <h5>Entry Fee: $10</h5>
                </div>
                <div className="eventForm">
                    <h4>If you would like to have an event held at Strokers. Please Fill out the form below and make a $20 deposit</h4>
                    <h4>Management will get back to you with any questions or concerns</h4>
                    <EventForm />
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Tournaments);