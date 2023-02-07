import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signin = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [psw, setPassword] = useState("")

    async function login() {
        let items = { email, psw }
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'email': email, 'psw': psw })
        };
        console.log(items, 'items')
        let result = await fetch("https://crudcrud.com/api/986e900b602d4e1f8d36a2ef59cee9de/data", requestOptions)
        result = await result.json(items)
        console.log('result', result);
        setEmail("")
        setPassword("")

    }
    const signinFun = () => {
        navigate("/")
    }
    const signupFun = () => {
        navigate("/signup")
    }
    return (
        <>
            <div className="container" id="main">
                <h1>Login Page</h1>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="t2"
                        name="email"
                        autoComplete="off"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email Address"
                    />
                </div>
                <br />
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="t3"
                        name="psw"
                        autoComplete="off"
                        value={psw}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <br />
                <div className="signin-btn">
                    <button onClick={() => signinFun()}>Sign In</button>
                </div>
                <div className="signin-btn">
                    <button onClick={() => signupFun()}>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Signin
