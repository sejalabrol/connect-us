import React from "react"

import { GoogleOutlined, GithubOutlined } from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
    return (
        <div id='login-page'>
            <div id='login-card'>
                <h2>Welcome to Connect Us!</h2>

                <div
                    className='login-button google'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign In with Google
                </div>

                <br /><br />

                <div
                    className='login-button github'
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GithubAuthProvider())}
                >
                    <GithubOutlined /> Sign In with Github
                </div>
            </div>
        </div>
    )
}