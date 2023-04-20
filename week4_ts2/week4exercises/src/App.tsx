import {ReactElement, useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Json endpoints are premade. Link/person post, link/person get, link/person/id put, link/person
//To run json-server locally (Be in the right folder): npx json-server --watch person.json --port 3001


type Person = {
    id: number, name: string, age: number, city: string, occupation: string
}

const httpLink = "http://localhost:3008/person"

function DisplayName(props: any) {
    return <div>
        {props.name}
    </div>
}

const editPerson = (person: Person) => {
    console.log(person)
    fetch(`${httpLink}/${person.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Person edited:', data);
        })
        .catch(error => {
            console.error('There was a problem editing the person:', error);
        });
};

const createPerson = (person: Person) => {
    fetch(httpLink, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(person)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Person created:', data);
        })
        .catch(error => {
            console.error('There was a problem creating the person:', error);
        });
};


const deletePerson = (id: number) => {
    fetch(`${httpLink}/${id}`, {
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


    useEffect(() => {
        fetch(httpLink)
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
                    <td>
                        <button onClick={() => deletePerson(person.id)} style={{backgroundColor: 'darkred'}}>X</button>
                    </td>
                </tr>
            )}
        </table>
    </div>
}

function App() {
    const [name, setName] = useState<string>("");
    const [personBeingCreated, setPersonBeingCreated] = useState<Person>({
        id: 0,
        name: "",
        age: 0,
        city: "",
        occupation: ""
    });

    const handleChange = (event: any) => {
        setPersonBeingCreated({...personBeingCreated, [event.target.name]: event.target.value});
    }

    return (
        <div className="App">
            <div>
                <InputField setName={setName}></InputField>
                <br/>
                <DisplayName name={name}></DisplayName>
                <PeopleViewer/>

                <>
                    <form>
                        <label>
                            Id:
                            <br/>
                            <input type="number" name="id" placeholder="id" value={personBeingCreated.id}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Name:
                            <br/>
                            <input type="text" name="name" placeholder="Bob" value={personBeingCreated.name}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Age:
                            <br/>
                            <input type="text" name="age" placeholder="25" value={personBeingCreated.age}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            City:
                            <br/>
                            <input type="text" name="city" placeholder="HamburgerCity" value={personBeingCreated.city}
                                   onChange={handleChange}/>
                        </label>
                        <br/>
                        <label>
                            Occupation:
                            <br/>
                            <input type="text" name="occupation" placeholder="Scientist" value={personBeingCreated.occupation}
                                   onChange={handleChange}/>
                        </label>
                    </form>
                    <br/>
                    <div>
                    <button className="createAndEditDogsButtons" onClick={() => createPerson(personBeingCreated)}>Create Person!</button>
                    <button className="createAndEditDogsButtons" onClick={() => editPerson(personBeingCreated)}>Edit Person!</button>
                    </div>

                </>

            </div>
        </div>
    )
}


export default App