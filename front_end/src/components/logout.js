import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function Logout() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://localhost:8000/petWise/logout', true);
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        xhr.send();

        xhr.onreadystatechange = function () {
            if (this.readyState != 4) return;

            if (this.status == 200) {
                window.location.href = '../login';
            }
        };
    return (
        <>
        </>
    )
}