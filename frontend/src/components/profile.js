import React, {Component, useEffect, useState} from 'react';
import axios from "axios";
import {HEADERS, REST_API_IP, TOKEN} from "../config";
import CircularProgress from "@material-ui/core/CircularProgress";


export default function Profile() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`${REST_API_IP}/details/`, {headers: HEADERS})
            .then(
                (result) => {
                    debugger
                    setProfile(result.data)
                    setIsLoaded(true);
                    console.log(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {
                setIsLoaded(true);
                console.log(error.response);
            })
    }, []);
    if (!isLoaded) {
         return (<div className="loading-card">
                    <CircularProgress size={68} />
                </div>);
    }

        return (
                <div>
                    <section className="hero-wrap hero-wrap-2" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' }} data-stellar-background-ratio="0.5">
                        <div className="overlay" />
                        <div className="container">
                            <div className="row no-gutters slider-text align-items-end">
                                <div className="col-md-9 pb-5" style={{ textAlign: "right", margin: "0 auto" }}>
                                    <h1 className="mb-0 bread">פרופיל משתמש</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ftco-section" style={{ padding: "4em 0em" }}>
                        <div className="media-body user-area" style={{ margin: "0em 25em" }}>
                            <div>
                                <div class="card-body py-3 px-0">
                                    <p className="mb-0 phone pl-md-2" style={{ textAlign: "right", width: "61%" }}>
                                    </p>
                                </div>
                            </div>
                            <div className="user-details">
                                <span>Username: {profile['username']}</span>
                                <br />
                                <span>Password: {profile['email']}</span>
                            </div>
                        </div>
                    </section>
                </div>
        )
}