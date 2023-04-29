import React, { useState } from 'react';

function AddPerson({ addPerson }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name, age, email, address, url };
    addPerson(newPerson);
    setName('');
    setAge('');
    setEmail('');
    setAddress('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        id="age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />

      <label htmlFor="url">URL:</label>
      <input
        type="url"
        id="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />

      <button type="submit">Add Person</button>
    </form>
  );
}

export default AddPerson;
