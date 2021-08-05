import React, {Component, useState} from "react";
import {withRouter} from "react-router-dom";
import {Button, Table} from "react-bootstrap";
import Payment from "./payment";
import axios from "axios";
import { Redirect } from "react-router";

 function ReservationTable(props) {
     const [redirect, setRedirect] = useState(false)

     console.log(props.tables);
    let deleteTable = async (tableId) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/allTables/${tableId}/`);
            window.location.reload()
            setRedirect(true);
        }
        catch(err){
            alert(err);
        }
    }

    let tables = props.tables.map((table) => {
        return<tr key={table.id}>
            <td>{table.tableNumber}</td>
            <td>{table.time}</td>
            <Button variant="outline-primary" type='submit' onClick={() => {deleteTable(table.id); Payment();}}>Reserve</Button>
        </tr>

    })
    return (
        <React.Fragment>
            {!redirect ?
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
            :
            <Redirect to='payment' />}
        </React.Fragment>
    )
}

export default withRouter(ReservationTable);