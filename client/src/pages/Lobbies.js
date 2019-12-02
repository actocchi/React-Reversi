import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card"
import Header from "../components/Header"
import Nav from "../components/Nav"
import API from "../utils/API"
import Avatar from '@material-ui/core/Avatar';

const username = localStorage.getItem("username")

const Lobbies = () => {
    const [state, setState] = useState({
        lobbies: []
    })

    useEffect(() => {
        API.getLobby().then(results => {
            if (results.data !== []) {
                setState({
                    lobbies: results.data
                })
            }
        })
    })

    const handleClick = (e) => {
        API.updateLobby(e.id, username)
        localStorage.setItem("lobby", e.id)
        document.location.href = "/lobby";

    }

    const handleSubmit = (e) => {
        
    }



    return (
        <div>
            <Header />
            <Nav />

            <Row>
                <Col size="md-2"></Col>
                <Col size="md-4">
                    <h1>Create a lobby</h1>
                    <form id="createLobby">
                        Name:
                        <input id="name" type="text"></input>
                    </form>
                </Col>
                <Col size="md-6">
                    <h1>Join a loby</h1>
                    {state.lobbies.map(item => {
                        if (item.hasRoom) {
                            return (
                                <h4><button id="hi" onClick={(e) => handleClick(item)}>{item.name}</button></h4>
                            )
                        }
                    })}
                </Col>
            </Row>
        </div>
    )
}


export default Lobbies;