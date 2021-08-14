import React, {Component} from 'react';
import axios from "axios";
import {HEADERS, REST_API_IP, TOKEN} from "../config";


export default function Register() {

    const [password, setPassword] = React.useState('');
    const [repassword, setRepassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handlePasswordChanged = e => {
        setPassword(e.target.value)
    }

    const handleRepasswordChanged = e => {
        setRepassword(e.target.value)
    }

    const handleEmailChanged = e => {
        setEmail(e.target.value)
    }

    const handleUsernameChanged = e => {
        setUsername(e.target.value)
    }


    const onClick = data => {
        if (password !== repassword) {
            alert("הסיסמאות לא זהות")
            return;
        }

        axios.post(`${REST_API_IP}/register/`,
            {
                email: email,
                password: password,
                confirm_password: repassword,
                username: username},
            {headers: HEADERS})
            .then(
                (result) => {
                    localStorage.setItem('token', result.data['token'])
                    window.location.href = '/';
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
            ).catch((error) => {

                let response = JSON.stringify(error.response.data)
                alert(response);
                console.log(error.response);
            });
    };

    return (
        <>
            <div className="register" style={{
                backgroundImage: 'url("../assets/images/bg_2.jpg")',
                width: "99vw",
                height: "70vh",
                backgroundColor: "#f0f2f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <div className="registerWrapper" style={{width: "70%", display: "flex", justifyContent: "center"}}>
                    <div className="registerRight" style={{display: "flex", justifyContent: "center"}}>
                        <div className="registerBox" style={{
                            height: "300px",
                            padding: "12%",
                            backgroundColor: "#f1f1f1",
                            borderRadius: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <input placeholder="שם משתמש" className="registerInput" onChange={handleUsernameChanged} style={{
                                height: "50px",
                                borderRadius: "10px",
                                border: "1px solid gray",
                                fontSize: "18px",
                                paddingLeft: "20px"
                            }}/>
                            <input placeholder="מייל" className="registerInput" onChange={handleEmailChanged} style={{
                                height: "50px",
                                borderRadius: "10px",
                                border: "1px solid gray",
                                fontSize: "18px",
                                paddingLeft: "20px"
                            }}/>
                            <input type="password" placeholder="הקלידו סיסמה" className="registerInput"
                                   onChange={handlePasswordChanged} style={{
                                height: "50px",
                                borderRadius: "10px",
                                border: "1px solid gray",
                                fontSize: "18px",
                                paddingLeft: "20px"
                            }}/>
                            <input type="password" placeholder="הקלידו סיסמה שוב" className="registerInput"
                                   onChange={handleRepasswordChanged} style={{
                                height: "50px",
                                borderRadius: "10px",
                                border: "1px solid gray",
                                fontSize: "18px",
                                paddingLeft: "20px"
                            }}/>
                            <button className="registerButton" onClick={onClick}
                                    style={{
                                        height: "50px",
                                        borderRadius: "10px",
                                        border: "none",
                                        backgroundColor: "#1775ee",
                                        color: "white",
                                        fontSize: "20px",
                                        fontWeight: "500",
                                        cursor: "pointer"
                                    }}>הרשם
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}