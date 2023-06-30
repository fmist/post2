import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import Service from "../api/Service";

const MenuBar = () => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        Service.request.get("/")
            .then(response => {
                setPosts(response.data)
                console.log(response.data)
            })
    }, [])

    const number = posts.length

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>Postmanager</Navbar.Brand>
                <Nav className="mt-auto">
                    <Nav.Link href="/">Posts</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/add">New post</Nav.Link>
                    <Nav.Link style={{color: "aqua"}}>You have {number} posts</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default MenuBar;