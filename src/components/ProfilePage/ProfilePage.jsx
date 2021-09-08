import React, { useState } from 'react';
import { useSelector } from 'react-redux';


function ProfilePage(props) {
    
    const store = useSelector((store) => store);
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <button>Log Out</button>
            <img></img>
            <h3>Insert Name</h3>

            <form> 
            <h2>I am seeking...</h2>
            <select>
                    
        
            </select>
                <select> 
                    <option defaultValue=""> select here</option>
                    <option value="1">mindfulness meditation</option>
                    <option value="2">spiritual meditation</option>
                    <option value="3">focused meditation</option>
                    <option value="4">movement meditation</option>
                    <option value="5">mantra meditation</option>
                    <option value="6">transcendental meditation</option>
                    <option value="7">loving-kindness meditation</option>
                    <option value="8">visualization meditation</option>
                </select>

            </form>
            <button> Host A Session</button>
        </div>
    );
}

export default ProfilePage;
