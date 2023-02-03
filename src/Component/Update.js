import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Update = () => {

    let history = useNavigate();
    const [id, setID] = useState();
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");
    console.log(id, 'gdsjdhkjsw')


    useEffect(() => {
        setID(localStorage.getItem("ID"));
        setName(localStorage.getItem("Name"));
        setAge(localStorage.getItem("Age"));
    }, []);

    const updateAPIData = () => {
        axios
            .put(
                `https://crudcrud.com/api/910b63c14fa04a2a95e9af8ab841c279/data/${id}`,
                {
                    Name,
                    Age

                }
            )
            .then(() => {
                history.push("/read");
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
                    <Button type="submit" onClick={updateAPIData}>
                        Update
                    </Button>
                </Form.Field>
            </Form>
        </div>
    );
};
export default Update;
