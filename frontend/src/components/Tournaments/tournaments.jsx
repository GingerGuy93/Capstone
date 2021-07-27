import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Tournaments extends Component {
    render() {
        return (
            <React.Fragment>
                <br/>
                <div className="tournament">
                <h1>Strokers Weekly Tournament</h1>
                    <br/>
                    <h3>Budtour Amateur 9 Ball</h3>
                    <br/>
                    <h3>Organized by: Northeast Am Billiards Series</h3>
                    <br/>
                    <h5>Every Thursday @ 6PM</h5>
                    <br/>
                    <h5>Entry Fee: $10</h5>
                </div>
            </React.Fragment>
        )
    }
}

export default withRouter(Tournaments);