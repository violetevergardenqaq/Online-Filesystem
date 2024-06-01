import React, { useState,useContext, useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

import fileimg from "../img/fileIcon.jpeg";
import LoginStatusContext from "../context/LoginStatusContext";

function BadgerLayout(props) {

    const [loginStatus,setLoginStatus]=useState(false);//temporary var hard coded

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            alt="FileSystem Logo"
                            src={fileimg}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Online-File-System
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {loginStatus.iflog ? (
                            <Nav.Link onClick={handlelogout} as={Link} to="/logout">Logout</Nav.Link>
                        ) : ( 
                            <>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/register">Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
                    <Outlet />
                </LoginStatusContext.Provider>
            </div>
        </div>
    );
}

export default BadgerLayout;