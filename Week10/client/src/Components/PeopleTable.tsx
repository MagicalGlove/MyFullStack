import React, {useState} from 'react';

function PeopleTable ({people}) {
    return (
        <table>
            <thead>
            <tr className={"tableHead"}>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Address</th>
                <th>Image</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {people.map((person) => (
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.email}</td>
                    <td>{person.address}</td>
                    <td><img alt={"Image of " + person.name} style={{ width: "125px", height: "100px" }} src={person.image}/></td>
                    <td><button style={{backgroundColor: 'red'}} /*onClick={()=>handleSubmit(person.id)}*/>X</button></td>
                </tr>
            ))}
            </tbody>
        </table>
    );
}

export default PeopleTable;