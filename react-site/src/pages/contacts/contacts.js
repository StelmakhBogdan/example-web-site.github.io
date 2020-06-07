import React from 'react';
import {
    Container,
    Form,
    Button
} from "react-bootstrap";

const Contacts =() => {
    return (
        <div className="jumbotron">
            <Container style={{width: '500px'}}>
                <h1 className="text-center"> Contact Us </h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Please write your message!</Form.Label>
                    <Form.Control as="textarea" placeholder="text" rows="3"/>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                </Form>
            </Container>
        </div>
    )
};

export default Contacts;