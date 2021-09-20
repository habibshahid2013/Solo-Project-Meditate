import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">

         
          <p>
          The intention of this application is to provide users the ability to share their Meditative preferences with one another.
          Providing a platform for users to find other users with matching meditative practices. 
          Also having the options to engage with each other. Finding session of interest and being able to connect with users of similar meditative practices. 
          The app will allow you to create and host a meditative session. Which can be found within the database. 
          From there you can interact within the chatroom to communicate and connect with each other on the web application. 
          </p>
        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
