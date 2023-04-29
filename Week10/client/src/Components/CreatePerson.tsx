import React, {useState} from 'react';

function AddPerson({addPerson}) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [url, setUrl] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPerson = {name, age, email, address, url};

        // I want to save the person here, but I'm unable to since I cant access my mongoose database :'(

        setName("");
        setAge("");
        setEmail("");
        setAddress("");
        setUrl("");

        addPerson(newPerson);

    };

    return (
        <>
            <h1>Add Person!</h1>

            <form className={"formClass"} onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <br/>
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(event) => setAge(event.target.value)}
                />
                <br/>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <br/>
                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
                <br/>
                <label htmlFor="url">URL:</label>
                <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                />
                <br/>
                <button style={{margin: '15px'}} type="submit">Add Person</button>
            </form>
        </>
    );
}

export default AddPerson;
