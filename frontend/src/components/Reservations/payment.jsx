import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

function Payment(props){
        return (
            <Modal>
                <Modal.Title>Payment</Modal.Title>
                <Modal.Body>{window.location.assign('https://buy.stripe.com/test_6oE02J5Zi71s58IbII')}</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" className="danger">Close</Button>
                </Modal.Footer>
            </Modal>
        )
}
export default Payment;