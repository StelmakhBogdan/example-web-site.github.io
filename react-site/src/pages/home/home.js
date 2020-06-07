import React from 'react';
import CarouselBox from '../../components/carousel-box';
import './index.css';
import picture1 from '../../assets/team-1.jpg';
import picture2 from '../../assets/safari.jpg';
import picture3 from '../../assets/team-2.jpg';
import {
    CardDeck,
    Container,
    Card,
    CardImg,
    Button
} from 'react-bootstrap';

const Home = () => {
    return (
        <div className="jumbotron-fluid">
            <CarouselBox/>
            <Container>
                <h2 className="text-center m-4">Our Team</h2>
                <CardDeck>
                    <Card>
                        <CardImg
                            variant="top"
                            src={picture1}
                        />
                        <Card.Body>
                            <Card.Title>Developers</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
                                A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
                            </Card.Text>
                            <Button variant="primary">About Team</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardImg
                            variant="top"
                            src={picture2}
                        />
                        <Card.Body>
                            <Card.Title>Travels</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
                                A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
                            </Card.Text>
                            <Button variant="primary">Join to us!</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardImg
                            variant="top"
                            src={picture3}
                        />
                        <Card.Body>
                            <Card.Title>Supporting Team</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Doloremque facilis hic laudantium nesciunt numquam qui reprehenderit sint, vero!
                                A, assumenda harum! Aut debitis dolores esse hic ipsa laboriosam sint, tempore.
                            </Card.Text>
                            <Button variant="primary">About</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
};

export default Home;