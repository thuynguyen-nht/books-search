import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap'

export default class NavigationBar extends Component {

    render() {
        return (

            <Navbar expand="lg" className="navbar-container">
                <Navbar.Brand href="/">Google Books Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Toys</Nav.Link>
                        <Nav.Link href="/bookshelf">Saved</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        )
    }
}