import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [psw, setPassword] = useState("");
    const [cpsw, setCpsw] = useState("");
    const getCookie = localStorage.getItem("token");
    useEffect(() => {
        if (getCookie) {
            navigate("/");
        }
    }, [getCookie]);

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = "Please enter the value in ";

        if (name === null || name === "") {
            isproceed = false;
            errormessage += "Name";
        }
        if (email === null || email === "") {
            isproceed = false;
            errormessage += " Email";
        }
        if (psw === null || psw === "") {
            isproceed = false;
            errormessage += " Password";
        }
        if (cpsw === null || cpsw === "") {
            isproceed = false;
            errormessage += "Confirm Password";
        }
        if (!isproceed) {
            alert(errormessage);
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            } else {
                isproceed = false;
                alert("Please enter the valid email");
            }
        }
        return isproceed;
    };

    async function signupFunc() {
        if (IsValidate()) {
            let items = { name, email, psw, cpsw };
            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name,
                    email: email,
                    psw: psw,
                    cpsw: cpsw,
                }),
            };
            let result = await fetch(
                "https://crudcrud.com/api/a2414ada59e84780b12edd634d9eda47/data",
                requestOptions
            );
            result = await result.json(items);
            localStorage.setItem("token", email);
            setName("");
            setEmail("");
            setPassword("");
            setCpsw("");
            navigate("/");
        }
    }
    return (
        <>
            <div className="container" id="main">
                <h2>Sign Up</h2>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="t1"
                        name="name"
                        autoComplete="off"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Name"
                    />
                </div>
                <br />
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
                <div className="form-group">
                    <label htmlFor="pwd">Confirm Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="t4"
                        autoComplete="off"
                        name="cpsw"
                        value={cpsw}
                        onChange={(e) => setCpsw(e.target.value)}
                        placeholder="Enter Your Confirm  Password"
                    />
                </div>
                <br />
                <div className="signin-btn">
                    <button onClick={() => signupFunc()}>Sign Up</button>
                </div>
            </div>
        </>
    );
};

export default Signup;
