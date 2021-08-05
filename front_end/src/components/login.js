import React, { Component } from 'react';
import {Link} from "react-router-dom";


export default function Login() {

    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handlePasswordChanged = e => {
        setPassword(e.target.value)
    }

    const handleEmailChanged = e => {
        setEmail(e.target.value)
    }


    const onClick = data => {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8000/petWise/login', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            email: email,
            password: password
        }));

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            if (this.status == 200) {
                console.log(data)
                window.location.href = '../';
            }
            console.log(this.status)
        };
    };

    const forgotPassword = () => {
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", 'http://localhost:8000/petWise/forgot_password', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            email: email,
        }));

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                var data = JSON.parse(this.responseText);
                console.log(data)
                // we get the returned data
            }
            console.log(this.status)
            // end of state change: it can be after some time (async)
        };
    };
        return (
            <>
                <div className="login" style={{ backgroundImage: 'url("../assets/images/bg_2.jpg")' ,width: "99vw", height: "70vh", backgroundColor: "#f0f2f5", display: "flex",alignItems: "center",justifyContent: "center"}}>
                    <div className="loginWrapper" style={{ width: "70%", display: "flex", justifyContent: "center"}}>
                        <div className="loginRight" style={{  display: "flex",justifyContent: "center"}}>
                            <div className="loginBox" style={{ height: "300px", padding: "12%",backgroundColor: "#f1f1f1",borderRadius: "10px",display: "flex",flexDirection: "column",justifyContent: "space-between"}}>
                                <input placeholder="מייל" className="loginInput" onChange={handleEmailChanged} style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <input type="password" placeholder="סיסמה" className="loginInput" onChange={handlePasswordChanged} style={{ height: "50px",borderRadius: "10px",border: "1px solid gray",fontSize: "18px",paddingLeft: "20px"}} />
                                <button className="loginButton" onClick={onClick}
                                style={{ height: "50px",borderRadius: "10px",border: "none",backgroundColor: "#1775ee",color: "white",fontSize: "20px",fontWeight: "500",cursor: "pointer"}} >התחבר</button>
                                <span className="loginForgot" onClick={forgotPassword} style={{  textAlign: "center",color: "#1775ee"}} >?שכחת סיסמה</span>
                                <span className="register" style={{  textAlign: "center",color: "#1775ee"}} ><Link to="/register">הרשמה</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}