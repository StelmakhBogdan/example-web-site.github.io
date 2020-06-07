import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './header.css';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    FormControl,
    Form, Button
} from "react-bootstrap";
import logo from './logo192.png';
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Home from '../../pages/home';
import About from '../../pages/about';
import Contacts from '../../pages/contacts';
import Blog from '../../pages/blog';

export default class Header extends Component {
    render() {
        return (
            <Fragment>
                <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <NavbarBrand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </NavbarBrand>
                        <NavbarToggle aria-controls="responsive-navbar-nav"/>
                        <NavbarCollapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <NavLink href="/"> Home </NavLink>
                                <NavLink href="/blog"> Blog </NavLink>
                                <NavLink href="/contacts"> Contacts </NavLink>
                                <NavLink href="/about"> About us </NavLink>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info"> Search </Button>
                            </Form>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/blog" component={Blog} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </Router>
            </Fragment>
        );
    };
};

