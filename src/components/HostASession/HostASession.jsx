import React, { useState } from 'react';
import { useSelector } from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function HostASession(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');

    return (
        <>
        <div>
            <h1> Host a Mediattive Session</h1>
        </div>

        <div>
        <form> 
            <h3>i am hosting</h3>
            <select> Type of</select>
            <h3> on</h3>
            <select>Date</select>
            <h3>at</h3>
            <select>Time</select>
            <input>address</input>
            <h3>for</h3>
            <select>number of people</select>
            <button>Update</button>
        </form>
       </div>
       </>
    );
}

export default HostASession;