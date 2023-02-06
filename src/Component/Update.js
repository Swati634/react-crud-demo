import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Update = () => {

    const navigate = useNavigate();
    const [id, setID] = useState();
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    console.log(id, 'helloID')

    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
    }, []);

    const updateAPIData = () => {
        axios
            .put(
                `https://crudcrud.com/api/c920eff5d28e4061a1feab657b3bc442/data/${id}`,
                {
                    Name,
                    Age

                }
            )
            .then(() => {
                navigate("/read");
            });

    };
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input
                        placeholder="Name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input
                        placeholder="Age"
                        value={Age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    {/* <Link to="/read"> */}
                    <Button type="submit" onClick={updateAPIData}>
                        Update
                    </Button>
                    {/* </Link> */}
                </Form.Field>
            </Form>
        </div>
    );
};
export default Update;
