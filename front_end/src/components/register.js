import React, {Component} from 'react';


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
        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'http://localhost:8000/petWise/register', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send(JSON.stringify({
            email: email,
            password: password,
            username: username
        }));

        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;

            if (this.status === 200) {
                console.log(data)
                window.location.href = '../';
            }
            console.log(this.status)
        };
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