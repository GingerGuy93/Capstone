import React, { Component } from 'react';
import {Form, Button} from "react-bootstrap";
import{ init } from 'emailjs-com';
init("user_mL7VNNI2xisa4IlaFEnSk");

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: '',
            name: '',
            email: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: [event.target.value]})
    }

    handleSubmit (event) {
        const templateId = 'template_kry9tmp';

        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }

    sendFeedback (templateId, variables) {;
        window.emailjs.send(
            'service_lc0nazp', templateId, variables,
            'user_mL7VNNI2xisa4IlaFEnSk'
        ).then(res => {
            console.log('Email successfully sent!')
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }


    render() {
        return (
            <Form className="test-mailing">
                <Form.Group className="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleChange} value={this.state.name} required/>
                </Form.Group>
                <Form.Group className="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" onChange={this.handleChange} value={this.state.email} required/>
                </Form.Group>
                <Form.Group className="feedback">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="text"  name="feedback" onChange={this.handleChange} value={this.state.feedback} required style={{width: '40%', height: '150px'}}/>
                </Form.Group>
                <div>


                </div>
                <input type="button" value="Submit" className="btn btn--submit" onClick={this.handleSubmit}/>
            </Form>
        )
    }
}