import React, { Component } from "react";
import {withRouter} from "react-router-dom";

class Reservations extends Component {
    render() {
        return (
            <div className="reservations">
                <h1>Reservation Table</h1>
            </div>
        )
    }
}

export default withRouter(Reservations);