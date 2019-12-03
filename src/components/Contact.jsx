import React from 'react';
import './Contact.css';
import { InputGroup, Button, FormControl } from 'react-bootstrap';

function Contact() {
    return (
        <div className="Contact">
            <h1>Stay In Touch  with Our Updates</h1>
            <div id="line"></div>
            <div className="input">
                <InputGroup className="mb-3">
                    <FormControl
                        className="form"
                        placeholder="Enter Your Email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        style={{ height: '3.5em' }}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary" className="formbtn">Button</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
            <input type="checkbox" /> I have read and agree to the terms and conditions
        </div>
    );
}
export default Contact;