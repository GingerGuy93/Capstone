import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import EventForm from "./eventForm";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import "./event.css";

class Tournaments extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="events">
                <br/>
                <Row>
                    <Col>
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
                    </Col>
                <Col>
                <div className="eventForm">
                    <h4>If you would like to have an event held at Stroker's. Please Fill out the form below and make a $20 deposit</h4>
                    <h4>Management will get back to you with any questions or concerns.</h4>
                    <h4>Reserving Will Bring you to our payment page.</h4>
                    <EventForm />
                </div>
                </Col>
                </Row>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Tournaments);