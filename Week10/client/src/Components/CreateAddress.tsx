import React, {useState} from 'react';

function AddAddress({addAddress}) {
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newAddress = {street, city};

        // I want to save the Address here, but I'm unable to since I cant access my mongoose database :'(

        setStreet("");
        setCity("");

        addAddress(newAddress);

    };

    return (
        <>
            <h1>Add Address!</h1>

            <form className={"formClass"} onSubmit={handleSubmit}>
                <label htmlFor="street">Street:</label>
                <input
                    type="text"
                    id="street"
                    value={street}
                    onChange={(event) => setStreet(event.target.value)}
                />
                <br/>
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    id="city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
                <br/>
                <button style={{margin: '15px'}} type="submit">Add Address</button>
            </form>
        </>
    );
}

export default AddAddress;
