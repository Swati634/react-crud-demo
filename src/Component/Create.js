import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";

const Create = () => {
    const url = `https://crudcrud.com/api/910b63c14fa04a2a95e9af8ab841c279/data`
    const [Name, setName] = useState("");
    const [Age, setAge] = useState("");

    const postData = () => {
        axios.post(
            url,
            {
                Name,
                Age
            }
        );
        setName("");
        setAge("");
    };

    console.log(Name, Age, "hello");
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                </Form.Field>
                <Button onClick={postData} type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};
export default Create;
