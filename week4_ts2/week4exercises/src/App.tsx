import {ReactElement, useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Json endpoints are premade. Link/person post, link/person get, link/person/id put, link/person
//To run json-server locally (Be in the right folder): npx json-server --watch people.json --port 3001

function DisplayName(props: any) {
    return <div>
        {props.name}
    </div>
}

const deletePerson = (id: number) => {
    fetch(`http://localhost:3001/person/${id}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Person deleted:', data);
        })
        .catch(error => {
            console.error('There was a problem deleting the person:', error);
        });
};

function InputField(props: any) {


    return <div>
        <input className="logo" type="text" value={props.name}
               onChange={(evt) => props.setName(evt.target.value)}></input>

    </div>

}

function PeopleViewer(): ReactElement {
    const [person, setPerson] = useState<Person[]>([])
    type Person = {
        id: number, name: string, age: number, city: string, occupation: string
    }

    useEffect(() => {
        fetch("http://localhost:3001/person")
            .then((res) => res.json())
            .then((res) => setPerson(res))

    }, [])

    return <div>

        <table>
            <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Occupation</th>
            <th>Delete Person</th>
            </thead>
            {person.map((person: Person) =>
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.city}</td>
                    <td>{person.occupation}</td>
                    <td><button onClick={() => deletePerson(person.id)} style={{backgroundColor: 'darkred'}}>X</button></td>
                </tr>
            )}
        </table>
    </div>
}

function App() {
    const [name, setName] = useState<string>("")

    return (
        <div className="App">
            <div>


                <InputField setName={setName}></InputField>
                <br/>
                <DisplayName name={name}></DisplayName>

                <PeopleViewer/>


            </div>
        </div>
    )
}


export default App