import React, { Component } from "react";
import {withRouter} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import Payment from "./payment";

 function ReservationTable(props) {
     console.log(props.tables);
    let tables = props.tables.map((table) => {
        return<tr key={table.id}>
            <td>{table.tableNumber}</td>
            <td>{table.time}</td>
            <Button variant="outline-primary" type='submit' onClick={Payment}>Reserve</Button>
        </tr>

    })
    return (
        <React.Fragment>
            <h7>Reserving will redirect you to payment</h7>
            <Table striped bordered>
                <thead>
                <tr>
                    <th>Table Number</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                {tables}
                </tbody>
            </Table>
        </React.Fragment>
    )
}
export default withRouter(ReservationTable);