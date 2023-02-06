import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Form } from "semantic-ui-react";
import Read from "./Read";
// import { useNavigate } from "react-router-dom";

const Create = ({ isEdit, editData, getData }) => {
    console.log(editData, '-------------')
    const url = `https://crudcrud.com/api/c920eff5d28e4061a1feab657b3bc442/data`;
    const [Name, setName] = useState(editData?.Name ? editData?.Name : '');
    const [Age, setAge] = useState(editData?.Age ? editData?.Age : '');
    const [com, setComp] = useState(false);
    // const navigate = useNavigate()

    const postData = () => {
        if (isEdit) {
            axios
                .put(
                    `https://crudcrud.com/api/c920eff5d28e4061a1feab657b3bc442/data/${editData._id}`,
                    {
                        Name,
                        Age

                    }
                )
                .then(() => {
                    getData();

                });

        } else {
            axios
                .post(url, {
                    Name,
                    Age,
                })
                .then((response) => {
                    console.log(response, 'response');
                    setComp(true);
                    setName("");
                    setAge("");
                    getData();
                    // navigate("/read");
                });

        }

    };

    // const getData = () => {
    //     axios.get(url)
    //         .then((getData) => {

    //         })
    // }

    useEffect(() => {
        if (isEdit && editData) {
            setName(editData.Name)
            setAge(editData.Age)
        }
    }, [isEdit, editData])

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name</label>
                    <input placeholder="Name" value={Name} onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Age</label>
                    <input placeholder="Age" value={Age} onChange={(e) => setAge(e.target.value)} />
                </Form.Field>
                {/* <Link to="/read"> */}
                {/* <Button onClick={postData} type="submit">
                    Submit
                </Button> */}
                {/* <Button onClick={() => postData()} type="button"> */}
                <Button onClick={() => postData()} type="submit">
                    Submit
                </Button>
                {/* </Link> */}
            </Form>
        </div>
    );
};
export default Create;
