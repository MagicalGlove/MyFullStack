import React, {useState, useEffect} from "react";
import persons from "./data.json"
import '/src/App.css'
import CreatePerson from "./Components/CreatePerson";
import CreateAddress from "./Components/CreateAddress";
import PeopleTable from "./Components/PeopleTable";



const App = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        setPeople(persons.people);
    }, []);

    return (
        <div>
            <h1>People List</h1>
            <PeopleTable people={people}/>
            <CreatePerson/>
            <CreateAddress/>
        </div>
    );
};

export default App;
