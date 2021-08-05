import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Col, Row} from "react-bootstrap";

export default function Header() {

    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [isAdmin, setIsAdmin] = React.useState(false);

    fetch('http://localhost:8000/petWise/user/is_admin').then(
        response => response.text()).then(
        data => setIsAdmin(data === "True"));

    fetch('http://localhost:8000/petWise/user/is_logged_in').then(
        response => response.text()).then(
        data => setIsLoggedIn(data === "True"));

    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                            <Col lg={6} style={{"text-align": "center"}}>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars" /> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav ml-auto">
                                    {/* <li className="nav-item"><a href="/contact" className="nav-link">צור קשר</a></li> */}
                                    {/* <li className="nav-item"><a href="/associations" className="nav-link">ארגונים</a></li> */}
                                    <li className="nav-item">{isLoggedIn ? <a href="/logout" className="nav-link">התנתק</a> : <a href="/login" className="nav-link"> התחבר</a>}</li>
                                    <li className="nav-item"><a href="/profile" className="nav-link">פרופיל</a></li>
                                    <li className="nav-item"><a href="/recepies" className="nav-link">מתכונים</a></li>
                                    {isLoggedIn ? <li className="nav-item"> <a href="/meals" className="nav-link">ארוחות</a> </li> : null}
                                    <li className="nav-item active"><a href="/" className="nav-link">בית</a></li>
                                </ul>
                            </div>
                            </Col>
                            <Col lg={6} style={{"text-align": "right"}}>
                                <a className="navbar-brand" href="/">
                                    <center>

                                    <i className="logo"/>
                                    <b color={"white"}>
                                        DineWithMe
                                    </b>
                                    </center>

                                    </a>


                            </Col>


                </div>
            </nav>
        </div>
    )
}