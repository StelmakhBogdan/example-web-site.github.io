import React from 'react';
import {Col, Container, Row, Media, ListGroup, ListGroupItem} from "react-bootstrap";
import Card from "react-bootstrap/Card";


const Blog = () => {
    return (
        <div className="jumbotron">
            <Container>
                <Row>
                    <Col md="9">
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.auth0.com/blog/es6rundown/logo.png"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci amet atque dolorem doloremque iure minus
                                    sed sint tempora tempore ullam vel voluptas, voluptates?
                                    Asperiores dolorum fugit magni natus repellendus.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.auth0.com/blog/es6rundown/logo.png"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci amet atque dolorem doloremque iure minus
                                    sed sint tempora tempore ullam vel voluptas, voluptates?
                                    Asperiores dolorum fugit magni natus repellendus.
                                </p>
                            </Media.Body>
                        </Media>
                        <Media className="m-5">
                            <img
                                width={150}
                                height={150}
                                className="mr-3"
                                src="https://cdn.auth0.com/blog/es6rundown/logo.png"
                            />
                            <Media.Body>
                                <h5>Blog Post</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Accusantium adipisci amet atque dolorem doloremque iure minus
                                    sed sint tempora tempore ullam vel voluptas, voluptates?
                                    Asperiores dolorum fugit magni natus repellendus.
                                </p>
                            </Media.Body>
                        </Media>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-5">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroupItem>
                                    html/css
                                </ListGroupItem>
                                <ListGroupItem>
                                    Java Script
                                </ListGroupItem>
                                <ListGroupItem>
                                    React
                                </ListGroupItem>
                            </ListGroup>
                        </Card>
                        <Card className="mt-3 bg-light">
                            <Card.Body>
                                <Card.Title>Side widget</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Asperiores assumenda dignissimos dolorum eligendi error in inventore laboriosam maiores minus
                                    neque nihil officia optio qui rem reprehenderit, similique totam velit veritatis!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Blog;