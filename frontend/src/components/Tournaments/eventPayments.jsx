import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

function EventPayment(){
    return (
        <Modal>
            <Modal.Title>Payment</Modal.Title>
            <Modal.Body>{window.location.assign('https://buy.stripe.com/test_aEU02J73m4Tk9oYaEF')}</Modal.Body>
            <Modal.Footer>
                <Button variant="danger" className="danger">Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
export default EventPayment;