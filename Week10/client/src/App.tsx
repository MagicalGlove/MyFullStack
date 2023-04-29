import React, {useState, useEffect} from "react";
import persons from "./data.json"
import '/src/App.css'

const PeopleTable = ({people}) => {
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
                </tr>
            ))}
            </tbody>
        </table>
    );
};

const App = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setPeople(persons.people);
    }, []);

    return (
        <div>
            <h1>People List</h1>
            <PeopleTable people={people}/>
        </div>
    );
};

export default App;
