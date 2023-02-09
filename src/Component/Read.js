import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "semantic-ui-react";
import Create from "./Create";

const Read = () => {
    const navigate = useNavigate();
    const url = `https://crudcrud.com/api/b7fc87a7e1584fb4aaf12f7ec8493996/data`;
    const [APIData, setAPIData] = useState([]);
    const [createForm, setForm] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editData, seteditData] = useState(null);

    const getCookie = localStorage.getItem("token");
    useEffect(() => {
        if (!getCookie) {
            navigate("/signin");
        }
    }, [getCookie]);

    const getData = () => {
        axios.get(url).then((getData) => {
            setAPIData(getData.data);
        });
        setEdit(false);
        seteditData(null);
    };
    const onDelete = (id) => {
        axios
            .delete(
                `https://crudcrud.com/api/b7fc87a7e1584fb4aaf12f7ec8493996/data/${id}`
            )
            .then(() => {
                getData();
            });
        console.log(getData(), "delete");
    };
    useEffect(() => {
        axios.get(url).then((response) => {
            setAPIData(response.data);
        });
    }, []);

    const handleEdit = (data) => {
        setEdit(true);
        seteditData(data);
        setForm(true);
    };
    const handleAdd = () => {
        setForm(true);
        setEdit(false);
    };
    const closeForm = () => {
        setEdit(false);
        seteditData(null);
        setForm(false);
    };
    const logoutfun = () => {
        localStorage.removeItem("token");
        navigate("/Signin");
    };

    return (
        <div>
            <div className="logout-btn">
                <button onClick={() => logoutfun()}>Logout</button>
            </div>
            <button onClick={() => handleAdd()}>ADD</button>
            {createForm && (
                <Create
                    isEdit={isEdit}
                    editData={editData}
                    getData={getData}
                    closeForm={closeForm}
                />
            )}
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data?.Name ?? data.email}</Table.Cell>
                                <Table.Cell>{data.Age}</Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => handleEdit(data)}>Update</button>
                                </Table.Cell>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data._id)}>Delete</button>
                                </Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table>
        </div>
    );
};
export default Read;
