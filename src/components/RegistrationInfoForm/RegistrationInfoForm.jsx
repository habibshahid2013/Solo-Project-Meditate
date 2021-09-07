import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function RegistrationInfoForm(props) {

    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');

    return (
        <form>
            <input>Email Address</input>
            <input>First Name</input>
            <input>last Name</input>
            <input>username</input>
            <input>created password</input>
            <input>re-enter password</input>
            <select> preferred Mediative practice</select>
            <select>Spritual belief</select>
            <button> Submit</button>
        </form>
    );
}

export default RegistrationInfoForm;