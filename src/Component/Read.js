import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import Create from "./Create";

const Read = () => {
    const url = `https://crudcrud.com/api/c920eff5d28e4061a1feab657b3bc442/data`
    const [APIData, setAPIData] = useState([]);
    const [createForm, setForm] = useState(false);
    const [isEdit, setEdit] = useState(false);
    const [editData, seteditData] = useState(null);
    // const setData = (data) => {
    //     let { _id, Name, Age } = data;
    //     localStorage.setItem('ID', _id);
    //     localStorage.setItem('Name', Name);
    //     localStorage.setItem('Age', Age);
    // }

    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://crudcrud.com/api/c920eff5d28e4061a1feab657b3bc442/data/${id}`)
            .then(() => {
                getData();
            })
        console.log(getData(), 'delete')
    }

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setAPIData(response.data);
            });
    }, []);

    const handleEdit = (data) => {
        setEdit(true)
        seteditData(data)
    }

    const handleAdd = () => {
        setForm(true)
        setEdit(true)

    }

    return (
        <div>
            <button onClick={() => handleAdd()} >ADD</button>

            {
                createForm &&
                <Create isEdit={isEdit} editData={editData} getData={getData} />
            }
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Age</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.Name}</Table.Cell>
                                <Table.Cell>{data.Age}</Table.Cell>
                                {/* <Link to="/update"> */}
                                <Table.Cell>
                                    <button onClick={() => handleEdit(data)}>Update</button>
                                </Table.Cell>
                                {/* </Link> */}
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
