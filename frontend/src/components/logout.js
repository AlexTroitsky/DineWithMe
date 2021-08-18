import React, { Component } from 'react';

export default function Logout() {
    localStorage.setItem('token', null)
    window.location.href = '/';
}