import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
      <h1> Technologies used in this Application</h1>
     <ul>
       <li>Postgres</li>
       <li> JavaScript</li>
       <li>React.Js</li>
       <li>CSS</li>
       <li>Redux</li>
       <li>Node.Js</li>
       <li>Saga </li>
       <li> Heroku</li>
       <li> Firebase</li>
       <li>Google Authentication</li>
     </ul>
     <div>
      <h3>Largest Challenge</h3>
      <ul>
        <li>Getting all my routes to work within the database.</li>
        <li> Getting the library to connect for Firebase</li>
      </ul>
    </div>

    <div>
      <h3>Things to expand on the application in the future</h3>
      <ol>
        <li>Build a profile pages for individual users.</li>
        <li>Provide more styling for the appeal.</li>
        <li> Make the dashboard more interactive.</li>
        <li> Create a matching feature through the interest provided in the registration.</li>
      </ol>
    </div>

     <div>
      <h3>Special Thanks</h3>
      <ul>
        <li>To my family and Son</li>
      </ul>
    </div>
    
    </div>
    
    
    
  );
}

export default InfoPage;
