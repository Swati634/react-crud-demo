import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
const Read = () => {
    const url = `https://crudcrud.com/api/910b63c14fa04a2a95e9af8ab841c279/data`
    const [APIData, setAPIData] = useState([]);
    const setData = (data) => {
        let { id, Name, Age } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', Name);
        localStorage.setItem('Age', Age);

    }
    const getData = () => {
        axios.get(url)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
    const onDelete = (id) => {
        axios.delete(`https://crudcrud.com/api/910b63c14fa04a2a95e9af8ab841c279/data/${id}`)
            .then(() => {
                getData();
            })
        console.log(getData(), 'hjkjkkj')
    }

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setAPIData(response.data);
            });
    }, []);
    return (
        <div>
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
                                <Link to="/update">
                                    <Table.Cell>
                                        <button onClick={() => setData(data)}>Update</button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <button onClick={() => onDelete(data.id)}>Delete</button>
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
