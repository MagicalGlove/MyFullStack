import {ReactElement, useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

//Json endpoints are premade. Link/person post, link/person get, link/person/id put, link/person

function DisplayName(props: any) {
    return <div>
        {props.name}
    </div>
}

function InputField(props: any) {


    return <div>
        <input type="text" value={props.name} onChange={(evt) => props.setName(evt.target.value)}></input>

    </div>

}

function PeopleViewer(): ReactElement {
    const [person, setPerson] = useState<Person[]>([])
    type Person = { id: number, name: string, age: number, city: string }

    useEffect(() => {
        fetch("http://localhost:3008/person")
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
            </thead>
            {person.map((person: Person) =>
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.age}</td>
                    <td>{person.city}</td>
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