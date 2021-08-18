import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {HEADERS, REST_API_IP, TOKEN} from "../config";
import axios from "axios";


export default function Login() {

    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');

    const handlePasswordChanged = e => {
        setPassword(e.target.value)
    }

    const handleUsernameChanged = e => {
        setUsername(e.target.value)
    }


    const onClick = data => {
        axios.post(`${REST_API_IP}/login/`,
            {
                username: username,
                password: password
            }
        ).then((response) => {
            console.log(response)
           localStorage.setItem('token', response.data['auth_token'])
            window.location.href = '/';
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            })
    };


        return (
            <>
                <div className="login" style={{ width: "100vw", height: "70vh", backgroundColor: "#f0f2f5", display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <div className="loginWrapper" style={{ width: "70%", display: "flex", justifyContent: "center", }}>
                        <div className="loginRight" style={{  display: "flex",justifyContent: "center"}}>
                            <div className="loginBox" style={{ height: "300px", padding: "12%",backgroundColor: "#2f3030",borderRadius: "10px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                                <input placeholder="שם משתמש" className="loginInput" onChange={handleUsernameChanged} style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <input type="password" placeholder="סיסמה" className="loginInput" onChange={handlePasswordChanged} style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <button className="loginButton" onClick={onClick}
                                style={{ height: "50px",borderRadius: "10px",border: "none",backgroundColor: "#1775ee",color: "white",fontSize: "20px",fontWeight: "500",cursor: "pointer"}} >התחבר</button>
                                <span className="register" style={{  textAlign: "center",color: "#1775ee !important"}} ><Link to="/register">הרשמה</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}