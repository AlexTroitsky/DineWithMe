import React, {useEffect} from 'react';
import {Col, } from "react-bootstrap";
import {useLocation} from "react-router-dom";
import Logout from "./logout";

export default function Header({isLoggedIn}) {

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log(isLoggedIn);

    return (
        <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                            <Col style={{"text-align": "center"}}>
                            <button className="navbar-toggler ftco-navbar-light" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="fa fa-bars" /> Menu
                            </button>
                            <div className="collapse navbar-collapse" id="ftco-nav">
                                <ul className="navbar-nav ml-auto">
                                    {/* <li className="nav-item"><a href="/contact" className="nav-link">צור קשר</a></li> */}
                                    {/* <li className="nav-item"><a href="/associations" className="nav-link">ארגונים</a></li> */}
                                    <li className={(splitLocation[1] === "login" || splitLocation[1] === "logout") ? "nav-item active" : "nav-item"}>{isLoggedIn ? <a onClick={Logout} className="nav-link">התנתק</a> : <a href="/login" className="nav-link"> התחבר</a>}</li>
                                    <li className={splitLocation[1] === "profile" ? "nav-item active" : "nav-item"}><a href="/profile" className="nav-link">פרופיל</a></li>
                                    <li className={splitLocation[1] === "recipes" ? "nav-item active" : "nav-item"}><a href="/recipes" className="nav-link">מתכונים</a></li>
                                    {isLoggedIn ? <li className={splitLocation[1] === "meals" ? "nav-item active" : "nav-item"}> <a href="/meals" className="nav-link">ארוחות</a> </li> : null}
                                    <li className={splitLocation[1] === "" ? "nav-item active" : "nav-item"}><a href="/" className="nav-link">בית</a></li>
                                </ul>
                            </div>
                            </Col>
                            <Col style={{"text-align": "right"}}>
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